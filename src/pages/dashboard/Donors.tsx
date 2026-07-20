import { useState } from "react";

import ViewToggle from "../../helper/Viewtoggle";
import FilterSidebar from "../../Components/donor/FilterSidebar";
import DonorGrid from "../../Components/donor/DonorGrid";
import useDonorFilters from "../../helper/useDonorFilters";
import { donors as donorData } from "../../helper/donors";
import type { Donor } from "../../lib/interfaces";
import ContactModal from "../../Components/modal/ContactModal";
import DonorProfileModal from "../../Components/modal/DonorProfileModal";
import Pagination from "../../Components/donor/Pagination";

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
    const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);
    const [contactOpen, setContactOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const [page, setPage] = useState(1);

    const donorsPerPage = 6;

    const startIndex = (page - 1) * donorsPerPage;

    const paginatedDonors = donors.slice(
        startIndex,
        startIndex + donorsPerPage
    );

    const totalPages = Math.ceil(
        donors.length / donorsPerPage
    );

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
                            donors={paginatedDonors}
                            view={view}
                            onContact={(donor: Donor) => {
                                setSelectedDonor(donor);
                                setContactOpen(true);
                            }}
                            onViewProfile={(donor: Donor) => {
                                setSelectedDonor(donor);
                                setProfileOpen(true);
                            }}
                        />

                        <Pagination
                            page={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />

                        {/* <div className="mt-8">
                            <StatCard
                                total={1240}
                            />
                        </div> */}
                    </div>
                </div>
            </div>

            <ContactModal
                donor={selectedDonor}
                open={contactOpen}
                onClose={() => setContactOpen(false)}
            />

            <DonorProfileModal
                donor={selectedDonor}
                open={profileOpen}
                onClose={() => setProfileOpen(false)}
            />
        </div>
    );
}