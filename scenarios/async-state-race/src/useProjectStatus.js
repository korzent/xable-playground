function useProjectStatus(projectId) {
  const [status, setStatus] = React.useState('loading');
  const [mounted, setMounted] = React.useState(true);

  React.useEffect(() => {
    setMounted(true);

    // BUG: This callback can update state after component unmounts
    fetchProjectStatus(projectId).then((result) => {
      setStatus(result.status);
    });

    return () => {
      setMounted(false);
    };
  }, [projectId]);

  return status;
}

// Mock async function
function fetchProjectStatus(projectId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'completed' });
    }, 100);
  });
}

module.exports = { useProjectStatus, fetchProjectStatus };
