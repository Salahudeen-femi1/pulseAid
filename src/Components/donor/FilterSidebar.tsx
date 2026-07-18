import BloodGroupFilter from "./BloodGroupFilter";
import RadiusSlider from "./RadiusSlider";
import DonorStats from "./DonorStats";
import AvailabilityToggle from "./AvailabiityToggle";

interface FilterSidebarProps {
  bloodGroup: string | null;
  radius: number;
  available: boolean;

  setBloodGroup: (value: string | null) => void;
  setRadius: (value: number) => void;
  setAvailable: (value: boolean) => void;
}

export default function FilterSidebar({
  bloodGroup,
  radius,
  available,
  setBloodGroup,
  setRadius,
  setAvailable,
}: FilterSidebarProps) {
  const handleReset = () => {
    setBloodGroup(null);
    setRadius(25);
    setAvailable(false);
  };

  return (
    <aside className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Filters
        </h2>

        <button
          type="button"
          onClick={handleReset}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Reset
        </button>
      </div>

      <div className="space-y-8">
        <BloodGroupFilter
          selected={bloodGroup}
          onSelect={setBloodGroup}
        />

        <RadiusSlider
          radius={radius}
          setRadius={setRadius}
        />

        <AvailabilityToggle
          checked={available}
          setChecked={setAvailable}
        />

        <DonorStats total={1240} />
      </div>
    </aside>
  );
}