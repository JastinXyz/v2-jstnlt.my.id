export default async function SendMessage(e) {
  const send = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: e.target.from.value,
      email: e.target.email.value,
      msg: e.target.msg.value,
    }),
  });

  var res = await send.json();
  return res;
}
