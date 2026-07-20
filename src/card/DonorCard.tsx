import { MapPin } from "lucide-react";
import type { Donor } from "../lib/interfaces";
import Badge from "../Components/donor/Badge";
import ViewProfileButton from "../button/ViewProfileButton";
import ContactButton from "../button/ContactButton";

interface DonorCardProps {
  donor: Donor;
  onContact?: (donor: Donor) => void;
  onViewProfile?: (donor: Donor) => void;
}

export default function DonorCard({
  donor,
  onContact,
  onViewProfile,
}: DonorCardProps) {
  const handleContact = () => {
    onContact?.(donor);
  };

  const handleProfile = () => {
    onViewProfile?.(donor);
  };

  return (
    <div className="rounded-md bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <img
          src={donor.avatar}
          alt={donor.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <Badge
          text={donor.bloodGroup}
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold">
        {donor.name}
      </h3>

      <Badge
        variant="success"
        text={
          donor.available
            ? "Available Now"
            : "Unavailable"
        }
      />

      {/* Location */}
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <MapPin size={16} />

        <span>{donor.location}</span>

        <span>•</span>

        <span>{donor.distance} km</span>
      </div>

      {/* Bio */}
      <p className="mt-4 text-sm leading-6 text-gray-600">
        {donor.bio}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <ViewProfileButton
          onClick={handleProfile}
        />

        <ContactButton
          onClick={handleContact}
        />
      </div>
    </div>
  );
}