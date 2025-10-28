const crypto = require("crypto");

// Generate secrets
const adminJWT = crypto.randomBytes(32).toString("base64");
const jwtSecret = crypto.randomBytes(32).toString("base64");
const apiToken = crypto.randomBytes(32).toString("base64");
const transferToken = crypto.randomBytes(32).toString("base64");
const appKeys = Array.from({ length: 4 }, () =>
  crypto.randomBytes(16).toString("base64")
).join(",");

console.log("\n📋 Copy these values to Railway Variables:\n");
console.log(`ADMIN_JWT_SECRET=${adminJWT}`);
console.log(`JWT_SECRET=${jwtSecret}`);
console.log(`API_TOKEN_SALT=${apiToken}`);
console.log(`TRANSFER_TOKEN_SALT=${transferToken}`);
console.log(`APP_KEYS=${appKeys}`);
console.log("");
