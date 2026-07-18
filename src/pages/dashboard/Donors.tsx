import { useState } from "react";

import ViewToggle from "../../helper/Viewtoggle";
import FilterSidebar from "../../Components/donor/FilterSidebar";
import DonorGrid from "../../Components/donor/DonorGrid";
import useDonorFilters from "../../helper/useDonorFilters";
import { donors as donorData } from "../../helper/donors";

export default function FindDonors() {
    const {
        donors,
        bloodGroup,
        radius,
        available,
        setBloodGroup,
        setRadius,
        setAvailable,
    } = useDonorFilters(donorData);

    const [view, setView] = useState<"grid" | "list">("grid");

    return (
        <div className="min-h-screen bg-[#FFF8F7]">
            <div className="max-w-7xl mx-auto py-12 px-6">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900">
                            Available Donors Near You
                        </h1>

                        <p className="mt-3 text-gray-500">
                            Connect with voluntary donors in your community.
                        </p>
                    </div>

                    <ViewToggle view={view} setView={setView} />
                </div>

                {/* Content */}
                <div className="grid grid-cols-4 gap-8 mt-10">
                    {/* Sidebar */}
                    <FilterSidebar
                        bloodGroup={bloodGroup}
                        radius={radius}
                        available={available}
                        setBloodGroup={setBloodGroup}
                        setRadius={setRadius}
                        setAvailable={setAvailable}
                    />

                    {/* Donor Section */}
                    <div className="col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-semibold text-gray-700">
                                Showing {donors.length} donors
                            </p>
                        </div>

                        <DonorGrid
                            donors={donors}
                            view={view}
                        />

                        <div className="mt-8">
                            <StatsCard
                                total={1240}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}