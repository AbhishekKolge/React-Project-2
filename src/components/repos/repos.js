import React from 'react';
import RepoItem from './repoItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return repos.map((repo, index) => <RepoItem repo={repo} key={index} />);
};

Repos.protoTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
