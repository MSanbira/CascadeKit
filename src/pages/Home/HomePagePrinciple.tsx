import { Text } from "../../components/Text/Text";

export const HomePagePrinciple = (props: { number: string; title: string; description: React.ReactNode }) => {
    const { number, title, description } = props;
    return (
        <div className="HomePage--principle">
            <Text variant="h6" className="HomePage--principle-number">{number}</Text>
            <div>
                <Text variant="h6" mixin={{ mb: 1 }}>{title}</Text>
                <Text variant="body2" muted>
                    {description}
                </Text>
            </div>
        </div>
    );
};