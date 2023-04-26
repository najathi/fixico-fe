import { promises as fs } from 'fs';

export default async function handler(req, res) {
    const { email } = req.query

    try {
        const jsonDataArray = [];
        const fileNames = await fs.readdir('./public/db');
        const jsonFileNames = fileNames.filter(fileName => fileName.endsWith('.json'));

        for (const fileName of jsonFileNames) {
            const filePath = `./public/db/${fileName}`;
            const fileData = await fs.readFile(filePath);
            const jsonObject = JSON.parse(fileData);
            jsonDataArray.push({ uid: fileName.split(".")[0], ...jsonObject, });
        }

        const relatedPartners = jsonDataArray.filter(report => report.customer.email === email);
        res.status(200).json(relatedPartners);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
