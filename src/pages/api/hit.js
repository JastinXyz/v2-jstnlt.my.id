import clientPromise from "@/lib/DatabaseConnection";

export default async function handler(req, res) {
  try {
    let name = "counter";
    let client = await clientPromise;
    let db = client.db();
    let Hit = db.collection(name);

    let has = await Hit.findOne({ name });

    if(has) {
      await Hit.findOneAndUpdate({ name }, { $inc: { hit: 1 }});
    } else {
      await Hit.insertOne({ name, hit: 0 });
    }

    let finale = await Hit.findOne({ name });
    delete finale._id;
    res.status(200).json(finale);
  } catch (err) {
    console.log("[ERROR /api/hit]", err);
    res.status(500).json({ msg: "500 internal server error" });
  }
}
