import prisma from "lib/prisma";
import { ApiError } from "next/dist/server/api-utils";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const trips = await prisma.trip.findMany();
    res.status(200).json(trips);
    return;
  }

  if (req.method === "POST") {
    const { user, name, start_date, end_date } = req.body;

    if (!user) {
      return res
        .status(400)
        .json({ message: "Missing a required parameter: `user`" });
    }

    if (!name) {
      return res
        .status(400)
        .json({ message: "Missing a requird paraneter: `name`" });
    }

    await prisma.trip.create({
      data: {
        user,
        name,
        start_date,
        end_date,
      },
    });

    console.log(req.body);
    res.status(200).end();
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
