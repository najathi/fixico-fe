import { promises as fs } from 'fs'

export default async function handler(req, res) {
    const { uuid } = req.query

    try {
        const jsonData = await fs.readFile(`./public/db/${uuid}.json`);
        const objectData = JSON.parse(jsonData);
        res.status(200).json(objectData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}