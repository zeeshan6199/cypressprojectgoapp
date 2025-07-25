// run-multiple-times.js
const { execSync } = require('child_process');

const TOTAL_RUNS = 4; // Set the number of times you want to run the test
let passed = 0;
let failed = 0;

for (let i = 1; i <= TOTAL_RUNS; i++) {
  // Corrected: Use template literal for clear string and variable 'i'
  console.log(`Run ${i}`);

  try {
    // Run Cypress (adjust spec path or config as needed)
    execSync('npx cypress run', { stdio: 'inherit' });
    // Corrected: Use template literal for clear string and variables
    console.log(`Run ${i} passed`);
    passed++;
  } catch (error) {
    // Corrected: Use template literal for clear string and variables
    console.log(`Run ${i} failed`);
    failed++;
  }
}

console.log('\n📊 Test Run Summary');
console.log('-----------------------');
// Corrected: Use template literal for clear string and variable
console.log(`Total Runs: ${TOTAL_RUNS}`);
// Corrected: Use template literal for clear string and variable
console.log(`Passed: ${passed}`);
// Corrected: Use template literal for clear string and variable
console.log(`Failed: ${failed}`);