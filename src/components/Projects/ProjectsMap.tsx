import { projects } from "../../data/projects";
import { Github, Live } from "../../assets/Index";
export const ProjectsMap: React.FC = () => {
    return (
        <div className="flex flex-col gap-12 w-full">
            {projects.map((project) => (
                /*       <div
                        key={id}
                        className="flex-col md:flex-row flex max-h-80 gap-6 items-center justify-center lg:h-[300px] h-[200px]"
                    >
                        <a
                            href={live}
                            className="flex flex-1 h-full"
                            target="__blank"
                        >
                            <img
                                src={image}
                                alt=""
                                className="rounded-lg hover:scale-105 transition-all"
                            />
                        </a>
                        <div className="flex flex-col text-center justify-between h-full py-2">
                            <div className="flex h-full flex-col">
                                <p className="text-center font-extrabold text-lg ">
                                    {nameProject}
                                </p>
                                <span className="font-semibold max-w-sm">
                                    {dataProject}
                                </span>
                            </div>
                            <div className="flex flex-col justify-center gap-16 items-center">
                                <span className="font-bold text-center py-2">
                                    {tec}
                                </span>
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
                    </div> */
                <div
                    className="w-full flex gap-6 flex-col md:flex-row"
                    key={project.id}
                >
                    <div className="flex flex-[55%] h-[300px] w-full transition-all">
                        <a href={project.live} target="_blank">
                            <img
                                src={project.image}
                                alt=""
                                className="h-full object-cover hover:scale-105"
                            />
                        </a>
                    </div>
                    <div className="flex flex-[45%] flex-col justify-between py-4">
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="font-bold text-2xl">
                                {project.nameProject}
                            </h2>
                            <p className="text-center font-semibold text-gray-500">
                                {project.dataProject}
                            </p>
                        </div>
                        <div className="justify-center gap-4 flex flex-col">
                            <span className="text-center font-bold">
                                {project.tec}
                            </span>
                            <div className="flex w-full justify-center gap-4 transition-all">
                                <a
                                    href={project.code}
                                    target="__blank"
                                    className="hover:text-blue-500 font-semibold flex gap-2 items-center hover:scale-105 cursor-pointer"
                                >
                                    <img src={Github} alt="" width={20} />
                                    Code
                                </a>
                                <a
                                    href={project.live}
                                    target="__blank"
                                    className="hover:text-blue-500 font-semibold flex gap-2 items-center hover:scale-105 cursor-pointer"
                                >
                                    <img src={Live} alt="" width={20} />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
