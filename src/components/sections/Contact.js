import SendMessage from "@/lib/SendMessage";
import toast from "react-hot-toast";
import { FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formSubmit = async (e) => {
    e.preventDefault();
    var d = document.getElementById("contactFormSubmit");
    d.innerHTML = "Sending...";
    d.classList.add("btn-disabled");
    d.classList.add("loading");
    try {
      var res = await SendMessage(e);
    } catch {
      toast.error("Internal server error.");
    } finally {
      toast[res.type](res.message);
    }
    d.innerHTML = "Send Message";
    d.classList.remove("btn-disabled");
    d.classList.remove("loading");
  };

  return (
    <>
      <div className="px-6 pt-48">
        <section id="contact" className="pt-16">
        <h1 className="text-2xl font-bold text-center">
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"><span class="relative text-neutral">Get In Touch</span></span>
        </h1>
          <div className="max-w-screen-xl px-0 lg:px-60 py-16 mx-auto text-[#F5FEFD]">
            <div>
              <form id="contactForm" onSubmit={formSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm">Name</span>
                    <input
                      className="w-full bg-neutral text-[#F5FEFD] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="your name"
                      name="from"
                      required
                    />
                  </div>
                  <div>
                    <span className="text-sm">Email</span>
                    <input
                      className="w-full bg-neutral text-[#F5FEFD] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="your@email.com"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-sm">Message</span>
                  <textarea
                    className="w-full h-32 bg-neutral text-[#F5FEFD] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="type something... has 1024 max length..."
                    name="msg"
                    maxLength={1024}
                    required
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button
                    className="btn btn-block btn-primary normal-case text-neutral"
                    id="contactFormSubmit"
                    type="submit"
                  >
                    Send Message
                  </button>
                  <div className="text-right">
                    <span className="text-sm">or email me at <a href="mailto:jastinlinggar@gmail.com" className="text-primary">jastinlinggar@gmail.com</a></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
