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