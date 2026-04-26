// User Memory Model
// BUG: Does not track freshness or staleness

function UserMemory(profile, workHistory, metadata) {
  this.profile = profile || {};
  this.workHistory = workHistory || [];
  this.metadata = metadata || {};
}

UserMemory.prototype.isStale = function() {
  // BUG: Always returns false, never checks staleness
  return false;
};

UserMemory.prototype.hasSufficientWorkHistory = function() {
  // BUG: Always returns true, doesn't check if work history is sufficient
  return true;
};

UserMemory.prototype.getLastUpdated = function() {
  // BUG: Returns a fixed date, not actual last updated time
  return new Date('2024-01-01').toISOString();
};

module.exports = UserMemory;
