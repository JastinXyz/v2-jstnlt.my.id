import clsx from "clsx";
import { Fragment, useState } from "react";
import { FaAngleRight, FaGithub } from "react-icons/fa";
import Image from "next/legacy/image";
import { Tab } from "@headlessui/react";
import GetProjects from "@/lib/GetProjects";

export default function Projects() {
  let [categories] = useState(GetProjects());

  return (
    <>
      <section id="projects" className="pt-52 px-6">
        <h1 className="text-2xl font-bold text-center">
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"><span class="relative text-neutral">Some of My Projects</span></span>
        </h1>
        <div className="md:px-28 mt-20">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-neutral p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    clsx(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-neutral",
                      "ring-primary ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                      selected
                        ? "bg-primary shadow"
                        : "dark:text-[#F5FEFD] hover:bg-white/[0.12]"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((projects, idx) => (
                <Tab.Panel
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[29px] mt-[29px]"
                >
                  {projects.map(
                    ({ name, description, link, icon, image }) => (
                      <Fragment key={name}>
                        <div className="flex justify-center z-[999]">
                          <a
                            className={`group hover:scale-110 transition delay-75`}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-xl image-full w-full h-full overflow-hidden rounded-3xl"
                              data-aos="fade-up"
                            >
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body">
                                <h2 className="flex items-center gap-[0.5rem] font-semibold text-[20px] text-[#F5FEFD]">
                                  <icon.name
                                    className={`${icon.fill} transition ease-in-out delay-150`}
                                  />
                                  {name}
                                </h2>
                                <p className={'text-[#F5FEFD] ' + (description.length > 80 ? 'text-sm 2xl:text-base' : '')}>{description}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </Fragment>
                    )
                  )}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="text-center mt-12">
          <a
            className="btn btn-wide"
            href="https://github.com/JastinXyz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2 w-5 h-5" />
            View all my Porjects. <FaAngleRight className="ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}
