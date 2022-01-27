import express from 'express';
import fileExists from './fileCheck';
import path from 'path';
import resize from './resize';

// Set base path
const inputPath = path.join(__dirname, '../../public/assets/full/');
const outputPath = path.join(__dirname, '../../public/assets/thumb/');

async function sharpen(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  // Set resizing values form query
  const filename = String(req.query.filename);
  const width = String(req.query.width);
  const height = String(req.query.height);
  const resizedFile = String(`${outputPath}${filename}${width}x${height}.jpeg`);

  // Check if file exists in local directory
  const exists = fileExists(String(`${resizedFile}`));

  if (!exists) {
    try {
      await resize(
        `${inputPath}${filename}.jpeg`,
        Number(width),
        Number(height),
        resizedFile
      );
      res.sendFile(String(resizedFile));
    } catch (err) {
      res.send(
        'API cannot process this request. Please ensure all query parameters are included and valid. File must exist in local assests and width and height must be positive numbers.'
      );
    }
  } else {
    try {
      res.sendFile(String(resizedFile));
    } catch (err) {
      res.send('Whoops. Something went wrong. Please try agan.');
    }
  }
  next();
}

export default sharpen;
