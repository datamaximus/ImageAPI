import express from "express";
import sharp from "sharp";

const sharpen = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  let filename = req.query.filename;

  sharp(`./assets/full/${filename}.jpg`)
    .resize(Number(req.query.width), Number(req.query.height))
    .toFile(`./assets/thumb/${filename}.jpg`, function (err) {});
  await next();
};

export default sharpen;
