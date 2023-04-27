import { RefObject } from "react";
import { AboutCard } from "./AboutCard";
import { Title } from "../Title";

interface Props {
    aboutMeRef: RefObject<HTMLInputElement>;
}

export const AboutMe: React.FC<Props> = ({ aboutMeRef }) => {
    return (
        <div
            className="flex h-screen items-center justify-center flex-col gap-3 w-full"
            ref={aboutMeRef}
        >
            <Title title={"About Me"} />
            <AboutCard />
        </div>
    );
};
