import '../src/styles/salesforce-lightning-design-system.min.css';
import '../src/styles/custom-components.css';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
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
  },
};

export default preview;