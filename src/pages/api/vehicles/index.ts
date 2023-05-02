import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const jsonDirectory = path.join(process.cwd(), 'src');
        const fileContents = await fs.readFile(path.join(jsonDirectory, 'vehicles.json'), 'utf8');
        res.status(200).json(JSON.parse(fileContents));
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}