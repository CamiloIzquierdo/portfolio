interface Props {
    image: string;
    title: string;
    data: string;
    link: string;
}
export const ContactItem: React.FC<Props> = ({ image, title, data, link }) => {
    const isEmailLink = link.startsWith("mailto:");
    const isHttpLink = link.startsWith("http");
    return (
        <div className="flex md:gap-2 gap-4 items-center justify-center">
            <a
                href={isEmailLink || isHttpLink ? link : `mailto:${link}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={image}
                    width={30}
                    className="hover:scale-125 transition-all"
                    alt={`${title} logo`}
                />
            </a>
            <div className="flex flex-col">
                <a
                    href={isEmailLink || isHttpLink ? link : `mailto:${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3 className="font-bold">{title}</h3>
                </a>
                <span>{data}</span>
            </div>
        </div>
    );
};
