interface Props {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    color?: "primary" | "secondary";
    href?: string;
}

export const Button: React.FC<Props> = ({
    children,
    className,
    onClick = () => {},
    color = "primary",
    href,
}) => {
    const buttonColor = {
        primary: "bg-blue-700 text-white",
        secondary: "bg-purple-700 text-white",
    };
    return (
        <>
            {href ? (
                <a
                    href={href}
                    target="_blank"
                    className={`${buttonColor[color]} ${className} hover:scale-105 transition-all px-4 py-2 rounded-md font-medium`}
                >
                    {children}
                </a>
            ) : (
                <button
                    className={`${buttonColor[color]} ${className} hover:scale-105 transition-all px-4 py-2 rounded-md font-medium`}
                    onClick={() => onClick()}
                >
                    {children}
                </button>
            )}
        </>
    );
};
