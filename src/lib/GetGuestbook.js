import clientPromise from "@/lib/DatabaseConnection";

export default async function GetGuestbook() {
  let client = await clientPromise;
  let db = client.db();
  let guestbook = db.collection("guestbook");
  let a = await guestbook
    .find({}, { projection: { _id: 0 } })
    .toArray(function (err, result) {
      if (err) return done(err);
      done(null, JSON.stringify(result));
    });

  return a.reverse();
}
