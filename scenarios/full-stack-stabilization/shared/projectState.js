// Shared Project State Model
// BUG: Allows impossible state combinations

function ProjectState(initialState) {
  this.state = initialState || {};
}

ProjectState.prototype.update = function(updates) {
  // BUG: No validation - allows impossible state combinations
  Object.assign(this.state, updates);
  return this.state;
};

ProjectState.prototype.canDeploy = function() {
  // BUG: Doesn't check for impossible combinations
  const { connected, status, hasMemory } = this.state;
  return status === 'ready' && connected;
};

ProjectState.prototype.showAgentSuggestion = function() {
  // BUG: Shows suggestion even when prerequisites aren't met
  const { hasMemory, agentSuggestion } = this.state;
  return hasMemory && agentSuggestion;
};

ProjectState.prototype.validate = function() {
  // BUG: No validation function - impossible states are allowed
  return true;
};

module.exports = ProjectState;
