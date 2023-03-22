import GetProjects from "@/lib/GetProjects";
import { useRouter } from "next/router";
import { useHotkeys } from "react-hotkeys-hook";

export default function HotkeysInit() {
    let projects = GetProjects();
    let router = useRouter();

    useHotkeys("ctrl+/", () => {
        let isChecked = document.getElementById("controlslashmodal");
        isChecked.checked = !isChecked.checked;
    });

    useHotkeys(".", () => {
      const opsi = ["Open Source", "Closed Source"]
      const OpenClosed = projects[opsi[Math.floor(Math.random() * opsi.length)]];
      const r = OpenClosed[Math.floor(Math.random() * OpenClosed.length)];

      window.open(r.link);
    });

    useHotkeys("g", () => {
      router.push('/guestbook');
    });

    useHotkeys("h", () => {
      router.push('/');
    });

    return;
}