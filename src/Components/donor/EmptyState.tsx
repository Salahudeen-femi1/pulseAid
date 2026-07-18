import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed bg-white py-20 text-center">
      <SearchX
        size={50}
        className="mx-auto text-red-500"
      />

      <h2 className="mt-5 text-2xl font-bold">
        No donors found
      </h2>

      <p className="mt-2 text-gray-500">
        Try adjusting your filters.
      </p>
    </div>
  );
}