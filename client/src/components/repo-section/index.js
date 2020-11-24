import React from 'react';
import PropTypes from 'prop-types';

import Repos from '../repos';
import SearchRepo from '../search-repo';

export const RepoSection = ({ repos }) => (
    <div id="repo-section">
        <SearchRepo />
        <Repos repos={repos} />
    </div>
);

RepoSection.propTypes = {
    repos: PropTypes.array
}

export default RepoSection;