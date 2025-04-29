import { webContacts } from "@/utils/constants/dynamic.data.component";
import Image from "next/image";
import Link from "next/link";


export function About() {



    return (
        <section id="about" className="about container mx-auto">
            <div className="container flex center">
                <div className="Left-con flex-1">
                    <Image
                        src="/img/man-2.png"
                        alt="2nd Hero"
                        height={600}
                        width={350}
                        className="about-img"
                    />
                </div>
                <div className="Right-con flex-1">
                    <h1>About <span>Me</span></h1>
                    <h4>Hello! I'm Shahriar Arafat</h4>
                    <p>
                    I am highly motivated and detail-oriented, with a passion for solving complex problems and building efficient solutions. I thrive in collaborative environments, take initiative when needed, and stay composed and productive under pressure.
                    </p>
                    <div className="social-ima flex">
                        {webContacts.map((contct, index) => (
                            <Link key={index} href={contct.link}>
                                <Image
                                    src={contct.image}
                                    alt={contct.imgalt}
                                    height={100}
                                    width={100}
                                    className="h-6 w-6"
                                />
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </section>

    )
}
