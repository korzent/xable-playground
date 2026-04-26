// API Handler for Project Status
// BUG: Accepts malformed repo status requests without validation

function projectStatusHandler(request) {
  // BUG: No validation - assumes request.body is always well-formed
  const { repoId, status, connected } = request.body;

  // BUG: Proceeds with business logic even when required fields are missing
  if (status === 'ready' && connected) {
    return { status: 200, body: { message: 'Project is ready to deploy' } };
  }

  return { status: 200, body: { message: 'Project status updated' } };
}

module.exports = projectStatusHandler;
