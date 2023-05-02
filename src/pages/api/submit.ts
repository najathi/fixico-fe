import type { NextApiRequest, NextApiResponse } from 'next'
import { writeFileSync } from "fs";

export default async function submit(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  if (req.method !== "POST") {
    return res.status(405);
  }

  const uuid = Math.random().toString(26).slice(2);
  await writeFileSync(`./public/db/${uuid}.json`, req.body);
  res.status(201).json({ uuid });
}
