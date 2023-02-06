import ordinal from "ordinal";

export default async function GetHit() {
  const get = await fetch(`/api/hit`);
  const data = await get.json();

  return data.hit? ordinal(data.hit) : 'failed to fetch...';
}
