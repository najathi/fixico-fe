import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    const { id } = req.query

    try {
        const jsonDirectory = path.join(process.cwd(), 'src');
        const fileContents = await fs.readFile(path.join(jsonDirectory, 'vehicles.json'), 'utf8');
        const vehicle = JSON.parse(fileContents).find(item => item.id === +id)

        res.status(200).json(vehicle);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}