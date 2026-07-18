import { Users } from "lucide-react";

interface DonorStatsProps {
  total: number;
}

export default function DonorStats({
  total,
}: DonorStatsProps) {
  return (
    <div className="rounded-2xl bg-red-50 p-5">
      <div className="mb-3 flex items-center gap-3">
        <Users className="text-red-600" />

        <h3 className="font-semibold">
          Active Donors
        </h3>
      </div>

      <h2 className="text-4xl font-bold text-red-600">
        {total}
      </h2>

      <p className="mt-2 text-sm text-gray-600">
        Registered donors within your selected radius.
      </p>
    </div>
  );
}