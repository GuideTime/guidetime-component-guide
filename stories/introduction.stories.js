export default {
  title: 'Introduction',
  tags: ['autodocs'],
  render: () => {
    return `
      <div style="padding: 2rem; font-family: Arial, sans-serif; max-width: 800px;">
        <h1 style="color: #1b96ff;">GuideTime Component Library</h1>
        <p>Welcome to our comprehensive component documentation and style guide.</p>
        
        <h2>Purpose</h2>
        <p>This Storybook instance serves as a living documentation system for our GuideTime Lightning Web Components, featuring:</p>
        <ul>
          <li><strong>Visual Component Library</strong>: See how components look and behave</li>
          <li><strong>Developer Documentation</strong>: Complete API references and usage examples</li>
          <li><strong>Design Guidelines</strong>: Consistent styling and interaction patterns</li>
          <li><strong>Testing Scenarios</strong>: Edge cases and different states</li>
          <li><strong>AI-Generated Data</strong>: Realistic mock data for all examples</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>Browse the components in the sidebar to see:</p>
        <ul>
          <li>Interactive examples with realistic data</li>
          <li>Complete prop/attribute documentation</li>
          <li>Code examples for Salesforce implementation</li>
          <li>Responsive behavior across devices</li>
          <li>Accessibility considerations</li>
        </ul>
        
        <h2>Component Categories</h2>
        <ul>
          <li><strong>Basic Components</strong>: Buttons, inputs, displays</li>
          <li><strong>Data Components</strong>: Tables, lists, charts</li>
          <li><strong>Layout Components</strong>: Grids, containers, banners</li>
          <li><strong>Interactive Components</strong>: Modals, tabs, accordions</li>
        </ul>
        
        <p>This documentation is automatically updated and hosted on GitHub Pages.</p>
        
        <h2>Apex Documentation</h2>
        <p>Comprehensive Apex class documentation, including server-side controllers and utility classes, is available in our internal Confluence space.</p>
      </div>
    `;
  },
};

export const Overview = {
  args: {},
};