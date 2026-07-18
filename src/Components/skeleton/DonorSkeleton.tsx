export default function DonorSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border bg-white p-6">
      <div className="h-16 w-16 rounded-full bg-gray-200" />

      <div className="mt-5 h-5 w-40 rounded bg-gray-200" />

      <div className="mt-3 h-4 w-28 rounded bg-gray-200" />

      <div className="mt-6 h-4 w-full rounded bg-gray-200" />

      <div className="mt-2 h-4 w-2/3 rounded bg-gray-200" />

      <div className="mt-8 flex gap-3">
        <div className="h-10 flex-1 rounded bg-gray-200" />
        <div className="h-10 flex-1 rounded bg-gray-200" />
      </div>
    </div>
  );
}