const SearchRepo = () => (
    <div className="search-repo">
        <input placeholder="Find a repository..." type="text"  />
        <div className="search-repo-btns">
            <div className="select-btns">
                <button>
                    <span>Type: All</span>
                    <span>&#9662;</span>
                </button>
                <button>
                    <span>Language: All</span>
                    <span>&#9662;</span>
                </button>
            </div>
            <button id="new-repo-btn">
                <span>New</span>
            </button>
        </div>
    </div>
);

export default SearchRepo;