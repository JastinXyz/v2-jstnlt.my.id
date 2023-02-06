export default async function Repository() {
    const get = await fetch(`https://api.github.com/users/JastinXyz`);
    const data = await get.json();

    return data.public_repos;
}