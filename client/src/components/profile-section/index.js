const ProfileSection = ({ userInfo }) => (
    <div id="profile-section">
        <div className="profile">
            <div className="avatar">
                <img src={userInfo.avatarUrl} alt="" />
            </div>
            <div id="personal-info">
                <div className="name">{userInfo.name}</div>
                <div className="username">{userInfo.login}</div>
            </div>
        </div>
        <button>
            <span>&#9786;</span>
            <span id="set-status">Set status</span>
        </button>
        <div className="bio">{userInfo.bio}</div>
    </div>
);

export default ProfileSection;