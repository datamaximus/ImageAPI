import express from 'express';
import sharpen from '../../utilties/sharpen';

const images = express.Router();

images.get('/', sharpen, async (req, res) => {
});

export default images;