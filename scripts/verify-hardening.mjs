import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const forbiddenPhrases = [
  'diagnostisch wertlos',
  'absolute Klarheit',
  'am wahrscheinlichsten',
  'Goldstandard',
  'deckt Defizite auf, lange bevor',
  'verschweigt Vitamine',
  'zweifelsfrei beweisen',
  'jodophor',
  'beste Mittel',
  'Testsieger',
  'doppelt so viel Zink',
  'Was hilft gegen',
  'zwingend',
  'eindeutig',
  'beweist ein Defizit',
  'sicherer Mangel',
  'bester Marker',
  'bester Wert',
  'Männer & postmenopausale Frauen 11 mg',
  'Männer und postmenopausale Frauen 11 mg',
  'Kasse zahlt nur ungenaues Serum',
  'um ein Vielfaches aussagekräftiger'
];

function checkFiles(dir, extensions = ['.ts', '.tsx', '.html', '.js']) {
  let errors = 0;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === 'dist' || file === 'dist-ssr' || file === '.git' || file === 'scripts') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      errors += checkFiles(fullPath, extensions);
    } else if (extensions.some(ext => file.endsWith(ext))) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      for (const phrase of forbiddenPhrases) {
        if (content.toLowerCase().includes(phrase.toLowerCase())) {
          console.error(`❌ Forbidden phrase found in ${path.relative(rootDir, fullPath)}: "${phrase}"`);
          errors++;
        }
      }
    }
  }
  return errors;
}

console.log('--- Scanning codebase for forbidden phrases & unsubstantiated claims ---');
const totalErrors = checkFiles(path.join(rootDir, 'src')) + 
                    checkFiles(rootDir, ['.html']) + 
                    checkFiles(rootDir, ['prerender.js']);

if (totalErrors === 0) {
  console.log('✅ Zero forbidden phrases found across entire active codebase.');
} else {
  console.error(`❌ Verification failed with ${totalErrors} issue(s).`);
  process.exit(1);
}
