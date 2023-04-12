import { contact } from "../../data/contact";
import { ContactItem } from "./ContactItem";

export const ContactMap = () => {
    return (
        <div className="md:flex-row flex-col flex gap-9 h-fit ">
            {contact.map(({ id, image, title, data, link }) => (
                <div key={id} className="flex">
                    <ContactItem
                        image={image}
                        title={title}
                        data={data}
                        link={link}
                    />
                </div>
            ))}
        </div>
    );
};
