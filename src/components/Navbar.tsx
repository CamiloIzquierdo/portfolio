import { References } from "../layout/MainLayout";
import { scrollToRef } from "../utils/scrollToRef";

export const Navbar: React.FC<References> = ({ aboutMeRef, projectRef }) => {
    return (
        <div className="flex justify-end px-4 h-14 text-black items-center">
            <ul className="flex gap-3 font-bold ">
                <button
                    onClick={() => scrollToRef({ componentRef: aboutMeRef })}
                >
                    <li className="hover:text-blue-500">About</li>
                </button>
                <button
                    onClick={() => scrollToRef({ componentRef: projectRef })}
                >
                    <li className="hover:text-blue-500">Projects</li>
                </button>
                <li>Contact</li>
            </ul>
        </div>
    );
};
