// Safety Simulator
// BUG: Returns SAFE when project state is missing or inconsistent

function SafetySimulator() {
  this.riskThreshold = 0.7;
}

SafetySimulator.prototype.simulate = function(proposal, projectState) {
  // BUG: Does not check if project state is missing
  // BUG: Does not check for inconsistencies
  // BUG: Always returns SAFE for valid-looking proposals
  
  if (!projectState) {
    // BUG: Should return BLOCKED when project state is missing
    return { status: 'SAFE', risk: 0.3, reason: 'No issues detected' };
  }
  
  const risk = this.calculateRisk(proposal, projectState);
  
  if (risk > this.riskThreshold) {
    return { status: 'BLOCKED', risk, reason: 'Risk too high' };
  }
  
  return { status: 'SAFE', risk, reason: 'No issues detected' };
};

SafetySimulator.prototype.calculateRisk = function(proposal, projectState) {
  // BUG: Simplified calculation that doesn't check state consistency
  if (!projectState || !projectState.connected) {
    // BUG: Should return high risk for missing/inconsistent state
    return 0.3;
  }
  return 0.2;
};

SafetySimulator.prototype.checkProjectState = function(projectState) {
  // BUG: Does not actually check state consistency
  return {
    isPresent: true, // BUG: Always true even when null
    isConsistent: true, // BUG: Always true
    isVerifiable: true, // BUG: Always true
    missingFields: [] // BUG: Never identifies missing fields
  };
};

module.exports = SafetySimulator;
