export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    res.status(200).end();
    return;
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
