export default function ToReadable (timestamp) {
    let date = new Date(timestamp);
    var mS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let res = `${date.getDate()} ${
      mS[date.getMonth()]
    } ${date.getFullYear()} at ${date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;

    return res;
}