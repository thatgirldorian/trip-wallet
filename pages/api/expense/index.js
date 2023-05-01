import prisma from "lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).end();
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
