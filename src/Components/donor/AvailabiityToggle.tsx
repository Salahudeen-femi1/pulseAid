interface AvailabilityToggleProps {
    checked: boolean;
    setChecked: (checked: boolean) => void;
}

export default function AvailabilityToggle({
    checked,
    setChecked,
}: AvailabilityToggleProps) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h3 className="font-medium">
                    Available Now
                </h3>

                <p className="text-sm text-gray-500">
                    Show only currently available donors
                </p>
            </div>

            <button
                type="button"
                onClick={() => setChecked(!checked)}
                className={`relative h-6 w-11 rounded-full transition ${checked ? "bg-green-600" : "bg-gray-300"
                    }`}
            >
                <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${checked ? "left-5" : "left-0.5"
                        }`}
                />
            </button>
        </div>
    );
}