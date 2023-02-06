import GetProjects from "@/lib/GetProjects";
import { useHotkeys } from "react-hotkeys-hook";

export default function HotkeysInit() {
    let projects = GetProjects();

    useHotkeys("ctrl+/", () => {
        let isChecked = document.getElementById("controlslashmodal");
        isChecked.checked = !isChecked.checked;
    });
    
    useHotkeys("ctrl+m", () => {
      let html = document.querySelector("html");
      let themeNow = html.getAttribute("data-theme");
      if (themeNow !== "dark") {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        document.querySelector("#sunIcon").classList.remove("swap-off");
        document.querySelector("#sunIcon").classList.add("swap-on");
        document.querySelector("#moonIcon").classList.remove("swap-on");
        document.querySelector("#moonIcon").classList.add("swap-off");
      } else {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        document.querySelector("#sunIcon").classList.remove("swap-on");
        document.querySelector("#sunIcon").classList.add("swap-off");
        document.querySelector("#moonIcon").classList.remove("swap-off");
        document.querySelector("#moonIcon").classList.add("swap-on");
      }
    });

    useHotkeys(".", () => {
      const opsi = ["Open Source", "Closed Source"]
      const OpenClosed = projects[opsi[Math.floor(Math.random() * opsi.length)]];
      const r = OpenClosed[Math.floor(Math.random() * OpenClosed.length)];

      window.open(r.link);
    });

    return;
}