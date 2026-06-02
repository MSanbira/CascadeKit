import { Section } from '../../components/Section/Section';
import { Text, Strong } from '../../components/Text/Text';
import './AboutPage.css';

export function AboutPage() {
  return (
    <div className="AboutPage--root">
      <Section scopedStyle={{ '--section-background': 'var(--color-bg)' }}>
        <div className="AboutPage--intro">
          <img src="/profile.jpeg" alt="Matan Sanbira" className="AboutPage--photo" />
          <div>
            <Text variant="h1" bottomMargin>About</Text>
            <Text isPretty>
              I'm <Strong>Matan Sanbira</Strong>, a frontend developer since 2018.
              I've led engineering teams at pre-seed and seed-stage startups, where the challenge was always the same:
              start fast, pivot often, and don't let the codebase fall apart.
            </Text>
          </div>
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <Text variant="h2" bottomMargin>The Startup Years</Text>
        <Text bottomMargin>
          Working across multiple early-stage companies, I kept running into the same friction with CSS tooling.
          Tools like Emotion or CSS Modules made no scalable sense when you need broad theming or overrides
          that aren't baked into each component separately.
          Tailwind is fine for MVPs, but once you have a unique UI language and custom styles,
          it starts working against you rather than with you.
        </Text>
        <Text bottomMargin>
          I wanted a <Strong>native CSS way</Strong> to build a scalable, custom UI solution.
          One that could handle a distinct visual language, global theming, and team-level overrides
          without fighting the tools at every turn.
        </Text>
        <Text>
          I adopted <code>@layer</code> early, running it in production before VS Code even had semantic support for it.
          The cascade control it offered was too good to wait for tooling to catch up.
        </Text>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg)' }}>
        <Text variant="h2" bottomMargin>Booking.com</Text>
        <Text>
          I currently work on <Strong>BUI</Strong>, Booking.com's design system.
          That brought a completely different set of challenges: true scale, legacy maintenance,
          version migrations across hundreds of teams, and cross-platform consistency.
          Maintaining a system that so many products depend on taught me a lot about what "production-ready" actually means.
        </Text>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <Text variant="h2" bottomMargin>Why CascadeKit</Text>
        <Text>
          CascadeKit is the result of all of that. Startup agility, design system discipline,
          and a deep respect for what the browser already provides.
          It's an opinionated system for bootstrapping apps using <Strong>native CSS features</Strong>:
          cascade layers, custom properties, and zero runtime overhead,
          wired together in a way that fits naturally into a modern React codebase.
        </Text>
      </Section>
    </div>
  );
}
