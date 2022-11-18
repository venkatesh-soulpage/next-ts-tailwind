import React from "react";
import MainLayout from "../layouts/main-layout";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function ResourceDetail() {
  const [project, setPosts] = React.useState<any>({});
  const router = useRouter();
  const { resource_id } = router.query;
  React.useEffect(() => {
    if (!resource_id) return;
    fetch(`https://reqres.in/api/unknown/${resource_id}`)
      .then((response) => response.json())
      .then((json) => setPosts(json.data));
  }, [resource_id]);
  console.log(project);
  return (
    <>
      <MainLayout>
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Resource Detail
            </h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="col-span-1 flex rounded-md shadow-sm">
              <div
                className={
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
                }
                style={{ backgroundColor: project?.color }}
              >
                {project && project.name ? project?.name[0] : "N"}
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  {project?.name}

                  <p className="text-gray-500">
                    {project?.pantone_value} Pantone Value
                  </p>
                </div>
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
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
