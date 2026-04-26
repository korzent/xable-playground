// Intent Validator
// BUG: Accepts broad intent without target, doesn't validate scope

const IntentRequest = require('./intentRequest.js');

function IntentValidator() {
  this.broadScopes = ['improve my project', 'fix everything', 'optimize all'];
}

IntentValidator.prototype.validate = function(intent) {
  // BUG: Does not check if intent is too broad
  // BUG: Does not check if target is missing
  // BUG: Always returns valid
  
  const request = intent instanceof IntentRequest ? intent : new IntentRequest(intent);
  
  return {
    isValid: true, // BUG: Always true
    isBroad: false, // BUG: Always false
    hasTarget: true, // BUG: Always true
    missingTarget: null // BUG: Never identifies missing target
  };
};

IntentValidator.prototype.checkScope = function(intent) {
  // BUG: Does not actually check scope breadth
  return { isBroad: false, scope: intent.scope };
};

IntentValidator.prototype.checkTarget = function(intent) {
  // BUG: Does not check if target is present or specific
  return { hasTarget: true, target: intent.target };
};

module.exports = IntentValidator;
