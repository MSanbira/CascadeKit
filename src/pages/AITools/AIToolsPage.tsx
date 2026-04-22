import { Link } from 'react-router-dom';
import { Section } from '../../components/Section/Section';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Text, Strong } from '../../components/Text/Text';
import { Card } from '../../components/Card/Card';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import './AIToolsPage.css';

const mcpConfigJSON = `// ~/.codeium/windsurf/mcp_config.json
{
  "mcpServers": {
    "cascadekit": {
      "command": "cascade-kit-mcp"
    }
  }
}`;

const mcpConfigClaudeJSON = `// ~/Library/Application Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "cascadekit": {
      "command": "cascade-kit-mcp"
    }
  }
}`;

const promptGuideUsage = `// In your AI chat, paste or reference the guide:
"Follow the conventions in PROMPT_GUIDE.md from cascade-kit-tools"

// Or point the AI directly to it:
"Read node_modules/cascade-kit-tools/PROMPT_GUIDE.md and follow its rules"`;

const mcpToolExample = `// Ask the AI to use MCP tools:
"Create a Card component with variants: default, elevated, outlined"

// The AI calls the create_component tool, which generates:
// - Card.tsx (with classNames, mixin, scopedStyle support)
// - Card.css (with @layer components, variant variables)
// - index.ts`;

const mcpResourceExample = `// The MCP provides these resources:
cascadekit://docs/core-principles    // The 5 rules
cascadekit://docs/tokens             // All design tokens
cascadekit://docs/layout-utils       // Utility classes reference
cascadekit://docs/mixin-props        // Mixin props reference
cascadekit://docs/component-pattern  // How to build components
cascadekit://docs/scoped-style       // ScopedStyle deep dive
cascadekit://docs/consumer-patterns  // How to compose components`;

export function AIToolsPage() {
  return (
    <div className="AIToolsPage--root">
      <Section>
        <Text variant="h1" bottomMargin>AI-Integrated Tools</Text>
        <Text>
          CascadeKit is designed to work <Strong>with</Strong> AI coding assistants, not against them.
          Two packages help AI agents understand and follow CascadeKit conventions
          when building your app.
        </Text>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>The Two Packages</Text>
        <Box className="d-flex dir-col gap-3" mixin={{ mt: 3 }}>
          <Card title="cascade-kit-tools" className="d-flex dir-col gap-2">
            <Text>
              The core library you already install for <code>classNames</code>, <code>mixin</code>,{' '}
              <code>scopedStyle</code>, and <code>layoutUtils</code>. It also ships a{' '}
              <Strong>PROMPT_GUIDE.md</Strong> — a comprehensive document that teaches any AI agent
              how to build CascadeKit apps correctly.
            </Text>
            <Text variant="body2" muted mixin={{mb: 2}}>
              Works with any AI tool — paste the guide into ChatGPT, Claude, Copilot, or any chat interface.
            </Text>
            <Button variant="secondary" size="sm" target="_blank" href="https://www.npmjs.com/package/cascade-kit-tools">
            View on npm →
            </Button>
          </Card>

          <Card title="cascade-kit-mcp" className="d-flex dir-col gap-2">
            <Text>
              A <Strong>Model Context Protocol (MCP)</Strong> server that gives AI agents direct access
              to CascadeKit tools, documentation, and component generation — without needing to
              copy-paste anything.
            </Text>
            <Text variant="body2" muted mixin={{mb: 2}}>
              Works with MCP-compatible editors: Windsurf, Claude Desktop, Cursor, and others.
            </Text>
            <Button variant="secondary" size="sm" href="https://www.npmjs.com/package/cascade-kit-mcp" target="_blank">
              View on npm →
            </Button>
          </Card>
        </Box>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>PROMPT_GUIDE.md</Text>
        <Text>
          The prompt guide is a detailed reference document that ships with <code>cascade-kit-tools</code>.
          It covers every CascadeKit convention: layered cascade, naming, tokens, component patterns,
          mixin usage, layout utils, and scoped styles.
        </Text>
        <Text>
          To use it, simply point your AI assistant to the file:
        </Text>
        <CodeBlock language="tsx">{promptGuideUsage}</CodeBlock>
        <Text>
          The guide is designed to be self-contained — an AI that reads it will understand how to
          create components, structure CSS, use tokens, and compose pages correctly.
        </Text>
        <Text variant="body2" muted mixin={{ mt: 2 }}>
          Install: <code>npm install cascade-kit-tools</code> — the guide is at{' '}
          <code>node_modules/cascade-kit-tools/PROMPT_GUIDE.md</code>
        </Text>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>MCP Server</Text>
        <Text>
          The MCP server takes AI integration a step further. Instead of the AI reading a static
          document, it gets <Strong>live access</Strong> to tools, documentation resources, and
          component generation prompts.
        </Text>

        <Text variant="h4" mixin={{ mt: 4, mb: 2 }}>What the MCP Provides</Text>
        <Box className="d-flex dir-col gap-3">
          <Card variant="subtle" className="d-flex dir-col gap-1">
            <Text variant="h5">Tools</Text>
            <Text variant="body2">
              <Strong>create_component</Strong> — generates a complete component (TSX + CSS) following
              all CascadeKit conventions, with variants, sizes, mixin, and optional scopedStyle support.
            </Text>
            <Text variant="body2">
              <Strong>list_tokens</Strong> — returns all available design tokens by category.
            </Text>
            <Text variant="body2">
              <Strong>list_layout_utils</Strong> — returns all layout utility classes.
            </Text>
          </Card>

          <Card variant="subtle" className="d-flex dir-col gap-1">
            <Text variant="h5">Resources</Text>
            <Text variant="body2">
              Documentation the AI can read on demand — core principles, tokens, layout utils,
              mixin props, component patterns, scoped styles, and consumer/composition patterns.
            </Text>
            <CodeBlock language="text">{mcpResourceExample}</CodeBlock>
          </Card>

          <Card variant="subtle" className="d-flex dir-col gap-1">
            <Text variant="h5">Prompts</Text>
            <Text variant="body2">
              Pre-built prompts for common tasks: creating a component, building a page, or
              setting up a new CascadeKit project from scratch.
            </Text>
          </Card>
        </Box>

        <Text variant="h4" mixin={{ mt: 4, mb: 2 }}>Setup</Text>
        <Text>Install the MCP server globally:</Text>
        <CodeBlock language="bash">npm install -g cascade-kit-mcp</CodeBlock>

        <Text mixin={{ mt: 3 }}>Then configure your editor:</Text>
        <CodeBlock language="json" filename="Windsurf">{mcpConfigJSON}</CodeBlock>
        <CodeBlock language="json" filename="Claude Desktop">{mcpConfigClaudeJSON}</CodeBlock>

        <Text variant="h4" mixin={{ mt: 4, mb: 2 }}>Usage</Text>
        <Text>
          Once configured, just ask the AI to build with CascadeKit. The MCP tools and resources
          are available automatically:
        </Text>
        <CodeBlock language="text">{mcpToolExample}</CodeBlock>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>Prompt Guide vs MCP — When to Use Which</Text>
        <Box mixin={{ mt: 3 }}>
          <div className="AIToolsPage--comparison">
            <div className="AIToolsPage--comparison-header">
              <Text variant="h6">&nbsp;</Text>
              <Text variant="h6">PROMPT_GUIDE.md</Text>
              <Text variant="h6">MCP Server</Text>
            </div>
            <div className="AIToolsPage--comparison-row">
              <Text variant="body2"><Strong>Works with</Strong></Text>
              <Text variant="body2">Any AI (copy-paste)</Text>
              <Text variant="body2">MCP-compatible editors</Text>
            </div>
            <div className="AIToolsPage--comparison-row">
              <Text variant="body2"><Strong>Setup</Strong></Text>
              <Text variant="body2">None — already in the package</Text>
              <Text variant="body2">Install + editor config</Text>
            </div>
            <div className="AIToolsPage--comparison-row">
              <Text variant="body2"><Strong>Component generation</Strong></Text>
              <Text variant="body2">AI follows the guide manually</Text>
              <Text variant="body2">Dedicated tool generates files</Text>
            </div>
            <div className="AIToolsPage--comparison-row">
              <Text variant="body2"><Strong>Token/utils lookup</Strong></Text>
              <Text variant="body2">AI reads from the guide</Text>
              <Text variant="body2">Dedicated tools return data</Text>
            </div>
            <div className="AIToolsPage--comparison-row">
              <Text variant="body2"><Strong>Best for</Strong></Text>
              <Text variant="body2">Quick start, any environment</Text>
              <Text variant="body2">Deep integration, ongoing development</Text>
            </div>
          </div>
        </Box>
        <Text variant="body2" muted mixin={{ mt: 2 }}>
          You can use both — the prompt guide for one-off AI chats, and the MCP for your primary editor.
        </Text>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>Next Steps</Text>
        <Box className="d-flex gap-3 f-wrap" mixin={{ mt: 3 }}>
          <Link to="/components">
            <Button variant="secondary">Component Model →</Button>
          </Link>
          <Link to="/example">
            <Button variant="secondary">Live Example →</Button>
          </Link>
        </Box>
      </Section>
    </div>
  );
}
