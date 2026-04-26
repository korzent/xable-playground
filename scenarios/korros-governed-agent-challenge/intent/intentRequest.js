// Intent Request Model
// BUG: Does not validate scope or target specificity

function IntentRequest(action, scope, target) {
  this.action = action || '';
  this.scope = scope || '';
  this.target = target || null;
}

IntentRequest.prototype.isBroad = function() {
  // BUG: Always returns false, doesn't check if scope is too broad
  return false;
};

IntentRequest.prototype.hasTarget = function() {
  // BUG: Returns true even when target is null
  return true;
};

IntentRequest.prototype.isSpecific = function() {
  // BUG: Always returns true, doesn't check specificity
  return true;
};

module.exports = IntentRequest;
