import { useState } from "react";
import "./Agregarjugador.css";

function Agregarjugador({ jugador, manejarJugador, crearJugador, disabled }) {
  return (
    <section>
      <h3>Agrega tus jugadores</h3>
      <input
        name="nombre"
        placeholder="Nombre"
        value={jugador.nombre}
        onInput={(e) => manejarJugador(e)}
      />
      <select
        name="posicion"
        value={jugador.posicion}
        onChange={(e) => manejarJugador(e)}>
        <option value="" disabled>
          Posicion
        </option>
        <option value="delantero">Delantero</option>
        <option value="volante">Volante</option>
        <option value="defensa">Defensa</option>
        <option value="arquero">Arquero</option>
      </select>
      <button
        name="titular"
        onClick={(e) => crearJugador(e)}
        disabled={disabled ? false : true}>
        Titular
      </button>
      <button
        name="suplente"
        onClick={(e) => crearJugador(e)}
        disabled={disabled ? false : true}>
        Suplente
      </button>
    </section>
  );
}

export default Agregarjugador;
