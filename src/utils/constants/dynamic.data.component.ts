export interface WebContacts {
    link: string;
    image: string;
    imgalt: string;
}

export const webContacts: WebContacts[] = [
    {
        link: "",
        image: "/img/website.svg",
        imgalt: ""
    },
    {
        link: "https://www.facebook.com/",
        image: "/img/facebook.svg",
        imgalt: ""
    },
    {
        link: "",
        image: "/img/twitter.svg",
        imgalt: ""
    },
    {
        link: "",
        image: "/img/pinterest.svg",
        imgalt: ""
    },
    {
        link: "",
        image: "/img/instagram.svg",
        imgalt: ""
    },
]

export interface CardSkills {
    img: string;
    alt: string;
    Name: string;
    Dsp: string;
}

export const cardSkills: CardSkills[] = [
    {
        img: "/img/brush.svg",
        alt: "",
        Name: "Graphs design",
        Dsp: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,soluta? Nisi magni neque accusamus natus totam ullam numquamearum eos delectus"
    },
    {
        img: "/img/code.svg",
        alt: "",
        Name: "Graphs design",
        Dsp: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,soluta? Nisi magni neque accusamus natus totam ullam numquamearum eos delectus"
    },
    {
        img: "/img/media.svg",
        alt: "",
        Name: "Graphs design",
        Dsp: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,soluta? Nisi magni neque accusamus natus totam ullam numquamearum eos delectus"
    },
    {
        img: "/img/pc.svg",
        alt: "",
        Name: "Graphs design",
        Dsp: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,soluta? Nisi magni neque accusamus natus totam ullam numquamearum eos delectus"
    },
    {
        img: "/img/media.svg",
        alt: "",
        Name: "Graphs design",
        Dsp: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,soluta? Nisi magni neque accusamus natus totam ullam numquamearum eos delectus"
    },
    {
        img: "/img/phone.svg",
        alt: "",
        Name: "Graphs design",
        Dsp: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,soluta? Nisi magni neque accusamus natus totam ullam numquamearum eos delectus"
    },
]

export interface WorkCards {
    link: string;
    linkText: string;
    img: string;
    alt: string;
    lists : Array<{list:string}>
}

export const workCards: WorkCards[] = [
    {
        link: "https://game-provider-blond.vercel.app",
        linkText: "Game Provider",
        img: "/img/work image/igaming.jpg",
        alt: "",
        lists : [
            {list:"Next.js, React"},
            {list:"typescript"},
            {list:"tailwind, shadcn ui"},
        ]
    },
    {
        link: "https://my-tube-jet-kappa.vercel.app",
        linkText: "Demo Youtube",
        img: "/img/work image/demo_youtube.jpg",
        alt: "",
        lists : [
            {list:"React, JavaScript"},
            {list:"Bootstrap"},
            {list:"Axios"},
        ]
    },
    {
        link: "https://user-list-coral.vercel.app",
        linkText: "search bar userlist",
        img: "/img/work image/search-user-list.jpg",
        alt: "",
        lists : [
            {list:"React, JavaScript"},
            {list:"Bootstrap, Formic"},
            {list:"Axios"},
        ]
    },
    {
        link: "https://click-counter-sable.vercel.app",
        linkText: "Counter App",
        img: "/img/work image/click-counter.jpg",
        alt: "",
        lists : [
            {list:"React"},
            {list:"JavaScript"},
            {list:"Bootstrap"},
        ]
    },
    {
        link: "",
        linkText: "Web Development",
        img: "/img/ph-1.png",
        alt: "",
        lists : [
            {list:""},
            {list:""},
            {list:""},
        ]
    },
    {
        link: "",
        linkText: "Web Development",
        img: "/img/ph-1.png",
        alt: "",
        lists : [
            {list:""},
            {list:""},
            {list:""},
        ]
    },
]

export interface ContactData {
    img: string;
    alt: string;
    title: string;
    details: string;
    clsName: string;
}

export const contactData: ContactData[] = [
    {
        img: "/img/phone.svg",
        alt: "",
        title: "Call Me On",
        details: "01641032348",
        clsName: "img1"
    },
    {
        img: "/img/email.svg",
        alt: "",
        title: "Email Me At",
        details: "shahriar.13913@gmail.com",
        clsName: "img2"
    },
    {
        img: "/img/map (2).svg",
        alt: "",
        title: "Visit Office",
        details: "Data not available yet",
        clsName: "img3"
    },
]

export interface Navdata {
    link : string;
    item : string;
}

export const navdata : Navdata [] = [
    {
        link: "#home",
        item: "Home"
    },
    {
        link: "#about",
        item: "About"
    }, {
        link: "#skills",
        item: "Skills"
    },
    {
        link: "#resume",
        item: "Service"
    },
    {
        link: "#work",
        item: "Works"
    },
]