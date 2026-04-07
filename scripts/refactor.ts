import { Project, Directory } from 'ts-morph';
import * as path from 'path';
import * as fs from 'fs';

async function main() {
    console.log("Initializing Project...");
    const project = new Project({
        tsConfigFilePath: "tsconfig.json",
    });

    const moveFiles = (srcDirStr: string, destDirStr: string) => {
        const dir = project.getDirectory(srcDirStr);
        if (!dir) {
            console.warn(`Warning: Directory ${srcDirStr} not found`);
            return;
        }

        const files = dir.getDescendantSourceFiles();
        console.log(`Moving ${files.length} files from ${srcDirStr} to ${destDirStr}...`);

        for (const file of files) {
            const relPath = path.relative(path.resolve(srcDirStr), file.getFilePath());
            const newPath = path.resolve(destDirStr, relPath);

            const targetParent = path.dirname(newPath);
            if (!fs.existsSync(targetParent)) {
                fs.mkdirSync(targetParent, { recursive: true });
            }

            try {
                file.move(newPath);
            } catch (e) {
                console.error(`Error moving ${file.getFilePath()} to ${newPath}`, e);
            }
        }
    };

    // Move files individually to avoid Windows EPERM/ENOENT directory rename bugs
    moveFiles('app/api', 'apps/backend/api');
    moveFiles('services', 'apps/backend/services');

    moveFiles('app', 'apps/frontend/app');
    moveFiles('components', 'apps/frontend/components');

    moveFiles('workflows', 'modules/workflows');

    moveFiles('types', 'shared/types');
    moveFiles('utils', 'shared/utils');
    moveFiles('lib', 'shared/lib');

    moveFiles('db', 'infra/db');

    const moveSingleFile = (oldPath: string, newPath: string) => {
        const file = project.getSourceFile(oldPath);
        if (file) {
            const targetParent = path.dirname(path.resolve(newPath));
            if (!fs.existsSync(targetParent)) fs.mkdirSync(targetParent, { recursive: true });
            file.move(newPath);
        }
    };

    moveSingleFile('ai/structuring-engine.ts', 'engine/validation/structuring-engine.ts');
    moveSingleFile('ai/next-action-engine.ts', 'engine/execution/next-action-engine.ts');
    moveSingleFile('ai/execution-engine.ts', 'engine/execution/execution-engine.ts');
    moveFiles('ai/prompts', 'engine/simulation/prompts');
    moveSingleFile('middleware.ts', 'infra/middleware/middleware.ts');

    console.log("Saving AST rewrites and moving files on disk...");
    await project.save();
    console.log("TypeScript AST Migration Complete.");
}

main().catch(err => {
    console.error("FATAL ERROR:", err);
    process.exit(1);
});
