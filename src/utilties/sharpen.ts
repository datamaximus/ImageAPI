import express from "express";
import sharp from "sharp";
import fs from "fs";

const path = "./public/assets/thumb/";

const sharpen = async (
  req: express.Request,
  res: express.Response,
  next: () => void
) => {
  const filename = String(req.query.filename);
  const width = String(req.query.width);
  const height = String(req.query.height);

  fs.access(
    String(`${path}${filename}${width}x${height}.jpeg`),
    fs.constants.R_OK,
    async (err) => {
      if (err) {
        await sharp(String(`./public/assets/full/${filename}.jpeg`))
          .resize(Number(width), Number(height))
          .toFile(String(`${path}${filename}${width}x${height}.jpeg`));
        res.sendFile(String(`${path}${filename}${width}x${height}.jpeg`), {
          root: ".",
        });
      } else {
        res.sendFile(String(`${path}${filename}${width}x${height}.jpeg`), {
          root: ".",
        });
      }
    }
  );

  next();
};

export default sharpen;
