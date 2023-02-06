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
          Some of My Projects
        </h1>
        <div className="flex justify-center">
          <div className="bg-[#6C63FF] w-[150px] h-[5px]"></div>
        </div>
        <div className="md:px-28 mt-20">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    clsx(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "dark:text-blue-100 text-black hover:bg-white/[0.12] hover:text-white"
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
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
                >
                  {projects.map(
                    ({ name, description, isLeft, link, icon, image }) => (
                      <Fragment key={name}>
                        <div className="flex justify-center z-[999]">
                          <a
                            className={`group hover:scale-110 transition delay-75`}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-xl image-full w-full h-full overflow-hidden"
                              data-aos="fade-up"
                            >
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body rounded-md">
                                <h2 className="card-title">
                                  <icon.name
                                    className={`${icon.fill} transition ease-in-out delay-150`}
                                  />
                                  {name}
                                </h2>
                                <p>{description}</p>
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
