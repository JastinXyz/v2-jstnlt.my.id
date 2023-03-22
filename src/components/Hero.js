import sAge from "s-age";
import Social from "./dust/Social";
import Image from "next/image";
import { useEffect, useState } from "react";
import Wakatime from "@/lib/Wakatime";
import Repository from "@/lib/Repository";
import GetHit from "@/lib/GetHit";
import { Toaster } from "react-hot-toast";
import Twemoji from "react-twemoji";

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
              <h1 className="text-3xl font-bold leading-[50px] text-left text-[#F5FEFD] sm:leading-none">
                <span className="inline md:block">
                  Hi <span className="inline-block"><Twemoji options={{ className: "animate-wave twemoji" }}>👋🏼</Twemoji></span>,
                  I&apos;m <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"><span class="relative text-neutral">Jastin Linggar T.</span></span>
                </span>
              </h1>

              <p className="md:inline-block mt-2 text-[#F5FEFD] font-medium text-base">
                I am a {umur} year old software engineering student. Know about
                programming since 2020 and now I know a lot about several
                programming languages ​​especially Javascript & NodeJS. Now I'm
                exploring to learn PHP especially with the Laravel framework and
                yes of course the MySQL database. Not just back-end, I can do fullstack.
              </p>
              <p className="md:inline-block mt-2 text-[#F5FEFD] font-medium">
                A little biography, my full name is Jastin Linggar Tama. Lives
                in Purwokerto, Indonesia. Since 1st January 2023 I spent <code className="text-primary">{props.wakatime}</code> coding. I
                have created a total of <code className="text-primary">{props.repository}</code> public repositories in my Github account.
              </p>
              <p className="md:inine-block mt-2 text-[#F5FEFD] font-medium">
                You are the <code className="text-primary">{props.hit}</code> person to visit this website.
              </p>

              <div className="mt-5">
                <Social/>
              </div>
            </div>

            <div className="flex justify-center md:pt-24 pt-5 md:mx-0 mx-5">
              <Image
                src="/img/heroimage.svg"
                alt="hero image"
                className="md:mt-0 z-50"
                width={520}
                height={300}
                data-aos="fade-up-left"
              />
            </div>
          </div>
        </div>
      </>
    );
}