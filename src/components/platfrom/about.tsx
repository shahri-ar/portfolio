import { aboutContacts } from "@/utils/constants/dynamic.data.component";
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                        officiis porro enim distinctio! Ab reiciendis porro dolorem
                        exercitationem, eligendi obcaecati neque quis explicabo soluta
                        delectus rerum voluptatem nam facere tempore?
                    </p>
                    <div className="social-ima flex">
                        {aboutContacts.map((contct, index) => (
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
