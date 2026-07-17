export interface Activity {
    id: number;
    title: string;
    hospital: string;
    date: string;
    status: string;
    amount?: string;
}

export const activities: Activity[] = [
    {
        id:1,
        title:"Whole Blood Donation",
        hospital:"University College Hospital",
        date:"Oct 14, 2023",
        status:"Completed",
        amount:"450ml"
    },
    {
        id:2,
        title:"Annual Health Screening",
        hospital:"Life Medical Centre",
        date:"Jul 20, 2023",
        status:"Verified"
    },
    {
        id:3,
        title:"Blood Donation",
        hospital:"Lagos State Hospital",
        date:"Jan 11, 2023",
        status:"Completed",
        amount:"450ml"
    }
]