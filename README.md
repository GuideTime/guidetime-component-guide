# GuideTime Component Library Documentation

[Documentation Site](https://guidetime.github.io/guidetime-component-guide)

Welcome to the comprehensive documentation for the GuideTime Salesforce component library. This Storybook-powered documentation site provides visual representations, configuration options, implementation examples, and developer resources for all available components in the GuideTime Lightning Web Component ecosystem.

## 🎯 Purpose

This project serves as the central hub for documenting and showcasing the GuideTime Salesforce component library, featuring:

- **Visual Component Catalog**: Interactive examples of all available Lightning Web Components
- **Configuration Documentation**: Complete API references with all available properties and attributes
- **Implementation Examples**: Copy-paste code examples for Salesforce Lightning development
- **Developer Resources**: Integration guidelines, best practices, and troubleshooting tips
- **Apex Documentation**: Links to comprehensive Apex class documentation available in Confluence

## 🚀 Features

### Component Documentation
- **Interactive Examples**: See components in action with realistic data
- **Property Controls**: Modify component properties in real-time using Storybook controls
- **Responsive Preview**: Test components across different screen sizes (mobile, tablet, desktop)
- **Accessibility Testing**: Built-in a11y addon for accessibility compliance validation

### Developer Resources
- **Implementation Guides**: Step-by-step integration instructions
- **Code Snippets**: Ready-to-use Lightning Web Component templates
- **Design System Integration**: Adherence to Salesforce Lightning Design System guidelines
- **Mock Data Generation**: AI-powered realistic data for testing and demonstration

## 📚 Documentation Structure

### Component Categories
- **Basic Components**: Buttons, inputs, displays, and fundamental UI elements
- **Data Components**: Tables, lists, charts, and data visualization tools
- **Layout Components**: Grids, containers, banners, and structural elements
- **Interactive Components**: Modals, tabs, accordions, and user interaction elements

### Additional Resources
- **API Documentation**: Complete reference for all component properties and methods
- **Apex Integration**: Server-side controller documentation (see Confluence)
- **Testing Scenarios**: Edge cases, error states, and validation examples
- **Performance Guidelines**: Best practices for optimal component performance

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Getting Started
```bash
# Clone the repository
git clone [repository-url]
cd guidetime-component-guide

# Install dependencies
npm install

# Start development server
npm run storybook
```

### Available Scripts
- `npm run storybook` - Start local development server on port 6006
- `npm run build-storybook` - Build static files for production
- `npm run deploy-storybook` - Deploy to GitHub Pages
- `npm run generate-data` - Generate fresh mock data for components

## 🌐 Deployment

This documentation is automatically deployed to GitHub Pages via GitHub Actions on every push to the main branch. The live documentation is available at: `https://guidetime.github.io/guidetime-component-guide`

### Manual Deployment
```bash
npm run deploy-storybook
```

## 📖 Additional Documentation

### Apex Documentation
Comprehensive Apex class documentation, including server-side controllers and utility classes, is available in our internal Confluence space. This includes:
- Controller method signatures and parameters
- Database operation examples
- Error handling patterns
- Performance optimization guidelines

### Component Integration
Each component story includes:
- **Usage Examples**: How to implement in Lightning pages
- **Property Reference**: All available attributes and their types
- **Event Handling**: Custom events and their payloads
- **Styling Guidelines**: CSS customization options within SLDS constraints

## 🤝 Contributing

When adding new components or updating existing documentation:

1. Create component templates in `src/components/`
2. Build corresponding stories in `stories/components/`
3. Update mock data generators in `src/data/generators/`
4. Add comprehensive documentation in story MDX files

## 📁 Project Structure

```
guidetime-component-guide/
├── .storybook/           # Storybook configuration
├── .github/workflows/    # GitHub Actions for deployment
├── src/
│   ├── components/       # Component implementations
│   ├── data/generators/  # Mock data generation utilities
│   ├── styles/          # SLDS and custom styling
│   └── utils/           # Helper utilities
├── stories/             # Component stories and documentation
├── docs/               # Additional developer documentation
└── scripts/            # Build and utility scripts
```

## 🔗 Related Resources

- [Salesforce Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc)
- [Lightning Design System](https://www.lightningdesignsystem.com/)
- [GuideTime Apex Documentation](https://guidetime.atlassian.net/wiki/spaces/GT/overview) - Internal Confluence space
- [Storybook Documentation](https://storybook.js.org/docs)

---

**Built with ❤️ for the GuideTime development team**
