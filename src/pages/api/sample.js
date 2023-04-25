import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    try {
        const filePath = '/path/to/my/image.jpg';
        const extension = path.extname(filePath);
        console.log(extension); // Output: ".jpg"
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}