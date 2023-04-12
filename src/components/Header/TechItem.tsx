interface Props {
    image: string;
}
export const TechItem: React.FC<Props> = ({ image }) => {
    return (
        <div className="flex">
            <img
                src={image}
                width={30}
                className="hover:scale-125 transition-all"
            />
        </div>
    );
};
