// Frontend Dashboard Component
// BUG: Assumes API always returns complete repo status, crashes on incomplete data

function Dashboard(projectStatus) {
  // BUG: No null checks - assumes projectStatus is always complete
  const { connected, status, hasMemory, agentSuggestion } = projectStatus;

  // BUG: Renders agent suggestion even when prerequisites aren't met
  const showDeployButton = status === 'ready';
  const showAgentSuggestion = agentSuggestion && hasMemory;

  return {
    render: () => {
      if (showDeployButton) {
        return { message: 'Safe to deploy', showDeploy: true };
      }
      if (showAgentSuggestion) {
        return { message: agentSuggestion, showDeploy: false };
      }
      return { message: 'Status: ' + status, showDeploy: false };
    }
  };
}

module.exports = Dashboard;
