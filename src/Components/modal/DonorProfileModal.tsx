import { MapPin } from "lucide-react";
import Modal from "./Modal";
import type { Donor } from "../../lib/interfaces";

interface Props {
  donor: Donor | null;
  open: boolean;
  onClose: () => void;
}

export default function DonorProfileModal({
  donor,
  open,
  onClose,
}: Props) {
  if (!open || !donor) return null;

  return (
    <Modal onClose={onClose}>
      <div className="w-full max-w-lg rounded-2xl bg-white p-8">
        <div className="flex items-center gap-5">
          <img
            src={donor.avatar}
            alt={donor.name}
            className="h-24 w-24 rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">{donor.name}</h2>
            <p className="text-red-600">{donor.bloodGroup}</p>

            <div className="mt-2 flex items-center gap-2 text-gray-500">
              <MapPin size={16} />
              <span>{donor.location}</span>
            </div>
          </div>
        </div>

        <p className="mt-8 leading-7 text-gray-600">{donor.bio}</p>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-red-600 py-3 text-white"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
