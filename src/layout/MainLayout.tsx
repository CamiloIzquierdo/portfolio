import { RefObject } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export interface References {
    aboutMeRef: RefObject<HTMLInputElement>;
    projectRef: RefObject<HTMLInputElement>;
    contactRef: RefObject<HTMLInputElement>;
}
interface Props extends References {
    children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({
    children,
    aboutMeRef,
    projectRef,
    contactRef,
}) => {
    return (
        <div>
            <Navbar
                aboutMeRef={aboutMeRef}
                projectRef={projectRef}
                contactRef={contactRef}
            />
            <div className="md:mx-20 mx-4 my-4">{children}</div>
            <Footer />
        </div>
    );
};
