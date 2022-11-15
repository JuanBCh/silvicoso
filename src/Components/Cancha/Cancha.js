import "./Cancha.css";
import Personaje from "./Personaje/Personaje";

function Cancha({ equipo }) {
  return (
    <div className="cancha">
      <div className="equipo">
        <div className="suplentes">
          {equipo.suplentes.map((s, k) => {
            if (s.nombre !== "") {
              return <Personaje nombre={s.nombre} />;
            }
          })}
        </div>
        <div className="CT">
          {equipo.cuerpotecnico.DT ? (
            <Personaje nombre={equipo.cuerpotecnico.DT} />
          ) : null}
          {equipo.cuerpotecnico.AT ? (
            <Personaje nombre={equipo.cuerpotecnico.AT} />
          ) : null}
          {equipo.cuerpotecnico.CM ? (
            <Personaje nombre={equipo.cuerpotecnico.CM} />
          ) : null}
        </div>
      </div>
      <div className="jugadores">
        <div className="delantero">
          {equipo.jugadores.map((j, k) => {
            if (j.posicion === "delantero") {
              return <Personaje nombre={j.nombre} />; //Aca seria hacer el componente y mandarle "j" que es el jugador
            }
          })}
        </div>
        <div className="volante">
          {equipo.jugadores.map((j, k) => {
            if (j.posicion === "volante") {
              return <Personaje nombre={j.nombre} />;
            }
          })}
        </div>
        <div className="defensa">
          {equipo.jugadores.map((j, k) => {
            if (j.posicion === "defensa") {
              return <Personaje nombre={j.nombre} />;
            }
          })}
        </div>
        <div className="arquero">
          {equipo.jugadores.map((j, k) => {
            if (j.posicion === "arquero") {
              return <Personaje nombre={j.nombre} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Cancha;
