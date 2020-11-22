const Tab = ({ totalCount }) => (
    <div id="tab">
        <button>
            <span>Overview</span>
        </button>
        <button className="active">
            <span className="description">Repositories</span>
            <div className="count">{totalCount}</div>
        </button>
        <button>
            <span>Projects</span>
        </button>
        <button>
            <span>Packages</span>
        </button>
    </div>
);

export default Tab;