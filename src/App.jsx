import TwitchCard from "./Components/twitchCard";
import TwitchUsers from "./Components/usersCards";

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
          <TwitchUsers
            dot="🔴"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-70x70.png"
            userName="ibai"
            game="League of Legends"
            average="103.5k"
            isActive
          />
          <TwitchUsers
            dot="🔴"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/198c0fe9-cf41-4ef1-ad55-405c1e599f25-profile_image-70x70.png"
            userName="Manu"
            game="Pacman"
            average="77.8k"
            isActive
          />
          <TwitchUsers
            dot="🔴"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-70x70.png"
            userName="Mara"
            game="Fortnite"
            average="69.8k"
          />
          <TwitchUsers
            dot="🔴"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/bc611fee-905a-4ef0-b83e-83cac7f2a2c0-profile_image-70x70.png"
            userName="Sam"
            game="Mario Kart"
            average="68.2.8k"
            isActive
          />
          <TwitchUsers
            dot="🔴"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/bbbd2234-47c3-4650-962c-ff3760013c46-profile_image-70x70.png"
            userName="Andres"
            game="Splinter Cell"
            average="55.8k"
            isActive
          />
          <TwitchUsers
            dot="🔴"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png"
            userName="Damian"
            game="Flappy Bird"
            average="105.8k"
          />
        </aside>

        <section className="twitch-cards">
          <TwitchCard
            title="Conversando"
            spectators="100k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
          />
          <TwitchCard
            title="Only Up!"
            spectators="107.9k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/245018539_IGDB-285x380.jpg"
          />
          <TwitchCard
            title="Fortnite"
            spectators="71.9k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"
          />
          <TwitchCard
            title="LOL"
            spectators="78.9k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg "
          />
          <TwitchCard
            title="Valorant"
            spectators="210.5k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"
          />
          <TwitchCard
            title="Deportes"
            spectators="107.1k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/518203-285x380.jpg"
          />
          <TwitchCard
            title="GTA V"
            spectators="88.6k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"
          />
          <TwitchCard
            title="Minecraft"
            spectators="100k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"
          />
          <TwitchCard
            title="Diablo IV"
            spectators="107.9k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg"
          />
          <TwitchCard
            title="Call Of Duty"
            spectators="256k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg"
          />
          <TwitchCard
            title="Eventos"
            spectators="17.9k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg"
          />
          <TwitchCard
            title="Counter-Strike"
            spectators="88.9k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"
          />
          <TwitchCard
            title="Overwatch 2"
            spectators="78.9k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg"
          />
          <TwitchCard
            title="Teamfight Tactics"
            spectators="70.5k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"
          />
          <TwitchCard
            title="Dead by Daylight"
            spectators="112.1k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg"
          />
          <TwitchCard
            title="ROBLOX"
            spectators="88.6k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/23020_IGDB-285x380.jpg"
          />
          <TwitchCard
            title="Apex Legends"
            spectators="100k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"
          />
          <TwitchCard
            title="XDefiant"
            spectators="107.9k spectators"
            src="https://static-cdn.jtvnw.net/ttv-boxart/780302568-285x380.jpg"
          />
        </section>
      </section>
    </>
  );
}
