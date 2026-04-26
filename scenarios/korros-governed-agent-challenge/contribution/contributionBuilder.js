// Contribution Builder
// BUG: Creates contributions without reason or source reference

function ContributionBuilder() {}

ContributionBuilder.prototype.build = function(proposal, memory) {
  // BUG: Does not require reason
  // BUG: Does not require source reference
  // BUG: Creates contribution even with insufficient context
  
  return {
    id: 'contrib-' + Date.now(),
    proposal,
    reason: null, // BUG: Always null
    sourceReference: null, // BUG: Always null
    createdAt: new Date().toISOString()
  };
};

ContributionBuilder.prototype.validate = function(contribution) {
  // BUG: Always returns valid, doesn't check reason or source
  return {
    isValid: true, // BUG: Always true
    missingFields: [] // BUG: Never identifies missing fields
  };
};

ContributionBuilder.prototype.checkReason = function(contribution) {
  // BUG: Does not check if reason is present or meaningful
  return { hasReason: true, reason: contribution.reason };
};

ContributionBuilder.prototype.checkSourceReference = function(contribution) {
  // BUG: Does not check if source reference is present
  return { hasSource: true, source: contribution.sourceReference };
};

module.exports = ContributionBuilder;
