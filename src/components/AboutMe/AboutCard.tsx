import { About } from "../../assets/Index";

export const AboutCard: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center gap-3 border-gray-300 shadow-xl hover:scale-105 transition-all p-3 rounded-lg w-fit">
            <img
                src={About}
                alt=""
                className="rounded-2xl w-[500px] h-[400px]"
            />
            <div className="flex flex-col max-w-md gap-2 ">
                <p className="font-bold max-w-xs text-sm">
                    Desarrollador Front-End ubicado en Rosario, Santa Fe. 🗺
                </p>
                <p className="font-semibold text-base">
                    Soy Camilo Izquierdo, un programador front-end de 23 años.
                    Me especializo en lenguajes como React JS, Javascript, CSS,
                    Tailwind, Directus, Firebase, MongoDB y TSX. He tenido
                    algunas contribuciones exitosas como freelancer, pero mi
                    verdadero objetivo es unirme a una empresa y formar parte de
                    un equipo de trabajo en el que pueda seguir creciendo
                    profesionalmente. Me apasiona la tecnología y siempre estoy
                    buscando nuevos desafíos para superarme a mí mismo. Si estás
                    interesado en conocer más sobre mí, no dudes en contactarme.
                </p>
            </div>
        </div>
    );
};
