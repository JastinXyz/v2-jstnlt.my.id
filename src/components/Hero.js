import sAge from "s-age";
import Social from "./dust/Social";
import Image from "next/image";
import { useEffect, useState } from "react";
import Wakatime from "@/lib/Wakatime";
import Repository from "@/lib/Repository";
import GetHit from "@/lib/GetHit";
import { Toaster } from "react-hot-toast";

export default function Hero() {
    let umur = sAge("Nov 16 2007");
    let [props, setProps] = useState({ wakatime: 'fetching...', repository: 'fetching...', hit: 'fetching...' });

    useEffect(() => {
      async function fetchData() {
        let repository = await Repository();
        setProps({ wakatime: 'fetching...', repository, hit: 'fetching...' });
        let hit = await GetHit();
        setProps({ wakatime: 'fetching...', repository, hit });
        let wakatime = await Wakatime();
        setProps({ wakatime, repository, hit });
      }

      fetchData();
    }, []);

    return (
      <>
        <Toaster/>
        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className="pt-32">
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-left text-base-900 sm:leading-none md:text-3xl lg:text-4xl">
                <span className="inline md:block">
                  Hi <span className="animate-wave inline-block">👋🏼</span>,
                  I&apos;m Jastin Linggar T.
                </span>
              </h1>

              <p className="md:inline-block mt-2">
                I am a {umur} year old software engineering student. Know about
                programming since 2020 and now I know a lot about several
                programming languages ​​especially Javascript & NodeJS. Now I'm
                exploring to learn PHP especially with the Laravel framework and
                yes of course the MySQL database. Not just back-end, I can do fullstack.
              </p>
              <p className="md:inline-block mt-2">
                A little biography, my full name is Jastin Linggar Tama. Lives
                in Purwokerto, Indonesia. Since 1st January 2023 I spent <code className="text-pink-500">{props.wakatime}</code> coding. I
                have created a total of <code className="text-pink-500">{props.repository}</code> public repositories in my Github account.
              </p>
              <p className="md:inine-block mt-2">
                You are the <code className="text-pink-500">{props.hit}</code> person to visit this website.
              </p>

              <div className="mt-5">
                <Social/>
              </div>
            </div>

            <div className="flex justify-center md:pt-24 pt-5 md:mx-0 mx-5">
              <Image
                src="/img/peep.svg"
                alt="hero image"
                className="md:mt-0 z-50"
                width={250}
                height={200}
                data-aos="fade-up-left"
              />
              <div className="absolute mt-16 mr-5 md:mx-0 mx-5">
                <Image
                  src="/img/blob/1.svg"
                  alt="blob"
                  width={350}
                  height={350}
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}