function handler(request) {
  // BUG: This assumes request.body.intent and request.body.action always exist
  const { intent, action } = request.body;
  
  if (intent === 'create') {
    if (action === 'project') {
      return { status: 200, body: { message: 'Project created' } };
    }
    if (action === 'task') {
      return { status: 200, body: { message: 'Task created' } };
    }
  }
  
  if (intent === 'delete') {
    if (action === 'project') {
      return { status: 200, body: { message: 'Project deleted' } };
    }
  }
  
  return { status: 200, body: { message: 'Unknown request' } };
}

module.exports = handler;
