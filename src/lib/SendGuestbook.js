export default async function SendGuestbook(e) {
  const send = await fetch("/api/guestbook/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: e.target.content.value,
    }),
  });

  var res = await send.json();
  return res;
}
