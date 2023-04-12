import { RefObject } from "react";

interface Props {
    componentRef: RefObject<HTMLInputElement>;
}

/**
 * Funcion para scrollear hasta una referencia
 * @prop {RefObject<HTMLInputElement>} componentRef - Referencia a la que se va a scrollear
 */
export const scrollToRef = ({ componentRef }: Props) => {
    if (componentRef.current)
        componentRef.current.scrollIntoView({ behavior: "smooth" });
};
