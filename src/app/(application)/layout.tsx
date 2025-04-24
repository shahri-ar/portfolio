import { Footer } from "@/components/platfrom/footer";
import { IchildProps } from "@/types/types";
import { Navbar } from './../../components/platfrom/nav-bar';

const HomeLayout = ({ children }: IchildProps) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default HomeLayout;
