import { projects } from "@/data/recently-visited";
import Image from "next/image";

const RecentlyVisited = () => {
  return (
    <div className="p-6">
      <h3 className="font-semibold mb-4 text-xl">Recently visited</h3>

      {/* Wrapper responsive */}
      <div className="gap-5 overflow-hidden md:grid">
        {/* Mobile only scroll */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:overflow-visible">
          {projects.map((prj, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[220px] flex gap-3 border rounded-lg items-center p-3 md:w-auto"
            >
              <Image
                src={prj.icon}
                alt="user"
                width={200}
                height={200}
                className="rounded-full w-12 h-12 object-cover"
              />
              <span>{prj.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyVisited;
