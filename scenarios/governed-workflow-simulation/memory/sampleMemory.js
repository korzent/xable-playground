// Sample Memory for Demo
// Uses simplified, public-safe format

const sampleMemory = {
  profile: {
    userId: 'demo-user',
    displayName: 'Demo Builder'
  },
  workHistory: [
    {
      id: 'work-001',
      title: 'Fixed dashboard empty state',
      type: 'fix',
      skills: ['react', 'defensive-programming']
    },
    {
      id: 'work-002',
      title: 'Added request validation',
      type: 'security',
      skills: ['api-design', 'validation']
    },
    {
      id: 'work-003',
      title: 'Cleaned up async lifecycle',
      type: 'fix',
      skills: ['react-hooks', 'async']
    }
  ]
};

module.exports = sampleMemory;
