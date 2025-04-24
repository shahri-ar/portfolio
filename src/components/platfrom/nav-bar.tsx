"use client"

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Button from "../common/button.component";
import { navdata } from "@/utils/constants/dynamic.data.component";

export function Navbar() {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarStyle, setNavbarStyle] = useState("top-0");

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Scroll Down
                setNavbarStyle("top-[-80px]"); // Hide the navbar
            } else {
                // Scroll Up
                setNavbarStyle("top-0"); // Show the navbar
            }
            setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
        };
    }, [lastScrollTop]);

    return (
        <section className={`fixed  z-10 w-screen ${navbarStyle}  transition-all duration-300`}>
            <nav id="main-nav" className="flex center justify abc " >
                <div className="container ">
                    <div className="left flex center w-full  justify-between">
                        <div className="logo ">
                            <Image
                                src="/img/logo.svg"
                                alt=""
                                height={100}
                                width={240}
                            />
                        </div>

                        <div className="text-white flex gap-5 ">
                            {
                                navdata.map((data,index)=>(
                                    <Link key={index} href={data.link}>{data.item}</Link>
                                ))
                            }
                        </div>

                        <div className="right">
                            <Link href="#contact">
                                <Button className={"btn btn-primary"} text={"contact"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}
