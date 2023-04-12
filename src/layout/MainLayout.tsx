import { RefObject } from "react";
import { Navbar } from "../components/Navbar";

export interface References {
    aboutMeRef: RefObject<HTMLInputElement>;
    projectRef: RefObject<HTMLInputElement>;
}
interface Props extends References {
    children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({
    children,
    aboutMeRef,
    projectRef,
}) => {
    return (
        <div>
            <Navbar aboutMeRef={aboutMeRef} projectRef={projectRef} />
            <div className="md:mx-20 mx-4 my-4">{children}</div>
        </div>
    );
};
