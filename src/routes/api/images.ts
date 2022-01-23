import express from 'express';
import sharpen from '../../utilties/sharpen';
const images = express.Router();

images.get('/', sharpen, async (req, res) => {
    res.sendFile(`/assets/thumb/${req.query.filename}.jpg`, { root: '.' });
});

export default images;