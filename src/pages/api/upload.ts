import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from "formidable";
import path from "path";
import { renameSync } from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function upload(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new formidable.IncomingForm({
    keepExtensions: true,
    maxFileSize: 200 * 1024 * 1024,
    uploadDir: "./public/images"
  });

  return new Promise((resolve: any, _) => {
    form.parse(req, async (err, fields, files: any) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return resolve();
      }

      if (!files.image) {
        res.status(422).json({ error: "Bad request: missing image field" });
        return resolve();
      }

      const ext = path.extname(files.image._writeStream.path);
      const uuid = Math.random().toString(26).slice(2);
      await renameSync(files.image._writeStream.path, `./public/images/${uuid}${ext}`);

      res.status(201).json({
        uuid,
        url: `/images/${uuid}${ext}`,
      });
      return resolve();
    });
  });
}
