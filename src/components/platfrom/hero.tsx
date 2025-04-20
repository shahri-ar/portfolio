import Image from "next/image";


export function Hero() {
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                        praesentium expedita cum! Soluta dolor officia eum iure, modi
                        dolorem! In eum quo doloribus quibusdam error excepturi voluptatum
                        natus inventore atque.
                    </p>
                    <div>
                        <button className="btn btn-secondary">DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
