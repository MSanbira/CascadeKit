import { Section } from '../../components/Section/Section';
import { Text } from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';
import { Box } from '../../components/Box/Box';
import { Card } from '../../components/Card/Card';
import { GitHubIcon, NpmIcon, BlueskyIcon } from '../../components/Icons/Icons';

interface LinkItem {
  label: string;
  href: string;
  description: string;
}

const githubLinks: LinkItem[] = [
  {
    label: 'CascadeKit',
    href: 'https://github.com/MSanbira/CascadeKit',
    description: 'The main repo — documentation, principles, and examples.',
  },
  {
    label: 'cascade-kit-tools',
    href: 'https://github.com/MSanbira/cascade-kit-tools',
    description: 'The utility package: classNames, mixin, scopedStyle, and layout utilities.',
  },
  {
    label: 'cascade-kit-mcp',
    href: 'https://github.com/MSanbira/cascade-kit-mcp',
    description: 'MCP server for AI assistants — teaches CascadeKit conventions to Claude, Cursor, and Windsurf.',
  },
];

const npmLinks: LinkItem[] = [
  {
    label: 'cascade-kit-tools',
    href: 'https://www.npmjs.com/package/cascade-kit-tools',
    description: 'npm install cascade-kit-tools',
  },
  {
    label: 'cascade-kit-mcp',
    href: 'https://www.npmjs.com/package/cascade-kit-mcp',
    description: 'npm install -g cascade-kit-mcp',
  },
];

const socialLinks: LinkItem[] = [
  {
    label: 'sanbira.com',
    href: 'https://sanbira.com',
    description: 'Portfolio — Matan Sanbira',
  },
  {
    label: '@sanbira.com',
    href: 'https://bsky.app/profile/sanbira.com',
    description: 'Bluesky',
  },
];

function LinkRow({ label, href, description }: LinkItem) {
  return (
    <Card title={label}>
      <Box 
      className="d-flex jc-sb gap-4" 
      mixin={{ 
        smallScreen: { flexDirection: 'column', alignItems: 'flex-start' }, 
        mediumScreen: { flexDirection: 'row', alignItems: 'center' }
      }}>
        <Text variant="body2" muted>{description}</Text>
        <Button variant="secondary" size="sm" href={href} target="_blank" rel="noopener noreferrer">
          Visit
        </Button>
      </Box>
    </Card>
  );
}

export function LinksPage() {
  return (
    <div className="Section--sections-wrapper">
      <Section>
        <Text variant="h1" bottomMargin>Links</Text>

        <Box className="d-flex ali-center gap-2" mixin={{ mb: 4 }}>
          <GitHubIcon />
          <Text variant="h2">GitHub</Text>
        </Box>
        <div className="d-flex dir-col gap-2">
          {githubLinks.map(link => <LinkRow key={link.href} {...link} />)}
        </div>
      </Section>

      <Section>
        <Box className="d-flex ali-center gap-2" mixin={{ mb: 4 }}>
          <NpmIcon />
          <Text variant="h2">npm</Text>
        </Box>
        <div className="d-flex dir-col gap-2">
          {npmLinks.map(link => <LinkRow key={link.href} {...link} />)}
        </div>
      </Section>

      <Section>
        <Box className="d-flex ali-center gap-2" mixin={{ mb: 4 }}>
          <BlueskyIcon />
          <Text variant="h2">Social</Text>
        </Box>
        <div className="d-flex dir-col gap-2">
          {socialLinks.map(link => <LinkRow key={link.href} {...link} />)}
        </div>
      </Section>
    </div>
  );
}
