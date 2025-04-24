import { webContacts } from "@/utils/constants/dynamic.data.component";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer>
            <div className="container place-items-center">
                
                <Image
                    src="/img/logo.svg" 
                    alt=""
                    height={100}
                    width={240}
                />

                <div className="social-ima flex">
                    {webContacts.map((contct, index) => (
                        <Link key={index} href={contct.link} target="_blank">
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
                <p>Made by @ Shahriar</p>
            </div>
        </footer>
    )
}
