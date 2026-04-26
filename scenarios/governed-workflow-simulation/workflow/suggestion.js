// Suggestion Generation
// BUG: Does not check memory before suggesting, does not cite work examples

function SuggestionGenerator() {
  this.suggestions = {
    'fix': 'Add null checks to handle missing data',
    'refactor': 'Extract common logic into helper function',
    'deploy': 'Deploy to production'
  };
}

SuggestionGenerator.prototype.generate = function(intent, memory) {
  // BUG: Generates suggestion even when memory is empty
  // BUG: Does not cite work examples from memory
  const suggestion = this.suggestions[intent] || 'No suggestion available';
  
  return {
    suggestion,
    citedWork: null, // BUG: Always null, never cites work
    confidence: 0.9
  };
};

module.exports = SuggestionGenerator;
