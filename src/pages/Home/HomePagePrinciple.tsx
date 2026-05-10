import { Text } from "../../components/Text/Text";

export const HomePagePrinciple = (props: { title: string; description: React.ReactNode }) => {
    const { title, description } = props;
    return (
        <div className="HomePage--principle">
            <Text variant="h6" bottomMargin color="on-dark">{title}</Text>
            <Text variant="body2" color="on-dark" isPretty>
                {description}
            </Text>
        </div>
    );
};