import { useState } from "react";
import "./Cuerpotecnico.css";

function Cuerpotecnico({ cuerpoTecnico, manejarCuerpoTecnico }) {
  return (
    <section>
      <h3>Seleccione su cuerpo tecnico</h3>
      <input
        name="DT"
        placeholder="Nombre de Director Tecnico"
        value={cuerpoTecnico.DT}
        onInput={(e) => manejarCuerpoTecnico(e)}
      />
      <input
        name="AT"
        placeholder="Nombre de Asistente Tecnico"
        value={cuerpoTecnico.AT}
        onInput={(e) => manejarCuerpoTecnico(e)}
      />
      <input
        name="CM"
        placeholder="Nombre de Medico"
        value={cuerpoTecnico.CM}
        onInput={(e) => manejarCuerpoTecnico(e)}
      />
    </section>
  );
}

export default Cuerpotecnico;
