import fs from "fs";

// Check if file exists at provide path
function fileExists(path: string): boolean {
  try {
    fs.accessSync(path, fs.constants.R_OK);
    return true;
  } catch (e) {
    return false;
  }
}

export default fileExists;
