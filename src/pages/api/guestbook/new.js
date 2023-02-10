import clientPromise from "@/lib/DatabaseConnection";
import { getSession } from "next-auth/react";
import rateLimit from "@/lib/RateLimit";

const limiter = rateLimit({
  interval: 15 * 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export default async function handler(req, res) {
   const session = await getSession({ req });
   const { content } = req.body;

   if (req.method !== "POST") {
     res.status(405).send({ msg: "405 method not allowed" });
     return;
   }

   if (session) {
    if (content.length > 150) {
        res.status(400).send({ type: "error", message: "Content too long" });
        return;
    }

    try {
      try {
        await limiter.check(res, 3, "CACHE_TOKEN");
      } catch {
        return res.status(429).json({ type: "error", message: "Rate Limited! Try again after 15 minutes" })
      }
      let client = await clientPromise;
      let db = client.db();
      let Guestbook = db.collection("guestbook");
      let toinsert = {
        content,
        timestamp: Date.now(),
        user: { name: session.user.name },
      };
      await Guestbook.insertOne(toinsert);

      return res.status(200).json({ type: "success", message: "Yay!" });
    } catch (err) {
      console.log("[ERROR /api/hit]", err);
      return res.status(500).json({ msg: "500 internal server error" });
    }
   } else {
    return res.status(401).json({ msg: "401 unauthorized" });
   }
}