import { AlignJustify, House, PencilRuler, Shapes, Swords, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "../common/button.component";

export default function Toggol() {


    const [newClass, setNewClass] = useState("mobile-nav");

    const openHam = () => {
        setNewClass("mobile-nav open")
    }

    const closeHam = () => {
        setNewClass("mobile-nav")
    }

    return (
        <div >
            <button onClick={openHam} className="hamberger">
                <AlignJustify className="text-cyan-500" />
            </button>

            <div className={newClass}>
                <button onClick={closeHam} className="times"><X className="text-white" /></button>
                <ul>
                    <li><a href="#home"><House />Home</a></li>
                    <li><a href="#about"><User />about</a></li>
                    <li><a href="#skills"><Swords />Skills</a></li>
                    <li><a href="#resume"><PencilRuler />service</a></li>
                    <li><a href="#work"><Shapes />Work</a></li>
                </ul>
                <Link href="#contact">
                    <Button className={"btnc btn-primary"} text={"contact"} />
                </Link>
            </div>
        </div>
    )
}
