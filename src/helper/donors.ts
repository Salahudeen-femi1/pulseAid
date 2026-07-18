import type { Donor } from "../lib/interfaces";

export const donors:Donor[] = [

{
    id:1,
    name:"David Miller",
    bloodGroup:"A+",
    avatar:"https://i.pravatar.cc/150?img=12",
    available:true,
    distance:2.4,
    location:"West End",
    bio:"Happy to help whenever needed. Regular donor for 5 years."
},

{
    id:2,
    name:"Sarah Jenkins",
    bloodGroup:"O-",
    avatar:"https://i.pravatar.cc/150?img=32",
    available:true,
    distance:0.8,
    location:"Near North",
    bio:"Universal donor. Emergency requests prioritized."
},

{
    id:3,
    name:"Marcus Thompson",
    bloodGroup:"B+",
    avatar:"https://i.pravatar.cc/150?img=11",
    available:true,
    distance:5.2,
    location:"Lincoln Park",
    bio:"Registered plasma donor."
},

{
    id:4,
    name:"Elena Rodriguez",
    bloodGroup:"AB+",
    avatar:"https://i.pravatar.cc/150?img=24",
    available:false,
    distance:3.1,
    location:"River North",
    bio:"Available for donation starting tomorrow."
},

{
    id:5,
    name:"James Wilson",
    bloodGroup:"O+",
    avatar:"https://i.pravatar.cc/150?img=15",
    available:true,
    distance:1.2,
    location:"Loop",
    bio:"Frequent Red Cross donor."
},

{
    id:6,
    name:"Lily Chen",
    bloodGroup:"A-",
    avatar:"https://i.pravatar.cc/150?img=45",
    available:true,
    distance:4.7,
    location:"South Loop",
    bio:"Ready for emergency donations."
}

];