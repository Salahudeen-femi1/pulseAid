import { CalendarDays, Droplets, HeartPulse } from "lucide-react";
import WelcomeCard from "../../card/WelcomeCard";
import StatCard from "../../card/StatsCard";
import RecentActivity from "../../card/RecentActivity";

export default function Dashboard() {

    return (
        <main className="bg-[#FCF7F7] min-h-screen">

            <div className="max-w-7xl mx-auto px-8 py-10">

                <WelcomeCard/>

                <div className="grid lg:grid-cols-2 gap-5 mt-8">

                    <StatCard
                        title="Last Donation"
                        value="Oct 14, 2023"
                        subtitle="University College Hospital"
                        color="green"
                        icon={<Droplets size={18}/>}
                    />

                    <StatCard
                        title="Next Eligibility"
                        value="Jan 09, 2024"
                        subtitle="Recovery period"
                        progress={78}
                        color="red"
                        icon={<CalendarDays size={18} />}
                    />

                </div>

                <div className="grid md:grid-cols-3 gap-5 mt-6">

                    <StatCard
                        title="Blood Type"
                        value="O+"
                        icon={<Droplets/>}
                    />

                    <StatCard
                        title="Total Donations"
                        value="12"
                        icon={<HeartPulse/>}
                    />

                    <StatCard
                        title="Lives Impacted"
                        value="36"
                        icon={<HeartPulse/>}
                    />

                </div>

                <RecentActivity/>

            </div>

        </main>
    )
}