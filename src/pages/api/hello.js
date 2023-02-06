import axios from "axios";

export async function get() {
  let waka = await axios(`https://wakatime.com/api/v1/users/current/summaries?api_key=${process.env.WAKATIME_APIKEY}&start=2023-01-01&end=today`);
  let wakaData = waka.data;

  return {
    wakatime: wakaData.cumulative_total.text,
  };
}
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=600");

  try {
    let data = await get();
    res.status(200).json(data);
  } catch (err) {
    console.log("[ERROR /api/hello]", err);
    res.status(500).json({ message: "500 internal server error" });
  }
}
