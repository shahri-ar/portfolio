import { workCards } from "@/utils/constants/dynamic.data.component"
import { CircleArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Work() {

    return (
        <section id="work" className="work place-items-center">
            <div className="container">
                <h1 className="section-heading"><span>My</span> Work</h1>
                <p>We provide high stander clean website for business solution</p>

                <div className="cardWraper">
                    {
                        workCards.map((card, index) => (
                            <div key={index} className="card">
                                <Link href={card.link} target="_blank">
                                    <div className="overLay">
                                        <span>{card.linkText}</span>
                                        <div className="material">
                                            <span>Material Used</span>
                                            <ul>
                                                <li><CircleArrowRight className="h-4" />React,next</li>
                                                <li><CircleArrowRight className="h-4"/>React</li>
                                                <li><CircleArrowRight className="h-4" />React</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Image
                                        src={card.img}
                                        alt={card.alt}
                                        height={700}
                                        width={900}
                                    />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
