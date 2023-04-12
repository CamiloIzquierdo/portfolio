interface Props {
    title: string;
}

export const Title: React.FC<Props> = ({ title }) => {
    return <h2 className="text-blue-700 font-extrabold text-2xl">{title}</h2>;
};
