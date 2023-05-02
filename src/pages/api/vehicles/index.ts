import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

type CarBrand = {
    id: number;
    name: string;
    models: {
        id: number;
        name: string;
    }[];
};

type CarBrands = CarBrand[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<CarBrands | string | null>) {
    try {
        const jsonDirectory = path.join(process.cwd(), 'src');
        const fileContents = await fs.readFile(path.join(jsonDirectory, 'vehicles.json'), 'utf8');
        res.status(200).json(JSON.parse(fileContents));
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}