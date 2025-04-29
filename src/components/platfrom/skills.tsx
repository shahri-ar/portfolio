import { cardSkills } from "@/utils/constants/dynamic.data.component"
import Image from "next/image"


export function Skills() {

    return (
        <section id="skills" className="skills place-items-center">
            <div className="container">
                <h1 className="section-heading"><span>My </span>skills</h1>
                <p>
                A showcase of the technical skills and tools I use to build responsive, high-quality, and user-focused web applications.
                </p>
                <div className="cardWraper">
                    {
                        cardSkills.map((skill, index) => (
                            <div key={index} className="card">
                                <div className="card-img">
                                    <Image
                                        src={skill.img} 
                                        alt={skill.alt}
                                        height={25}
                                        width={25}
                                    />
                                </div>
                                <h2>{skill.Name}</h2>
                                <div className="para">
                                <p>{skill.Dsp}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
