"use client"

import Image from "next/image";
import { downloadFile } from "../common/downloadCv";
import Button from "../common/button.component";



export function Hero() {

    const handleDownload = () => {
        downloadFile();
    };

    return (
        <section className=" home-hero hero">
            <div id="home" className="container mx-auto flex center justify">
                <div className="Lhero flex-1 flex justify-center">
                    <Image
                        src="/img/man.png"
                        alt="Hero"
                        height={900}
                        width={500}
                        className="h-full w-full"
                    />
                </div>
                <div className="Rhero flex-1">
                    <h6>Shahriar Arafat</h6>
                    <h1>I am a Creative <span>Designer</span></h1>
                    <p>
                    This portfolio is designed keeping focus on simplicity and visual impact. The goal was to showcase my projects while demonstrating strong fundamentals. Every element is crafted to reflect clean code practices, responsive design, and a user-friendly experience. This project not only highlights my frontend skills but also serves as a live testament to my attention to detail, creativity, and growth as a developer.
                    </p>
                    <div>
                        <Button
                            event={handleDownload}
                            className={"btn btn-secondary"}
                            text={"DOWNLOAD CV"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
