import { validateDependency } from '../shared/lib/workflow-validation';
import { computeWorkflowState } from '../engine/execution/unified-engine';
import { Task } from '../shared/types/task';

// --- MOCK DATA GENERATOR ---
const createBaseTask = (id: string, title: string): Task => ({
    id,
    title,
    description: '',
    status: 'READY',
    task_type: 'HUMAN',
    graph_order: 0,
    level: 0,
    phase_id: 'p1',
    task_order: 0,
    created_at: new Date().toISOString(),
    depends_on: [],
    meta: { source: 'AI', is_removed: false }
});

async function runTests() {
    console.log("🚀 [ENGINE VALIDATION] Starting Comprehensive Test Suite...\n");

    // TEST 1: Circular Dependency Detection
    console.log("🧪 TEST 1: Circular Dependency (A -> B, B -> A)");
    const t1A = createBaseTask('A', 'Task A');
    const t1B = createBaseTask('B', 'Task B');
    t1B.depends_on = ['A'];

    const result1 = validateDependency('A', 'B', [t1A, t1B]);
    if (!result1.valid && result1.error?.includes("Circular")) {
        console.log("✅ PASS: Circular dependency blocked correctly.");
    } else {
        console.log("❌ FAIL: Circular dependency went undetected.", result1);
    }

    // TEST 2: Self Dependency Detection
    console.log("\n🧪 TEST 2: Self Dependency (A -> A)");
    const t2A = createBaseTask('A', 'Task A');
    const result2 = validateDependency('A', 'A', [t2A]);
    if (!result2.valid) {
        console.log("✅ PASS: Self-dependency blocked.");
    } else {
        console.log("❌ FAIL: Self-dependency permitted.");
    }

    // TEST 3: Status Propagation - Parent Dependency Inheritance
    console.log("\n🧪 TEST 3: Parent Inheritance (Parent BLOCKED -> Subtask BLOCKED)");
    const parent = createBaseTask('P1', 'Parent');
    const dep = createBaseTask('D1', 'Dependency');
    const sub = createBaseTask('S1', 'Subtask');

    parent.depends_on = ['D1'];
    parent.level = 0;
    sub.parent_id = 'P1';
    sub.level = 1;
    dep.status = 'READY'; // Dependency exists but not done

    const tasks3 = [parent, dep, sub];
    const recomputed3 = computeWorkflowState(tasks3) as any[];

    const subStatus = recomputed3.find((t: any) => t.id === 'S1')?.status;
    const parentStatus = recomputed3.find((t: any) => t.id === 'P1')?.status;

    console.log(`   - Parent [READY, depends on READY D1] status: ${parentStatus}`);
    console.log(`   - Subtask status: ${subStatus}`);

    if (parentStatus === 'BLOCKED' && subStatus === 'BLOCKED') {
        console.log("✅ PASS: Subtask correctly inherits 'BLOCKED' from parent's prerequisites.");
    } else {
        console.log("❌ FAIL: Subtask failed to inherit parent block.");
    }

    // TEST 4: Parent Completion Aggregation
    console.log("\n🧪 TEST 4: Parent Completion (All Children DONE -> Parent DONE)");
    const p4 = createBaseTask('P4', 'Parent');
    const s4a = createBaseTask('S4A', 'Subtask A');
    const s4b = createBaseTask('S4B', 'Subtask B');

    p4.level = 0;
    s4a.parent_id = 'P4';
    s4a.level = 1;
    s4a.status = 'DONE';
    s4b.parent_id = 'P4';
    s4b.level = 1;
    s4b.status = 'DONE';

    const tasks4 = [p4, s4a, s4b];
    const recomputed4 = computeWorkflowState(tasks4) as any[];

    const parent4Status = recomputed4.find((t: any) => t.id === 'P4')?.status;
    if (parent4Status === 'DONE') {
        console.log("✅ PASS: Parent correctly marked DONE after children completion.");
    } else {
        console.log(`❌ FAIL: Parent status is ${parent4Status}, expected DONE.`);
    }

    console.log("\n🏁 [VALIDATION COMPLETE] All results verified in terminal output.");
}

runTests().catch(console.error);
