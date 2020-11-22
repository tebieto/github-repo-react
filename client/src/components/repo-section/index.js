import Repos from '../repos';
import SearchRepo from '../search-repo';

export const RepoSection = ({ repos }) => (
    <div id="repo-section">
        <SearchRepo />
        <Repos repos={repos} />
    </div>
);

export default RepoSection;