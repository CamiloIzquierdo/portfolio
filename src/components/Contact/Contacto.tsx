import { ContactMap } from "./contactMap";
import { Title } from "../Title";
import { RefObject } from "react";
interface Props {
    contactRef: RefObject<HTMLInputElement>;
}

export const Contacto: React.FC<Props> = ({ contactRef }) => {
    return (
        <div
            className="flex justify-center items-center flex-col md:h-80 h-[70vh] gap-11"
            ref={contactRef}
        >
            <Title title="Contacto" />
            <ContactMap />
        </div>
    );
};
