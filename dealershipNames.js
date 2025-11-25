// listDealershipFolders.js

const fs = require("fs");
const path = require("path");

const dealershipsPath = path.join(__dirname, "Dealerships");

fs.readdir(dealershipsPath, { withFileTypes: true }, (err, entries) => {
  if (err) {
    console.error("Error reading Dealerships folder:", err.message);
    process.exit(1);
  }

  const folders = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  folders.forEach((folder, index) => {
    const isLast = index === folders.length - 1;
    console.log(`"${folder}"${isLast ? "" : ","}`);
  });
});
