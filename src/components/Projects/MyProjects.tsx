import { ProjectsMap } from "./ProjectsMap";
import { Title } from "../Title";
import { RefObject } from "react";

interface Props {
    projectRef: RefObject<HTMLInputElement>;
}

export const MyProjects: React.FC<Props> = ({ projectRef }) => {
    return (
        <div className="pt-3 gap-3" ref={projectRef}>
            <div className="flex h-full items-center justify-center flex-col gap-28">
                <Title title={"Mis Proyectos"} />
                <ProjectsMap />
            </div>
        </div>
    );
};
