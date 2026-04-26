// Memory Resolver
// BUG: Accepts stale memory, doesn't validate sufficiency

const UserMemory = require('./userMemory.js');

function MemoryResolver() {}

MemoryResolver.prototype.resolve = function(memory) {
  // BUG: Does not check if memory is stale
  // BUG: Does not check if work history is sufficient
  // BUG: Always returns resolved context even with empty memory
  
  const userMemory = memory instanceof UserMemory ? memory : new UserMemory(memory);
  
  return {
    isFresh: true, // BUG: Always true
    isSufficient: true, // BUG: Always true
    context: userMemory,
    missingInputs: [] // BUG: Never identifies missing inputs
  };
};

MemoryResolver.prototype.checkStaleness = function(memory) {
  // BUG: Always returns fresh, doesn't actually check
  return { isStale: false, lastUpdated: memory.getLastUpdated() };
};

MemoryResolver.prototype.checkSufficiency = function(memory) {
  // BUG: Always returns sufficient, doesn't check work history
  return { isSufficient: true, workHistoryCount: memory.workHistory.length };
};

module.exports = MemoryResolver;
