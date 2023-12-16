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

  const saveStudent = () => {
    const nuevoEstudiante = {
      id: 108,
      name: "Andrea",
      lastname: "Lopez",
      notes: "bien",
    };

    fetch(
      "https://demobootcamp-vercel-api-node-postgress.vercel.app/students",
      {
        method: "POST",
        body: JSON.stringify(nuevoEstudiante),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {});
  };

  return (
    <>
      <h2>Lista de Estudiantes</h2>
      <br></br>
      {dataestudiantes &&
        dataestudiantes.map((infoestudiantes, index) => (
          <div key={index}>
            {infoestudiantes.name}
            &nbsp;
            {infoestudiantes.lastname}
          </div>
        ))}
      <button onClick={saveStudent}>Guardar</button>
    </>
  );
}

export default Estudiantes;
