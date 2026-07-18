import React from 'react'
import DonorCard from "../../card/DonorCard";
import type { Donor } from "../../lib/interfaces";
import DonorSkeleton from "../skeleton/DonorSkeleton";
import EmptyState from './EmptyState';

interface DonorGridProps {
  donors: Donor[];
  view: "grid" | "list";
}

export default function DonorGrid({
  donors,
  view,
}: DonorGridProps)
{
  
  const [loading] = React.useState(true)

  if (view === "list") {
    return (
      <div className="space-y-5">
        {donors.map((donor) => (
          <DonorCard
            key={donor.id}
            donor={donor}
          />
        ))}
      </div>
    );
  }
  
  if (loading) {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <DonorSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!donors.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {donors.map((donor) => (
        <DonorCard
          key={donor.id}
          donor={donor}
        />
      ))}
    </div>
  );
}