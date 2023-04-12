import { ContactMap } from "./contactMap";
import { Title } from "../Title";

export const Contacto = () => {
    return (
        <div className="flex justify-center items-center flex-col md:h-80 h-[70vh] gap-11">
            <Title title="Contacto" />
            <ContactMap />
        </div>
    );
};
