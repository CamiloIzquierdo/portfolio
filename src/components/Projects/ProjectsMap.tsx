import { projects } from "../../data/projects";
import { Github, Live } from "../../assets/Index";
export const ProjectsMap: React.FC = () => {
    return (
        <div className="flex flex-col gap-12">
            {projects.map(
                ({ id, nameProject, image, live, dataProject, code, tec }) => (
                    <div
                        key={id}
                        className="flex-col md:flex-row flex gap-6 h-fit items-center justify-center"
                    >
                        <a href={live} target="__blank">
                            <img
                                src={image}
                                alt=""
                                className="rounded-lg hover:scale-105 transition-all lg:h-[300px] lg:w-[600px] h-[200px] w-[350px]"
                            />
                        </a>
                        <div className="flex flex-col text-center">
                            <p className="text-center font-extrabold text-lg">
                                {nameProject}
                            </p>
                            <span className="font-semibold max-w-sm">
                                {dataProject}
                            </span>
                            <span className="font-bold text-center py-2">
                                {tec}
                            </span>
                            <div className="flex justify-center gap-16 items-center">
                                <a
                                    href={code}
                                    target="__blank"
                                    className="hover:text-blue-500"
                                >
                                    <div className="flex gap-2 hover:scale-105 transition-all">
                                        <span className="font-semibold">
                                            Code
                                        </span>
                                        <img src={Github} alt="" width={20} />
                                    </div>
                                </a>
                                <a
                                    href={live}
                                    target="__blank"
                                    className="hover:text-blue-500"
                                >
                                    <div className="flex gap-1 hover:scale-105 transition-all">
                                        <span className="font-semibold">
                                            Live Demo
                                        </span>
                                        <img src={Live} alt="" width={20} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
