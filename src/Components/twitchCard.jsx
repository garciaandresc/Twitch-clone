export default function TwitchCard(props) {
  const cardTitle = `${props.title}`;
  const spectators = `${props.spectators}`;

  return (
    <article className="cards">
      <a href="">
        <img className="cardImg" src={`${props.src}`} alt="avatar" />
        <h2 className="cardTitle">{cardTitle}</h2>
        <p className="cardText">{spectators}</p>
      </a>
    </article>
  );
}
