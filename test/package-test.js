const fs = require("fs");
const path = require("path");

console.log("📦 Testing package structure...\n");

// Test 1: Check if dist directory exists
console.log("Test 1: Build output directory");
const distPath = path.join(__dirname, "../dist");
if (!fs.existsSync(distPath)) {
  console.error('❌ dist directory not found. Run "npm run build" first.');
  process.exit(1);
}
console.log("✅ dist directory exists");

// Test 2: Check main entry point
console.log("\nTest 2: Main entry point");
const mainEntry = path.join(distPath, "index.js");
if (!fs.existsSync(mainEntry)) {
  console.error("❌ Main entry point (dist/index.js) not found");
  process.exit(1);
}
console.log("✅ Main entry point exists");

// Test 3: Check type definitions
console.log("\nTest 3: Type definitions");
const typeEntry = path.join(distPath, "index.d.ts");
if (!fs.existsSync(typeEntry)) {
  console.error("❌ Type definitions (dist/index.d.ts) not found");
  process.exit(1);
}
console.log("✅ Type definitions exist");

// Test 4: Check v2 module
console.log("\nTest 4: V2 module");
const v2Entry = path.join(distPath, "v2/index.js");
const v2Types = path.join(distPath, "v2/index.d.ts");
if (!fs.existsSync(v2Entry)) {
  console.error("❌ V2 module (dist/v2/index.js) not found");
  process.exit(1);
}
if (!fs.existsSync(v2Types)) {
  console.error("❌ V2 type definitions (dist/v2/index.d.ts) not found");
  process.exit(1);
}
console.log("✅ V2 module and types exist");

// Test 5: Check package.json exports
console.log("\nTest 5: Package.json exports");
const packageJson = require("../package.json");
if (!packageJson.exports) {
  console.error("❌ Package.json missing exports field");
  process.exit(1);
}
console.log("✅ Package.json exports configured");

// Test 6: Test actual import
console.log("\nTest 6: Import functionality");
try {
  const { CapaV2Client } = require("../dist/index.js");
  const client = new CapaV2Client({
    baseUrl: "https://api.capa.com",
    partnerApiKey: "test-key",
  });
  console.log("✅ Package can be imported and used");
} catch (error) {
  console.error("❌ Import test failed:", error.message);
  process.exit(1);
}

console.log("\n🎉 Package structure is correct!");
console.log("The package is ready for publishing.");
