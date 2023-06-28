import TwitchCard from "./Components/twitchCard";
import TwitchUsers from "./Components/usersCards";
import { Games } from "./data/gameInfo";
import { Users } from "./data/usersInfo";

export default function App() {
  return (
    <>
      <p>Twitch Directory</p>
      <section className="Cards-main">
        <aside className="aside">
          <div className="Users-div">
            <h3 className="channels">Canales recomendados</h3>
            <span className="arrow">⬅️</span>
          </div>
          {Users.map((Users, index) => {
            return (
              <TwitchUsers
                key={index}
                dot={Users.dot}
                src={Users.src}
                userName={Users.userName}
                game={Users.game}
                average={Users.average}
                isActive={Users.isActive}
              />
            );
          })}
        </aside>

        <section className="twitch-cards">
          {Games.map((Games, index) => {
            return (
              <TwitchCard
                key={index}
                title={Games.title}
                spectators={Games.spectators}
                src={Games.src}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}
