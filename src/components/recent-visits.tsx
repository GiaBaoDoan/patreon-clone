import CreatorListSection from "@/components/creators-list";
import React from "react";
import { creators } from "@/data/data-one";

const RecentVisits = () => {
  return (
    <section className="p-6">
      <h2 className="text-xl font-bold">Creators for you</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-muted-foreground text-sm mb-1">
          Based on your recent visits
        </p>
      </div>
      <CreatorListSection data={creators} />
    </section>
  );
};

export default RecentVisits;
