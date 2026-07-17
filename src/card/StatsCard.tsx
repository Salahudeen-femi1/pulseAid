import type { ReactNode } from "react";

interface Props{

    title:string;
    value:string;
    subtitle?:string;
    progress?:number;
    icon?:ReactNode;
    color?:string;

}

export default function StatCard({

    title,
    value,
    subtitle,
    progress,
    icon

}:Props){

    return(

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">

            <div className="flex justify-between">

                <div>

                    <p className="text-xs uppercase text-gray-400">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {value}
                    </h2>

                    {subtitle &&
                        <p className="text-gray-500 text-sm mt-2">
                            {subtitle}
                        </p>
                    }

                </div>

                <div className='text-primary'>
                    {icon}
                </div>

            </div>

            {progress &&

                <div className="mt-6">

                    <div className="h-2 rounded-full bg-gray-200">

                        <div
                            className="bg-red-500 h-full rounded-full"
                            style={{width:`${progress}%`}}
                        />

                    </div>

                    <p className="text-xs mt-2">
                        {progress}% through recovery period
                    </p>

                </div>

            }

        </div>

    )

}