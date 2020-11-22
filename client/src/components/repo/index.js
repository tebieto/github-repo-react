const Repo = ({ repo }) => (
    <div className="repo">
        <div className="repo-left">
            <div className="repo-name">
                <span>{repo.name}</span>
            </div>
            <div className="repo-other-info">
                {
                    repo.lang ? (
                    <div className="lang">
                        <div className="lang-color" style={{backgroundColor:repo.lang.color}}></div>
                        <span>{repo.lang.name}</span>
                    </div>
                    )
                    : null
                }
                <div className="date">{repo.updatedAt}</div>
            </div>
        </div>
        
        <div className="flex"></div>

        <div className="star-btn">
            <button>
                <span>&#x2606;</span>
                <span>Star</span>
            </button>
        </div>
    </div>
);

export default Repo;