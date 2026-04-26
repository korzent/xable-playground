// Contribution Record
// BUG: Created without clear reason, no explanation of what changed

function ContributionRecord() {
  this.records = [];
}

ContributionRecord.prototype.create = function(proposal, simulationResult) {
  // BUG: Creates contribution even when simulation is unsafe
  // BUG: No human-readable reason included
  const record = {
    id: 'contrib-' + Date.now(),
    proposal,
    simulationResult,
    reason: null, // BUG: Always null
    createdAt: new Date().toISOString()
  };
  
  this.records.push(record);
  return record;
};

module.exports = ContributionRecord;
