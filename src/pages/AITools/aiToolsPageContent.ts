export const mcpConfigJSON = `// ~/.codeium/windsurf/mcp_config.json
{
  "mcpServers": {
    "cascadekit": {
      "command": "cascade-kit-mcp"
    }
  }
}`;

export const mcpConfigClaudeJSON = `// ~/Library/Application Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "cascadekit": {
      "command": "cascade-kit-mcp"
    }
  }
}`;

export const promptGuideUsage = `// In your AI chat, paste or reference the guide:
"Follow the conventions in PROMPT_GUIDE.md from cascade-kit-tools"

// Or point the AI directly to it:
"Read node_modules/cascade-kit-tools/PROMPT_GUIDE.md and follow its rules"`;

export const mcpToolExample = `// Ask the AI to use MCP tools:
"Create a Card component with variants: default, elevated, outlined"

// The AI calls the create_component tool, which generates:
// - Card.tsx (with classNames, mixin, scopedStyle support)
// - Card.css (with @layer components, variant variables)
// - index.ts`;

export const mcpResourceExample = `// The MCP provides these resources:
cascadekit://docs/core-principles    // The 5 rules
cascadekit://docs/tokens             // All design tokens
cascadekit://docs/layout-utils       // Utility classes reference
cascadekit://docs/mixin-props        // Mixin props reference
cascadekit://docs/component-pattern  // How to build components
cascadekit://docs/scoped-style       // ScopedStyle deep dive
cascadekit://docs/consumer-patterns  // How to compose components`;
