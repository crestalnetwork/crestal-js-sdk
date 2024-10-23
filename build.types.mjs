import typescript from 'typescript';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read tsconfig.json
const configPath = resolve(__dirname, 'tsconfig.json');
const configFile = typescript.readConfigFile(configPath, typescript.sys.readFile);
const parsedConfig = typescript.parseJsonConfigFileContent(
  configFile.config,
  typescript.sys,
  __dirname
);

// Create program and emit
const program = typescript.createProgram(parsedConfig.fileNames, parsedConfig.options);
const emitResult = program.emit();

// Report errors
const allDiagnostics = typescript
  .getPreEmitDiagnostics(program)
  .concat(emitResult.diagnostics);

allDiagnostics.forEach(diagnostic => {
  if (diagnostic.file) {
    const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
    const message = typescript.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
    console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
  } else {
    console.log(typescript.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
  }
});

// Print out which files were processed
const sourceFiles = program.getSourceFiles()
  .filter(file => !file.isDeclarationFile)
  .map(file => file.fileName);

console.log('\nProcessed files:');
sourceFiles.forEach(file => console.log(file));

const exitCode = emitResult.emitSkipped ? 1 : 0;
console.log(`\nProcess exiting with code '${exitCode}'.`);
process.exit(exitCode);