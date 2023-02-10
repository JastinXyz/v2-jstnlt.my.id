import GetGuestbook from "@/lib/GetGuestbook";

export default async function handler(req, res) {
    const all = await GetGuestbook();
    res.status(200).json(all);
}