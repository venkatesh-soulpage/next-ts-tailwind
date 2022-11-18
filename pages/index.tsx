import React from "react";
import MainLayout from "../layouts/main-layout";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Dashboard() {
  const [posts, setPosts] = React.useState<any>();
  React.useEffect(() => {
    fetch("https://reqres.in/api/unknown")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <MainLayout>
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <ul
              role="list"
              className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
            >
              {posts?.data.map((project: any) => (
                <li
                  key={project.id}
                  className="col-span-1 flex rounded-md shadow-sm"
                >
                  <div
                    className={
                      "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
                    }
                    style={{ backgroundColor: project.color }}
                  >
                    {project.name[0]}
                  </div>
                  <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                    <Link href={`${project.id}`}>
                      <div className="flex-1 truncate px-4 py-2 text-sm">
                        {project.name}

                        <p className="text-gray-500">
                          {project.pantone_value} Pantone Value
                        </p>
                      </div>
                    </Link>
                    <div className="flex-shrink-0 pr-2">
                      <button
                        type="button"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
