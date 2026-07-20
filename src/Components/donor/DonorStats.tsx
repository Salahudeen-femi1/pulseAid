import { Users } from "lucide-react";

interface DonorStatsProps {
  total: number;
}

export default function DonorStats({
  total,
}: DonorStatsProps) {
  return (
    <div className="rounded-2xl bg-primary p-5">
      <div className="mb-3 flex items-center gap-3">
        <Users className="text-white" />

        <h3 className="font-semibold text-white">
          Active Donors
        </h3>
      </div>

      <h2 className="text-2xl font-bold text-white">
        {total}
      </h2>

      <p className="mt-2 text-sm text-white">
        Registered donors within your selected radius.
      </p>
    </div>
  );
}