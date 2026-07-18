import { Grid2x2, List } from "lucide-react";

interface ViewToggleProps {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

const views = [
  {
    key: "grid" as const,
    icon: Grid2x2,
  },
  {
    key: "list" as const,
    icon: List,
  },
];

export default function ViewToggle({
  view,
  setView,
}: ViewToggleProps) {
  return (
    <div className="flex items-center gap-2">
      {views.map(({ key, icon: Icon }) => (
        <button
          key={key}
          type="button"
          onClick={() => setView(key)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
            view === key
              ? "border-red-600 bg-red-600 text-white"
              : "border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  );
}