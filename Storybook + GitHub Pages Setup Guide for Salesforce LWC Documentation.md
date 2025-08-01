# Storybook + GitHub Pages Setup Guide for Salesforce LWC Documentation

## Project Overview

Set up a Storybook environment for documenting Salesforce Lightning Web Components with AI-generated dummy data, hosted on GitHub Pages. This will be completely decoupled from Salesforce environments.

## Project Structure to Create

```
guidetime-component-guide/
├── .storybook/
│   ├── main.js
│   ├── preview.js
│   └── manager.js
├── .github/
│   └── workflows/
│       └── deploy-storybook.yml
├── src/
│   ├── components/           # Simplified LWC representations (HTML/CSS/JS)
│   ├── data/
│   │   ├── generators/       # AI data generation utilities
│   │   └── fixtures/         # Static mock data files
│   ├── styles/
│   │   ├── salesforce-design-system.css
│   │   └── custom-components.css
│   └── utils/
│       ├── aiDataGenerator.js
│       └── mockHelpers.js
├── stories/
│   ├── components/           # Component stories will go here
│   ├── introduction.stories.mdx
│   └── design-tokens.stories.mdx
├── docs/                     # Developer documentation
│   ├── component-api.md
│   └── development-guide.md
├── scripts/
│   └── generateMockData.js
├── package.json
├── README.md
└── .gitignore
```

## Setup Instructions

### 1. Initialize the Project

```bash
# Create new directory and initialize
mkdir guidetime-component-guide
cd guidetime-component-guide
npm init -y

# Install Storybook
npx storybook@latest init --type html

# Install additional dependencies for our use case
npm install --save-dev @storybook/addon-docs @storybook/addon-controls @storybook/addon-actions @storybook/addon-viewport @storybook/addon-a11y gh-pages
```

### 2. Configure Storybook

#### .storybook/main.js

```javascript
module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  staticDirs: ['../src/styles'],
  docs: {
    autodocs: true
  }
};
```

#### .storybook/preview.js

```javascript
import '../src/styles/salesforce-design-system.css';
import '../src/styles/custom-components.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: {
      brandTitle: 'GuideTime Component Library',
      brandUrl: '/',
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: { width: '375px', height: '812px' }
      },
      tablet: {
        name: 'Tablet',
        styles: { width: '768px', height: '1024px' }
      },
      desktop: {
        name: 'Desktop',
        styles: { width: '1440px', height: '900px' }
      }
    }
  }
};
```

### 3. Create GitHub Pages Deployment

#### .github/workflows/deploy-storybook.yml

```yaml
name: Build and Deploy Storybook
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Storybook
        run: npm run build-storybook

      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

### 4. Update package.json Scripts

Add these scripts to your package.json:

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static",
    "generate-data": "node scripts/generateMockData.js"
  }
}
```

### 5. Create Base Files

#### src/utils/aiDataGenerator.js

```javascript
// Utility for generating mock data
// Can be extended to use AI APIs or static generation patterns

export function generateMockData(componentType, options = {}) {
  // Placeholder for AI integration
  // For now, return structured mock data based on component type
  const templates = {
    'banner-tabs': {
      title: 'Sample Banner Title',
      tabs: [
        { id: 1, label: 'Tab One', active: true, icon: '⭐' },
        { id: 2, label: 'Tab Two', active: false, icon: '💰' },
        { id: 3, label: 'Tab Three', active: false, icon: '🛠️' }
      ],
      content: 'Generated content for demonstration purposes.'
    },
    'data-table': {
      headers: ['Name', 'Email', 'Role', 'Status'],
      rows: [
        ['John Doe', 'john@example.com', 'Admin', 'Active'],
        ['Jane Smith', 'jane@example.com', 'User', 'Inactive'],
        ['Bob Johnson', 'bob@example.com', 'Manager', 'Active']
      ]
    }
  };

  return templates[componentType] || { message: 'No template found' };
}

export function generateRealisticContent(type, count = 5) {
  // Generate realistic content for different types
  const generators = {
    names: () => ['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson', 'Eva Brown'],
    emails: () => ['alice@company.com', 'bob@company.com', 'carol@company.com'],
    addresses: () => ['123 Main St, City, ST 12345', '456 Oak Ave, Town, ST 67890'],
    products: () => ['Lightning Component Suite', 'Salesforce Analytics', 'Experience Cloud'],
    descriptions: () => ['Comprehensive solution for modern businesses', 'Advanced analytics platform']
  };

  return generators[type] ? generators[type]().slice(0, count) : [];
}
```

#### stories/introduction.stories.mdx

```mdx
import { Meta } from '@storybook/addon-docs';

<Meta title="Introduction" />

# GuideTime Component Library

Welcome to our comprehensive component documentation and style guide.

## Purpose
This Storybook instance serves as a living documentation system for our GuideTime Lightning Web Components, featuring:

- **Visual Component Library**: See how components look and behave
- **Developer Documentation**: Complete API references and usage examples
- **Design Guidelines**: Consistent styling and interaction patterns
- **Testing Scenarios**: Edge cases and different states
- **AI-Generated Data**: Realistic mock data for all examples

## Getting Started
Browse the components in the sidebar to see:
- Interactive examples with realistic data
- Complete prop/attribute documentation
- Code examples for Salesforce implementation
- Responsive behavior across devices
- Accessibility considerations

## Component Categories
- **Basic Components**: Buttons, inputs, displays
- **Data Components**: Tables, lists, charts
- **Layout Components**: Grids, containers, banners
- **Interactive Components**: Modals, tabs, accordions

This documentation is automatically updated and hosted on GitHub Pages.
```

### 6. Create .gitignore

```
node_modules/
storybook-static/
.env
.DS_Store
*.log
dist/
```

### 7. Initialize Git and GitHub Repository

```bash
git init
git add .
git commit -m "Initial Storybook setup for GuideTime component documentation"

# Create GitHub repository and push
gh repo create guidetime-component-guide --public --push --source=.
```

### 8. Enable GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Your Storybook will be available at: `https://[username].github.io/guidetime-component-guide`

## Next Steps (After Setup)

1. **Create component templates** in `src/components/`
2. **Build story files** in `stories/components/`
3. **Enhance data generation** in `src/data/generators/`
4. **Add comprehensive documentation** in `docs/`

## Development Commands

- `npm run storybook` - Start development server
- `npm run build-storybook` - Build for production
- `npm run deploy-storybook` - Manual deploy to GitHub Pages
- `npm run generate-data` - Generate fresh mock data

The GitHub Action will automatically deploy to GitHub Pages on every push to the main branch.