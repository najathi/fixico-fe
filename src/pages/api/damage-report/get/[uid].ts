import { promises as fs } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { uid } = req.query

    try {
        const jsonData: any = await fs.readFile(`./public/db/${uid}.json`);
        const objectData = JSON.parse(jsonData);
        res.status(200).json(objectData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}