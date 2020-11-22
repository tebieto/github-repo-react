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

export default Repos;