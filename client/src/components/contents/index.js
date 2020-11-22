import RepoSection from '../repo-section';
import ProfileSection from '../profile-section';
import Tab from '../Tab';

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

export default Contents