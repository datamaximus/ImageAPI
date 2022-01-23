import express from "express";
import sharp from "sharp";
import fs from "fs";

const path = "./public/assets/thumb/";

const sharpen = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  let filename = req.query.filename;
  let width = req.query.width;
  let height = req.query.height;

  fs.access(
    `${path}${filename}${width}x${height}.jpeg`,
    fs.constants.R_OK,
    async (err) => {
      if (err) {
        await sharp(`./public/assets/full/${filename}.jpeg`)
          .resize(Number(width), Number(height))
          .toFile(`${path}${filename}${width}x${height}.jpeg`);
        res.sendFile(`${path}${filename}${width}x${height}.jpeg`, {
          root: ".",
        });
        console.log("Resizing image");
      } else {
        res.sendFile(`${path}${filename}${width}x${height}.jpeg`, {
          root: ".",
        });
        console.log("Loads image");
      }
    }
  );

  next();
};

export default sharpen;
