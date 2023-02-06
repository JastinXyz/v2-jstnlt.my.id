export default async function Wakatime() {
    const get = await fetch(`/api/hello`);
    const data = await get.json();

    return data.wakatime;
}