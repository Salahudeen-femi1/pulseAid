import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 170 },
  { month: "Mar", value: 260 },
  { month: "Apr", value: 190 },
  { month: "May", value: 280 },
  { month: "Jun", value: 330 },
];

export default function DonationChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

      <div className="flex justify-between mb-6">

        <h2 className="text-xl font-semibold">
          Donation Trends
        </h2>

        <button className="text-sm text-gray-500">
          Last 6 Months
        </button>

      </div>

      <div className="h-80">

        <ResponsiveContainer>

          <BarChart data={data}>

            <XAxis dataKey="month" />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[10,10,0,0]}
              fill="#B91C1C"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}