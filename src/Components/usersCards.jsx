export default function TwitchUsers(props) {
  const userName = `${props.userName}`;
  const game = `${props.game}`;
  const average = `${props.average}`;
  const imageUser = `${props.src}`;
  const dot = `${props.dot}`;

  return (
    <div className="user-container">
      <img
        className={props.isActive ? "userPic" : "userPic_off"}
        src={`${imageUser}`}
        alt=""
      />
      <div className="user-info-wrapper">
        <div className="user-info">
          <span className="user-name">{userName}</span>
          <p className={props.isActive ? "user-game" : "user-game_off"}>
            {game}
          </p>
        </div>
        <div className="stream-info">
          <span className={props.isActive ? "dot" : "dot_off"}>{dot}</span>
          <p className={props.isActive ? "average" : "average_off"}>
            {average}
          </p>
        </div>
      </div>
    </div>
  );
}
