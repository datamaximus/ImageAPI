# ImageAPI

## Description
- This project builds an imaging resizing API endpoint that resizes local files stored in the repository's `./public/assests/full/` directory.
- Passing a valid file name, width, and height resizes the image and saves a local copy to `./public/assests/thumb`.
- If resized image with matching dimensions already exists locally, existing image will be returned without duplicate resizing.

## Instructions
- Calling the following endpoint: `http://localhost:3000/api/images?filename=<filename>&width=<width>&height=<height>` with existing file and positive dimensions will resize, render, and save resized image.

## Scripts
- npm scripts have been provided for the following:
  - `npm run build` to compile typescript to executable javascript
  - `npm run launch` to start local server on port 3000
  - `npm run start` starts server with nodemon
  - `npm run test` to build and execute jasmine test suite
  - `npm run prettier` to run code formatting
  - `npm run lint` to run linter and prettier
  
## Testing
- Tests are executed using provided images in `/full` and `/thumb` directories. Do not delete these files.
