import React from 'react';

function Dashboard({ github }) {
  // BUG: This crashes when github is null or repositories is missing
  const repoCount = github.repositories.length;
  const repoList = github.repositories.map(repo => (
    <li key={repo.id}>{repo.name}</li>
  ));

  return (
    <div>
      <h2>GitHub Dashboard</h2>
      <p>You have {repoCount} repositories</p>
      <ul>{repoList}</ul>
    </div>
  );
}

export default Dashboard;
