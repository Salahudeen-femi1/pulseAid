export default function CenterCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">

      <h2 className="text-xl font-semibold">
        Active Centers
      </h2>

      <p className="text-gray-500 text-sm mb-4">
        Location of high-traffic centers
      </p>

      <img
        src="/images/map.png"
        alt="Map"
        className="rounded-xl object-cover h-56 w-full"
      />

      <button className="mt-5 w-full border border-red-600 rounded-lg py-3 text-red-600">
        Manage Centers
      </button>

    </div>
  );
}