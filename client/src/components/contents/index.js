import React from 'react';
import PropTypes from 'prop-types';

import RepoSection from '../repo-section';
import ProfileSection from '../profile-section';
import Tab from '../tab';

const Contents = ({ data }) => (
    <div id="contents">
        {
            <ProfileSection userInfo={data.userInfo} />
        }

        {
            <Tab totalCount={data.totalCount} />
        }

        {
            <RepoSection repos={data.repos} />
        }
    </div>
);

Contents.propTypes = {
    data: PropTypes.object
}

export default Contents