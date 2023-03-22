import { signIn, signOut, getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import ControlSlashModal from '@/components/dust/ControlSlashModal';
import HotkeysInit from "@/components/HotkeysInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import SendGuestbook from "@/lib/SendGuestbook";
import toast, { Toaster } from "react-hot-toast";
import GetGuestbook from "@/lib/GetGuestbook";
import ToReadable from "@/lib/ToReadable";
import Twemoji from "react-twemoji";
import { useState } from "react";
import Head from "next/head";

export default function Component(data) {
  let [gb, setGB] = useState(data.guestbook);
  const formSubmit = async (e) => {
    e.preventDefault();
    var d = document.getElementById("btnSubmit");
    d.innerHTML = "Sending...";
    d.classList.add("btn-disabled");
    d.classList.add("loading");
    try {
      var res = await SendGuestbook(e);
    } catch {
      toast.error("Internal server error.");
    } finally {
      toast[res.type](res.message);

      if(res.type === "success") {
        let baru = await fetch("/api/guestbook/all");
        let json = await baru.json();
        setGB(json);
      }
    }
    d.innerHTML = "Sign";
    d.classList.remove("btn-disabled");
    d.classList.remove("loading");
  };

  let providers = data.providers;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>JstnLT — 📚 Guestbook</title>
      </Head>
      <Toaster />
      <Navbar />

      <div className="mb-16 text-[#F5FEFD] bg-base-100">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6">
          <div className="pt-32 px-4">
            <h1 className="text-3xl font-bold leading-[50px] text-left text-[#F5FEFD] sm:leading-none">
                <span className="inline md:block">
                  <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"><span class="relative text-neutral flex items-center gap-[0.5rem]">Guestbook</span></span>
                </span>
              </h1>

            <p className="md:inline-block mt-2">
              Hello! I don't know what to write in this description, You should
              know what a guestbook is. You can write any messages in this
              guestbook such as comments, suggestions, or just greetings.
            </p>
          </div>

          <div className="flex justify-center md:pt-24 pt-5 md:mx-0 mx-5">
            <div className="flex flex-col mx-auto justify-center px-2 md:px-16 sm:px-48">
              <div>
                <div className="pt-8">
                  {providers
                    ? Object.values(providers).map((provider) => (
                        <div key={provider.name} className="sm:px-0 px-2">
                          <button
                            className="btn btn-wide normal-case font-normal"
                            onClick={() => signIn(provider.id)}
                          >
                            <FaGithub className="mr-2 w-5 h-5" />
                            Sign in with {provider.name}
                          </button>
                        </div>
                      ))
                    : ""}

                  {data.sesi ? (
                    <>
                      <div className="sm:px-0 px-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <form onSubmit={formSubmit}>
                          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                            <input
                              type="text"
                              placeholder="Type here... 150 char allowed"
                              className="input input-bordered w-full max-w-xs"
                              maxLength="150"
                              name="content"
                              required
                            />
                            <button
                              id="btnSubmit"
                              className="btn rounded-xl btn-primary dark:btn-secondary normal-case font-normal"
                            >
                              Sign
                            </button>
                          </div>
                        </form>
                        <button
                          className="btn rounded-xl btn-error normal-case font-normal"
                          onClick={() => signOut()}
                        >
                          Sign Out
                        </button>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mt-2">
                    <p className="text-xs">
                      <FaInfoCircle className="inline-block mr-1" />
                      Your account is only used to display your name.
                    </p>
                  </div>

                  <div className="flex flex-col mx-auto mt-10">
                    <div>
                      {gb.map((x, idx) => {
                        return (
                          <div key={idx} className="mt-4">
                            <p className="text-lg font-semibold">{x.content}</p>
                            <p className="text-sm">
                              — By {x.user.name} · Posted on{" "}
                              {ToReadable(x.timestamp)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ControlSlashModal />
      <HotkeysInit />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const guestbook = await GetGuestbook();

  if (session) {
    return { props: { guestbook, sesi: session } };
  }

  const providers = await getProviders(context);

  return {
    props: { guestbook, providers: Object.values(providers) ?? [] },
  };
}
