import clsx from "clsx";
import {
  FaHtml5,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa";

export default function GetProjects() {
    return {
      "Open Source": [
        {
          name: "Data Siswa",
          description:
            "Sebuah project Laravel pertama saya yang menerapkan sistem CRUD di dalamnya.",
          link: "https://github.com/JastinXyz/data-siswa",
          icon: {
            name: FaLaravel,
            fill: clsx("group-hover:fill-[#FF2D20]"),
          },
          image: {
            src: "/img/projects/open/siswa-crud.webp",
            alt: "Siswa CRUD",
            width: 465,
            height: 285
          },
        },
        {
          name: "sengkalan.js",
          description:
            'package untuk menghasilkan sengkalan. Sengkalan atau Candra Sengkala adalah cara orang Jawa "menyembunyikan" atau mengubah angka tahun menjadi kalimat.',
          link: "https://github.com/JastinXyz/sengkalan.js",
          icon: {
            name: FaNodeJs,
            fill: clsx("group-hover:fill-[#689F63]"),
          },
          image: {
            src: "/img/projects/open/sengkalan.webp",
            alt: "sengkalan.js npm preview",
            width: 465,
            height: 285
          },
        },
        {
          name: "Discord Bot Landing Page",
          description:
            "A landing page source code for the Discord bot (but you can use it for any kind of landing page)",
          link: "https://github.com/JastinXyz/discord-bot-landing-page-web",
          icon: {
            name: FaHtml5,
            fill: clsx("group-hover:fill-[#E96228]"),
          },
          image: {
            src: "/img/projects/open/dcweb.webp",
            alt: "Discord Bot Landing Page",
            width: 465,
            height: 285
          },
        },
        {
          name: "Simple RPS",
          description:
            "A website-based Rock Paper Scissors game with simple design.",
          link: "https://github.com/JastinXyz/simple-rps",
          icon: {
            name: FaHtml5,
            fill: clsx("group-hover:fill-[#E96228]"),
          },
          image: {
            src: "/img/projects/open/rps.webp",
            alt: "Simple RPS",
            width: 465,
            height: 285
          },
        },
        {
          name: "whatscode.js",
          description:
            "whatscode.js is a package to create Whatsapp bots easily and quickly, even coding experience is not really needed...",
          link: "https://github.com/JastinXyz/whatscode.js",
          icon: {
            name: FaNodeJs,
            fill: clsx("group-hover:fill-[#689F63]"),
          },
          image: {
            src: "/img/projects/open/wcode.webp",
            alt: "whatscode.js logo",
            width: 465,
            height: 285
          },
        },
        {
          name: "Gempa Bot",
          description:
            "A Discord Bot to detect the latest earthquake in Indonesia.",
          link: "https://github.com/JastinXyz/gempa-bot",
          icon: {
            name: FaNodeJs,
            fill: clsx("group-hover:fill-[#689F63]"),
          },
          image: {
            src: "/img/projects/open/gempabot.webp",
            alt: "gempa bot",
            width: 465,
            height: 285
          },
        },
        {
          name: "whatsactyl",
          description: "A bot to manage Pterodactyl panels via whatsapp!",
          link: "https://github.com/JastinXyz/whatsactyl",
          icon: {
            name: FaNodeJs,
            fill: clsx("group-hover:fill-[#689F63]"),
          },
          image: {
            src: "/img/projects/open/whatsactyl.webp",
            alt: "whatsactyl preview",
            width: 465,
            height: 285
          },
        },
        {
          name: "Simple Portfolio",
          description:
            "idk... I made this because I was confused about what project to make next. Maybe this can be called a template and you all can reuse this template for anything.",
          link: "https://github.com/JastinXyz/simple-portfolio",
          icon: {
            name: FaHtml5,
            fill: clsx("group-hover:fill-[#E96228]"),
          },
          image: {
            src: "/img/projects/open/simpleportfolio.webp",
            alt: "simpleportfolio preview",
            width: 465,
            height: 285
          },
        },
        {
          name: "v1 Website",
          description: "my v1 portfolio website made with NextJs",
          link: "https://github.com/JastinXyz/v1-jstnlt.my.id",
          icon: {
            name: FaNodeJs,
            fill: clsx("group-hover:fill-[#689F63]"),
          },
          image: {
            src: "/img/projects/open/jstnltv1.webp",
            alt: "v1 website preview",
            width: 465,
            height: 285
          },
        },
        {
          name: "@mengkodingan/ckptw",
          description:
            "whatscode-clone but we make it to use js code instead of string-based code",
          link: "https://github.com/menkgodingan/ckptw",
          icon: {
            name: FaNodeJs,
            fill: clsx("group-hover:fill-[#689F63]"),
          },
          image: {
            src: "/img/projects/open/ckptw.webp",
            alt: "ckptw docs",
            width: 465,
            height: 285
          },
        },
      ],
      "Closed Source": [
        {
          name: "#BetterBanyumas",
          description:
            "A local travel landing page website. 🥇 1st Place at Mini LKS SMK Manusa Ajibarang",
          link: "https://banyumas-better.vercel.app/",
          icon: {
            name: FaNodeJs,
            fill: clsx("group-hover:fill-[#689F63]"),
          },
          image: {
            src: "/img/projects/closed/betterbanyumas.webp",
            alt: "betterbanyumas preview",
            width: 465,
            height: 285
          },
        },
        {
          name: "mengkodingan.my.id",
          description: "a nextjs blog website",
          link: "https://mengkodingan.my.id/",
          icon: {
            name: FaNodeJs,
            fill: clsx("group-hover:fill-[#689F63]"),
          },
          image: {
            src: "/img/projects/closed/mengkodingan.webp",
            alt: "mengkodingan preview",
            width: 465,
            height: 285
          },
        },
      ],
    };
}