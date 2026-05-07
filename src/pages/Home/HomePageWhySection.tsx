import { Button } from "../../components/Button/Button";
import { Text } from "../../components/Text/Text";
import { routes } from "../../constants/routes";
import './HomePageWhySection.css';

export const HomePageWhySection = () => {
    return (
        <div className="HomePageWhySection--root">
            <div className="HomePageWhySection--row hide-on-small-screens">
                <div /><div /><div /><div />
            </div>
            <div className="HomePageWhySection--row">
                <div className="HomePageWhySection--title-block">
                    <Text variant="h1">Why CascadeKit?</Text>
                </div>
                <HomePageWhySectionTextBlock title="Zero Runtime" description="Native CSS only, no JS overhead" />
                <HomePageWhySectionTextBlock title="Predictable Cascade" description="Layers define who wins always" />
                <div className="hide-on-small-screens" />
            </div>
            <div className="HomePageWhySection--row">
                <div className="hide-on-small-screens" />
                <div className="hide-on-small-screens" />
                <HomePageWhySectionTextBlock title="Debuggable" description="Real class names in DevTools" />
                <div/>
                <HomePageWhySectionTextBlock title="Tree-shakeable" description="Unused CSS never ships" />
                <div className="hide-on-small-screens" />
            </div>
            <div className="HomePageWhySection--row">
                <div className="hide-on-small-screens" />
                <div className="HomePageWhySection--button-block">
                    <Button variant="outline" href={routes.why}>Learn more about the philosophy →</Button>
                </div>
                <HomePageWhySectionTextBlock title="SSR-friendly" description="No hydration issues" />
                <HomePageWhySectionTextBlock title="Future-proof" description="Native features browsers already support" />
                <div className="hide-on-small-screens" />
            </div>
            <div className="HomePageWhySection--row hide-on-small-screens">
                <div /><div /><div /><div />
            </div>
        </div>
    );
};

const HomePageWhySectionTextBlock = (props: { title: string; description: string }) => {
    const { title, description } = props;
    return (
        <div>
            <Text variant="h3" bottomMargin color="lightest">{title}</Text>
            <Text variant="body2" color="lightest">{description}</Text>
        </div>
    );
};