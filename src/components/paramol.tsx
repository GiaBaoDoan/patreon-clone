import CreatorListSection from "@/components/creators-list";
import { Paranamon } from "@/data/paranormal";
import { ChevronRight } from "lucide-react";

const Paramol = () => {
  return (
    <section className="p-6">
      <p className="text-muted-foreground text-sm mb-1"> Top creators</p>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold">Paranormal</h2>
        <ChevronRight size={20} />
      </div>
      <CreatorListSection data={Paranamon} />
    </section>
  );
};

export default Paramol;
