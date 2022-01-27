import express from "express";
import sharpen from "../../utilties/sharpen";

const images = express.Router();

images.get(
  "/",
  sharpen,
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.statusCode;
  }
);

export default images;
