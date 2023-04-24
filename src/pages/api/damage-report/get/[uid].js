import { promises as fs } from 'fs'

export default async function handler(req, res) {
    const { uid } = req.query
    console.log(uid)

    try {
        const jsonData = await fs.readFile(`./public/db/${uid}.json`);
        const objectData = JSON.parse(jsonData);
        res.status(200).json(objectData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}