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
        link: "https://github.com/shahri-ar",
        image: "/img/github-2-240.png",
        imgalt: ""
    },
    {
        link: "https://www.linkedin.com/in/shahriar-arafat-8650a9190/",
        image: "/img/linkedin-2-240.png",
        imgalt: ""
    },
    {
        link: "https://www.facebook.com/shahriar.arafat.sany",
        image: "/img/facebook.svg",
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
        img: "/img/skills/code.svg",
        alt: "",
        Name: "Logic & Fundamentals",
        Dsp: "Strong understanding of JavaScript and TypeScript fundamentals, with advanced C++ expertise. Skilled at solving complex problems efficiently, using logical thinking and deep programming knowledge."
    },
    {
        img: "/img/skills/iconmonstr-book-21-240.png",
        alt: "",
        Name: "Libraries",
        Dsp: "Proficient in building powerful user interfaces using React, Next.js, and Vue.js, focusing on performance, scalability, and modern development best practices."
    },
    {
        img: "/img/skills/framework-5-32.png",
        alt: "",
        Name: "Framework & CSS",
        Dsp: "Expert in pure raw CSS, Tailwind CSS, and Bootstrap, creating elegant, responsive designs with pixel-perfect attention to detail and clean, scalable code architecture."
    },
    {
        img: "/img/skills/tools-27-32.png",
        alt: "",
        Name: "Tools",
        Dsp: "Experienced with Babel, Axios, ShadCN UI, Lucide, Formik, and Swiper, mastering essential tools to streamline development, enhance workflows, and optimize application performance."
    },
    {
        img: "/img/skills/structure-15-32.png",
        alt: "",
        Name: "Structure",
        Dsp: "Hands-on experience in crafting structured, maintainable applications using HTML, XML, and JSX, ensuring clean codebases and efficient UI component architecture for modern projects."
    },
    {
        img: "/img/skills/responsive-design-3-32.png",
        alt: "",
        Name: "Dynamic & Responsive Design",
        Dsp: "Specialized in building dynamic, interactive, and fully responsive user interfaces that adapt seamlessly across devices, enhancing user engagement and delivering a smooth experience."
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