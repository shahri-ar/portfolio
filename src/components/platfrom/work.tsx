import { workCards } from "@/utils/constants/dynamic.data.component"
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
                                <div className="overLay">
                                    <span>Catagory</span>
                                    <Link href={card.link}>{card.linkText}</Link>
                                </div>
                                <Image
                                    src={card.img}
                                    alt={card.alt}
                                    height={700}
                                    width={900}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
