import React from "react";
import StatCard from "../../card/StatCard";
import ReusableTable from "../../utility/ReusableTable";
import ActionCell from "../../helper/ActionCell";
import DonationChart from "../../Components/chart/DonationChart";
import CenterCard from "../../card/CenterCard";

import {
    Users,
    Activity,
    CheckCircle,
} from "lucide-react";

export default function Dashboard() {

    const [editModal, setEditModal] = React.useState(false);
    const [viewModal, setViewModal] = React.useState(false);
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [selectedSale, setSelectedSale] = React.useState<any>(null);

    const columns = [
        {
            label: "Donor Name",
            key: "donor_name"
        },
        {
            label: "Blood Group",
            key: "blood_group",
            render: (item: any) => (
                <span className={`px-2 py-1 rounded-full text-white ${item.blood_group === "A+" ? "bg-red-500 text-red-100" : item.blood_group === "B-" ? "bg-blue-500 t" : item.blood_group === "O+" ? "bg-green-500" : "bg-gray-500"}`}>
                    {item.blood_group}
                </span>
            )
        },
        {
            label: "Last Donation",
            key: "last_donation"
        },
        {
            label: "Status",
            key: "status"
        },
        {
            label: "Action",
            key: "action",
            render: (item: any) => (
                <ActionCell
                    rowId={Number(item.id)}
                    onEdit={() => setEditModal(true)}
                    onView={() => setViewModal(true)}
                    onDelete={() => setDeleteModal(true)}
                    toggleAction={() => setSelectedSale(item)}
                />
            )
        },
    ];

    const data = [
        {
            id: 1,
            donor_name: "John Doe",
            email: "robert@example.com",
            blood_group: "A+",
            last_donation: "2023-05-10",
            status: "Active"
        },
        {
            id: 2,
            donor_name: "Jane Smith",
            email: "jane@example.com",
            blood_group: "B-",
            last_donation: "Dec 05, 2023",
            status: "Inactive"
        },
        {
            id: 3,
            donor_name: "Robert Kincaid",
            email: "robert@example.com",
            blood_group: "A+",
            last_donation: "Jan 14, 2024",
            status: "Inactive",
        },
    ]

    return (
        <div className="min-h-screen bg-[#FCF7F6]">

            <main className="max-w-7xl mx-auto p-8">

                <h1 className="text-4xl font-bold mb-8">
                    Dashboard Overview
                </h1>

                <div className="grid grid-cols-3 gap-6">

                    <StatCard
                        title="Total Donors"
                        value="12,840"
                        description="+12% this month"
                        icon={<Users />}
                        color="bg-red-100"
                    />

                    <StatCard
                        title="Active Requests"
                        value="432"
                        description="8 Critical Priority"
                        icon={<Activity />}
                        color="bg-cyan-100"
                    />

                    <StatCard
                        title="Successful Donations"
                        value="8,901"
                        description="+5% from target"
                        icon={<CheckCircle />}
                        color="bg-green-100"
                    />

                </div>

                <div className="mt-8">
                    <ReusableTable
                        isLoading={false}
                        error={null}
                        data={data}
                        columns={columns}
                        currentPage={1}
                        totalPages={5}
                        totalItems={50}
                        setCurrentPage={() => { }}
                        itemsPerPage={10}
                        setItemsPerPage={() => { }}
                        hasSerialNo={true}
                        tableType="donors"
                    />
                </div>

                <div className="grid grid-cols-3 gap-6 mt-8">

                    <div className="col-span-2">
                        <DonationChart />
                    </div>

                    <CenterCard />

                </div>

            </main>

        </div>
    );
}