import { Linkedin, Github, Perfil } from "../../assets/Index";
import { Button } from "../Button";

export const MyInfo: React.FC = () => {
    return (
        <div className="lg:flex md:flex-row lg:items-center lg:justify-center lg:gap-28 flex gap-10 aaa flex-col items-center justify-center">
            <img
                src={Perfil}
                alt=""
                className="lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl border-[3px] w-52 h-52"
            />
            <div className="lg:flex lg:flex-col lg:gap-3 flex gap-7 flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <h1 className="font-bold text-4xl max-w-sm">
                        Front-End React Developer
                    </h1>
                    <p className="font-semibold max-w-sm">
                        Hola, mi nombre es Camilo. Soy un desarrollador FrontEnd
                        en constante aprendizaje
                    </p>
                </div>
                <div className="flex pt-5 gap-9 items-center">
                    <a
                        href="https://www.linkedin.com/in/camilo-izquierdo-99a660229/"
                        target="__blank"
                        className="cursor-pointer group relative hover:scale-105 transition-all"
                    >
                        <img src={Linkedin} width={50} alt="" />
                    </a>
                    <a
                        href="https://github.com/CamiloIzquierdo"
                        target="__blank"
                        className="cursor-pointer group relative hover:scale-105 transition-all"
                    >
                        <img src={Github} width={37} alt="" />
                    </a>
                    <Button
                        href="https://drive.google.com/u/0/uc?id=1am4oTocmlj3uo1NJKfFaVzyol5rtEwlA&export=download"
                        color="primary"
                    >
                        Descargar CV
                    </Button>
                </div>
            </div>
        </div>
    );
};
