import sharp from 'sharp';

async function resize(
  image: string,
  width: number,
  height: number,
  outputFile: string
) {
  try {
    await sharp(image).resize(width, height).toFile(String(outputFile));
  } catch (err) {
    return err;
  }
}

export default resize;
