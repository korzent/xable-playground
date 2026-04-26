// Simulation Logic
// BUG: Says SAFE even when context is missing

function Simulator() {
  this.riskThreshold = 0.7;
}

Simulator.prototype.simulate = function(proposal, context) {
  // BUG: Returns SAFE even when context is missing
  // BUG: Does not check if required context exists
  
  if (!context || !context.memory) {
    // BUG: Should return BLOCKED when memory is missing
    return { status: 'SAFE', risk: 0.5 };
  }
  
  const risk = this.calculateRisk(proposal, context);
  
  if (risk > this.riskThreshold) {
    return { status: 'BLOCKED', risk };
  }
  
  return { status: 'SAFE', risk };
};

Simulator.prototype.calculateRisk = function(proposal, context) {
  // BUG: Simplified risk calculation that doesn't check context properly
  return 0.3;
};

module.exports = Simulator;
