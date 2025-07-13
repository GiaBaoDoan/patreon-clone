import CreatorListSection from "@/components/creators-list";
import { newOnPatreon } from "@/data/newon-patreon";
import { ChevronRight } from "lucide-react";

const NewBatreon = () => {
  return (
    <section className="p-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold">New on Patreon</h2>
        <ChevronRight size={20} />
      </div>

      <CreatorListSection data={newOnPatreon} />
    </section>
  );
};

export default NewBatreon;
