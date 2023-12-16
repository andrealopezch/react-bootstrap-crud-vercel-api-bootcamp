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
      <h2>Lista de Estudiantes</h2>
      <br></br>
      {dataestudiantes &&
        dataestudiantes.map((infoestudiantes, index) => (
          <div key={index}>
            {infoestudiantes.name}
            {infoestudiantes.lastname}
          </div>
        ))}
    </>
  );
}

export default Estudiantes;
