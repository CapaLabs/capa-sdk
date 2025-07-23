const { CapaV2Client } = require("../dist/v2/index.js");

console.log("🧪 Running integration tests...\n");

// Test 1: Client initialization with interface
console.log("Test 1: Client initialization with interface");
try {
  const config = {
    baseUrl: "https://api.capa.com",
    partnerApiKey: "test-api-key",
  };

  const client = new CapaV2Client(config);
  console.log("✅ Client initialized successfully");
  console.log("   - Base URL:", client.baseUrl || "private");
  console.log(
    "   - Services available:",
    Object.keys(client).filter(
      (key) => key !== "baseUrl" && key !== "partnerApiKey"
    )
  );
} catch (error) {
  console.error("❌ Client initialization failed:", error.message);
  process.exit(1);
}

// Test 2: Service availability
console.log("\nTest 2: Service availability");
try {
  const client = new CapaV2Client({
    baseUrl: "https://api.capa.com",
    partnerApiKey: "test-api-key",
  });

  const requiredServices = [
    "offRamp",
    "onRamp",
    "quotes",
    "kyc",
    "users",
    "webhookSettings",
    "transactions",
  ];
  const availableServices = Object.keys(client).filter(
    (key) => key !== "baseUrl" && key !== "partnerApiKey"
  );

  const missingServices = requiredServices.filter(
    (service) => !availableServices.includes(service)
  );

  if (missingServices.length === 0) {
    console.log("✅ All required services are available");
    console.log("   - Available services:", availableServices.join(", "));
  } else {
    console.error("❌ Missing services:", missingServices);
    process.exit(1);
  }
} catch (error) {
  console.error("❌ Service availability test failed:", error.message);
  process.exit(1);
}

// Test 3: Client methods
console.log("\nTest 3: Client methods");
try {
  const client = new CapaV2Client({
    baseUrl: "https://api.capa.com",
    partnerApiKey: "test-api-key",
  });

  // Test that services have expected methods
  if (typeof client.offRamp.createPartnerOffRamp === "function") {
    console.log("✅ Service methods are available");
  } else {
    console.error("❌ Service methods not found");
    process.exit(1);
  }
} catch (error) {
  console.error("❌ Client methods test failed:", error.message);
  process.exit(1);
}

console.log("\n🎉 All integration tests passed!");
console.log("The package is correctly configured and ready for use.");
