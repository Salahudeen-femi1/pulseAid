import { activities } from "../helper/data";


export default function RecentActivity(){

    return(

        <section className="mt-10">

            <div className="flex justify-between">

                <div>

                    <h2 className="text-2xl font-semibold">
                        Recent Activity
                    </h2>

                    <p className="text-gray-500">
                        Your recent blood donations
                    </p>

                </div>

            </div>

            <div className="bg-white mt-5 rounded-xl border border-gray-100 shadow">

                {activities.map(activity=>(
                    <div
                        key={activity.id}
                        className="flex items-center justify-between p-4 border-b border-gray-200"
                    >

                        <div>

                            <h3 className="font-semibold">
                                {activity.title}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {activity.hospital}
                            </p>

                            <span className="text-xs text-gray-400">
                                {activity.date}
                            </span>

                        </div>

                        <div className="text-right">

                            {activity.amount &&
                                <p className="font-semibold">
                                    {activity.amount}
                                </p>
                            }

                            <span className="text-green-600 text-sm">
                                {activity.status}
                            </span>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )

}