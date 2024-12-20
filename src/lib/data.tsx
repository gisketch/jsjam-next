// import Aboitiz from "@/assets/clients/aboitiz.webp";
// import Alsons from "@/assets/clients/alsons.webp";
// import Awesomeos from "@/assets/clients/awesomeos.webp";
// import Cemex from "@/assets/clients/cemex.webp";
// import Davaodoctors from "@/assets/clients/davaodoctors.webp";
// import Globe from "@/assets/clients/globe.webp";
// import Ladislawa from "@/assets/clients/ladislawa.webp";
// import Lasterrazas from "@/assets/clients/lasterrazas.webp";
// import Nia from "@/assets/clients/nia.webp";
// import Plantationbay from "@/assets/clients/plantationbay.webp";
// import Seawind from "@/assets/clients/seawind.webp";
// import Sutherland from "@/assets/clients/sutherland.webp";
// import Thelind from "@/assets/clients/thelind.webp";
// import Woodridge from "@/assets/clients/woodridge.webp";
// import Youngliving from "@/assets/clients/youngliving.webp";

import { Building2, Code2, Cpu, Factory, Network, Shield } from "lucide-react";

// export const clientsData = [
//     [
//         Lasterrazas,
//         Nia,
//         Plantationbay,
//         Seawind,
//         Sutherland,
//         Thelind,
//         Woodridge,
//         Youngliving,
//     ],
//     [Aboitiz, Alsons, Awesomeos, Cemex, Davaodoctors, Globe, Ladislawa],
// ];

export const aboutInfo = {
    headerText: 'JsJam Construction',
    description: `Established by seasoned engineer Engr. Joseph S. Jamayo, JSJAM Construction specializes in all facets of building design, engineering, construction, and renovation for both commercial and residential sectors. Located at the Jamayo Building in Davao City, the company leverages Engr. Jamayo's 22 years of experience, including significant roles in the Red Sea Company and Saudi Aramco.`,
};

export interface ProjectDataInterface {
    name: string;
    location: string;
    image: string | null;
}

export const projectsData: ProjectDataInterface[] = [
    {
        name: "Project 1",
        location: "Location 1",
        image: "https://picsum.photos/128/128",
    },
    {
        name: "Project 2",
        location: "Location 2",
        image: "https://picsum.photos/128/128",
    },
    {
        name: "Project 3",
        location: "Location 3",
        image: "https://picsum.photos/128/128",
    },
    {
        name: "Project 4",
        location: "Location 4",
        image: "https://picsum.photos/128/128",
    },
];

export const teamInfo = {
    header: "Our Team",
    description: `Our team is led by Engr. Joseph S. Jamayo, and includes experts in project management, IT & Network Systems, and more.`,
};

export const servicesInfo = {
    services: [
        {
            name: "Construction Works",
            icon: <Building2 />,
            description: "Comprehensive construction services including general construction, structural work, architectural design, interior and exterior finishes, with specialized installations for treatment plants, elevators, and transmission lines.",
        },
        {
            name: "MEPF",
            icon: <Factory />,
            description: "Complete mechanical, electrical, plumbing, and fire protection system solutions for residential and commercial buildings, ensuring safety and efficiency.",
        },
        {
            name: "Network Solutions",
            icon: <Network />,
            description: "Advanced telecommunication and networking infrastructure including wireless networks, data centers, and underground cabling systems for seamless connectivity.",
        },
        {
            name: "Security & AI Systems",
            icon: <Shield />,
            description: "Cutting-edge security solutions featuring surveillance, access control, and integrated command center systems powered by AI technology.",
        },
        {
            name: "Automation Systems",
            icon: <Cpu />,
            description: "Comprehensive automation solutions for industrial, commercial, and residential applications, including smart building management and environmental monitoring systems.",
        },
        {
            name: "Software Solutions",
            icon: <Code2 />,
            description: "Enterprise software systems for business operations, including finance, HR, CRM, and management solutions for manufacturing and warehouse operations.",
        },
    ],
};
