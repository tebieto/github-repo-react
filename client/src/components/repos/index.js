import React from 'react';
import PropTypes from 'prop-types';

import Repo from "../repo";

const Repos = ({ repos }) => (
    <div id="repos">
        {
         repos && repos.map((repo, key) => (
           <Repo key={key} repo={repo} />
         ))
        }
    </div>
);

Repos.propTypes = {
    repos: PropTypes.array
}

export default Repos;