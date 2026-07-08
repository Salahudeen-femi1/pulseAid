import { Calendar, ChevronRight, MapPin, Search } from "lucide-react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface UrgentCardProps {
  type: string;
  dist: string;
  place: string;
  note: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl bg-white p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function IconBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
      {children}
    </div>
  );
}

function UrgentCard({ type, dist, place, note }: UrgentCardProps) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-xl border-l-4 border-red-500 bg-white p-4">
      <div>
        <div className="text-sm font-bold text-red-700">
          {type}
          <span className="ml-2 font-normal text-[#7b6b6b]">{dist}</span>
        </div>
        <div className="mt-1 font-semibold">{place}</div>
        <div className="text-xs text-[#7b6b6b]">{note}</div>
      </div>
      <ChevronRight className="text-gray-400" />
    </div>
  );
}

export default function BloodDonationDashboard() {
  return (
    <div className="min-h-screen p-4 font-sans text-[#2a1d1d] md:p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-1 text-2xl font-bold">Welcome back, Sarah Jenkins</h1>
        <p className="mb-8 text-sm text-[#7d6a6a]">
          Your O- blood type is currently in high demand. You're making a real
          difference.
        </p>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:col-span-8">
            <Card className="min-h-50 border">
              <div className="flex items-start justify-between">
                <IconBox>
                  <Calendar size={18} />
                </IconBox>
                <span className="rounded-full bg-green-200 px-4 py-1 text-sm text-green-700">
                  Completed
                </span>
              </div>
              <div className="mt-6 text-xs tracking-widest text-[#7b6b6b]">
                LAST DONATION
              </div>
              <div className="mt-1 text-2xl font-bold">Oct 14, 2023</div>
              <div className="mt-2 text-sm text-[#7b6b6b]">
                At Downtown Medical Center
              </div>
            </Card>

            <Card className="min-h-50 border border-red-200">
              <IconBox>
                <Calendar size={18} />
              </IconBox>
              <div className="mt-6 text-xs tracking-widest text-[#7b6b6b]">
                NEXT ELIGIBILITY
              </div>
              <div className="mt-1 text-2xl font-bold text-red-600">
                Jan 09, 2024
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-red-100">
                <div className="h-full w-3/4 rounded-full bg-red-600" />
              </div>
              <div className="mt-2 text-sm text-[#7b6b6b]">
                78% through recovery period
              </div>
            </Card>

            <div className="relative min-h-56 overflow-hidden rounded-2xl shadow-sm md:col-span-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,.08),transparent_20%),linear-gradient(120deg,#2c0b0b,#4d1111,#260707)]" />
              <div className="relative p-6 text-white">
                <h2 className="text-2xl font-semibold md:text-4xl">
                  Search Potential Donors
                </h2>
                <p className="mt-2 max-w-lg text-white/80">
                  Find compatible matches in your local community for emergency
                  requests.
                </p>
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                  <Search size={18} />
                  <span className="text-white/70">
                    Find by blood type or location...
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 xl:col-span-4">
            <div className="rounded-2xl bg-[#f8dede] p-5">
              <h3 className="mb-4 text-2xl font-bold text-red-700">
                Urgent Near You
              </h3>
              <UrgentCard
                type="O-"
                dist="2.4 km away"
                place="City General Hospital"
                note="Required within 6 hours"
              />
              <UrgentCard
                type="B+"
                dist="5.1 km away"
                place="St. Mary's Clinic"
                note="Required within 12 hours"
              />
              <button className="mt-4 w-full rounded-xl border border-red-300 py-3 font-medium text-red-600">
                View All Requests
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative h-36 bg-gradient-to-br from-[#d9e7f8] to-[#c7dbef]">
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,0,0,.08)_25%,transparent_26%),linear-gradient(90deg,transparent_24%,rgba(0,0,0,.08)_25%,transparent_26%)] bg-[size:40px_40px] opacity-60" />
                <div className="absolute left-1/2 top-1/2 text-red-600 -translate-x-1/2 -translate-y-1/2">
                  <MapPin fill="currentColor" />
                </div>
              </div>
              <div className="p-4">
                <div className="text-lg font-bold">Your Preferred Center</div>
                <div className="text-[#7b6b6b]">Metro Health Plaza, 42nd St.</div>
                <div className="mt-2 text-sm text-green-600">
                  Open until 8:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
