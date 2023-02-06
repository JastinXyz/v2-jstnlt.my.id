import DatabaseConnection from "@/lib/DatabaseConnection";
import Hit from "@/models/Hit";

export default async function handler(req, res) {
  try {
    await DatabaseConnection();

    let name = "counter";
    let has = await Hit.exists({ name });

    if (has) {
      let get = await Hit.findOne({ name }).exec();
      await Hit.updateOne({ name }, { hit: get.hit + 1 });
    } else {
      const s = new Hit({ name, hit: 0 });
      s.save();
    }

    let finale = await Hit.findOne({ name }, "-_id -__v").exec();
    res.status(200).json(finale);
  } catch (err) {
    console.log("[ERROR /api/hit]", err);
    res.status(500).json({ msg: "500 internal server error" });
  }
}
