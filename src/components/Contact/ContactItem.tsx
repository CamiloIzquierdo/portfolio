interface Props {
    image: string;
    title: string;
    data: string;
}
export const ContactItem: React.FC<Props> = ({ image, title, data }) => {
    return (
        <div className="flex md:gap-2 gap-4 items-center justify-center">
            <img
                src={image}
                width={50}
                className="hover:scale-125 transition-all"
            />
            <div className="flex flex-col">
                <h3 className="font-bold">{title}</h3>
                <span>{data}</span>
            </div>
        </div>
    );
};
