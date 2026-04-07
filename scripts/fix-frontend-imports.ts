import { Project } from "ts-morph";

const project = new Project({
    tsConfigFilePath: "apps/frontend/tsconfig.json",
});

const sourceFiles = project.getSourceFiles();

sourceFiles.forEach(sourceFile => {
    let modified = false;
    const imports = sourceFile.getImportDeclarations();

    imports.forEach(i => {
        const moduleSpecifier = i.getModuleSpecifierValue();
        if (moduleSpecifier.startsWith("../")) {
            let newPath = moduleSpecifier;

            // External dependencies via aliases
            newPath = newPath.replace(/^(\.\.\/)+shared\//, "@shared/");
            newPath = newPath.replace(/^(\.\.\/)+engine\//, "@engine/");
            newPath = newPath.replace(/^(\.\.\/)+infra\//, "@infra/");
            newPath = newPath.replace(/^(\.\.\/)+modules\//, "@modules/");
            newPath = newPath.replace(/^(\.\.\/)+backend\//, "@backend/");

            // Specific stray modules from monolithic architecture
            newPath = newPath.replace(/^(\.\.\/)+workflows\//, "@modules/workflows/");
            newPath = newPath.replace(/^(\.\.\/)+db\//, "@infra/db/");
            newPath = newPath.replace(/^(\.\.\/)+services\//, "@backend/services/");

            // Internal frontend paths mapped to root `@/`
            if (newPath.match(/^(\.\.\/)+components\//)) {
                newPath = newPath.replace(/^(\.\.\/)+components\//, "@/components/");
            }
            if (newPath.match(/^(\.\.\/)+lib\//)) {
                newPath = newPath.replace(/^(\.\.\/)+lib\//, "@/lib/");
            }

            if (newPath !== moduleSpecifier) {
                i.setModuleSpecifier(newPath);
                modified = true;
            }
        }
    });

    if (modified) {
        sourceFile.saveSync();
        console.log(`AST Rewrite: Updated imports in ${sourceFile.getFilePath()}`);
    }
});
