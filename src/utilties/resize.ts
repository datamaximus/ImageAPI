import sharp from 'sharp';

async function resize(
  image: string,
  width: number,
  height: number,
  outputFile: string
) {
  await sharp(image).resize(width, height).toFile(String(outputFile));
}

export default resize;
