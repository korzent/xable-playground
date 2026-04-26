// Intent Handling
// BUG: Does not validate intent before processing

function IntentProcessor() {
  this.intents = ['fix', 'refactor', 'deploy'];
}

IntentProcessor.prototype.validate = function(intent) {
  // BUG: No validation - accepts any intent
  return true;
};

IntentProcessor.prototype.process = function(intent, context) {
  // BUG: Processes intent even when context is missing
  if (!this.validate(intent)) {
    return { status: 'INVALID', error: 'Invalid intent' };
  }
  return { status: 'VALID', intent, context };
};

module.exports = IntentProcessor;
