import DonorCard from "../../card/DonorCard";
import type { Donor } from "../../lib/interfaces";
import EmptyState from "./EmptyState";

interface DonorGridProps {
  donors: Donor[];
  view: "grid" | "list";
  onContact: (donor: Donor) => void;
  onViewProfile: (donor: Donor) => void;
}

export default function DonorGrid({
  donors,
  view,
  onContact,
  onViewProfile,
}: DonorGridProps) {
  if (view === "list") {
    return (
      <div className="space-y-5">
        {donors.map((donor) => (
          <DonorCard
            key={donor.id}
            donor={donor}
            onContact={onContact}
            onViewProfile={onViewProfile}
          />
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
          onContact={onContact}
          onViewProfile={onViewProfile}
        />
      ))}
    </div>
  );
}