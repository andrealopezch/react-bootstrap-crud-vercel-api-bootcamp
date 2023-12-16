import { useEffect, useState } from "react";

function Estudiantes() {
  const [dataestudiantes, setDataEstudiantes] = useState([]);

  useEffect(() => {
    fetch("https://demobootcamp-vercel-api-node-postgress.vercel.app/students")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataEstudiantes(data);
      });
  }, []);

  return (
    <>
      Lista de Estudiantes
      <br></br>
      {dataestudiantes &&
        dataestudiantes.map((infoestudiante, index) => (
          <div key={index}>
            {infoestudiante.name}
            {infoestudiante.lastname}
          </div>
        ))}
    </>
  );
}

export default Estudiantes;
