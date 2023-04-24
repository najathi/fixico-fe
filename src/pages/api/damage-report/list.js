import { promises as fs } from 'fs';

export default async function handler(req, res) {
    try {
        const jsonDataArray = [];
        const fileNames = await fs.readdir('./public/db');
        const jsonFileNames = fileNames.filter(fileName => fileName.endsWith('.json'));
        console.log(fileNames, jsonFileNames)

        for (const fileName of jsonFileNames) {
            const filePath = `./public/db/${fileName}`;
            const fileData = await fs.readFile(filePath);
            const jsonObject = JSON.parse(fileData);
            jsonDataArray.push({ uid: fileName.split(".")[0], ...jsonObject, });
        }

        res.status(200).json(jsonDataArray);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
