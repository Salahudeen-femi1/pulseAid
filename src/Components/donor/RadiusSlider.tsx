interface RadiusSliderProps {
  radius: number;
  setRadius: (value: number) => void;
}

export default function RadiusSlider({
  radius,
  setRadius,
}: RadiusSliderProps) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold">
          Location Radius
        </h3>

        <span className="text-sm font-medium text-red-600">
          {radius} km
        </span>
      </div>

      <input
        type="range"
        min={1}
        max={100}
        value={radius}
        onChange={(e) =>
          setRadius(Number(e.target.value))
        }
        className="w-full accent-red-600"
      />

      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>1 km</span>
        <span>25 km</span>
        <span>100 km</span>
      </div>
    </div>
  );
}