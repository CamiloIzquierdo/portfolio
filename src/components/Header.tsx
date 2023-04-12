import { knowlegde } from "../data/knowledge";
import { MyInfo } from "./Header/MyInfo";
import { TechItem } from "./Header/TechItem";

export const Header: React.FC = () => {
    return (
        <div className="flex justify-center flex-col h-[calc(100vh-56px)] w-full">
            <div className="flex md:gap-32 gap-20 flex-col items-center">
                <MyInfo />
                <div className="lg:flex lg:gap-10 lg:items-center items-center justify-center flex gap-3">
                    <h2 className="font-bold text-center gap-3">
                        Tech Stack |
                    </h2>
                    {knowlegde.map(({ id, image }) => (
                        <TechItem key={id} image={image} />
                    ))}
                </div>
            </div>
        </div>
    );
};
