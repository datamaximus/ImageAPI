import express from "express";
import sharp from "sharp";
import fileExists from "./fileCheck";

// Set base path
const path = "./public/assets/thumb/";

async function sharpen(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  // Set resizing values form query
  const filename = String(req.query.filename);
  const width = String(req.query.width);
  const height = String(req.query.height);
  const resizedFile = String(`${path}${filename}${width}x${height}.jpeg`);

  // Check if file exists in local directory
  const exists = fileExists(String(`${resizedFile}`));

  if (!exists) {
    try {
      await sharp(String(`./public/assets/full/${filename}.jpeg`))
        .resize(Number(width), Number(height))
        .toFile(String(resizedFile));
      res.sendFile(String(resizedFile), {
        root: ".",
      });
    } catch (err) {
      next(err);
    }
  } else {
    try {
      res.sendFile(String(resizedFile), {
        root: ".",
      });
    } catch (err) {
      next(err);
    }
  }
  next();
}

export default sharpen;
