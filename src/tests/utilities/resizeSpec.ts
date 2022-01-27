import resize from '../../utilties/resize';
import fileExists from '../../utilties/fileCheck';
import fs from 'fs';
import path from 'path';

const inputPath = path.join(
  __dirname,
  '../../../public/assets/full/manutd.jpeg'
);
const outputPath = path.join(
  __dirname,
  '../../../public/assets/thumb/manutd200x100.jpeg'
);

describe('Validate resizing functionality', () => {
  it('should save resized image to /thumb', async () => {
    await resize(inputPath, Number(200), Number(100), outputPath);
    expect(fileExists(String(outputPath))).toBe(true);
    // Delete test artifact
    try {
      fs.unlinkSync('./public/assets/thumb/manutd200x100.jpeg');
    } catch (err) {
      console.error(err);
    }
  });
});
