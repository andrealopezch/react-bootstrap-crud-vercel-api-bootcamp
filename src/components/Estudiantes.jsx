import { useEffect, useState } from "react";

function Estudiantes() {
  const [dataestudiantes, setDataEstudiantes] = useState([]);
  const [nuevoEstudiante, setNuevoEstudiante] = useState({
    id: "",
    name: "",
    lastname: "",
    notes: "",
  });
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("https://demobootcamp-vercel-api-node-postgress.vercel.app/students")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataEstudiantes(data);
      });
  }, [control]);

  const enviarDatos = (event) => {
    event.preventDefault();
    saveStudent();
    setNuevoEstudiante({
      id: "",
      name: "",
      lastname: "",
      notes: "",
    });
  };

  const saveStudent = () => {
    console.log(nuevoEstudiante);

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
      .then((data) => {
        setControl(!control);
      });
  };

  const inputHandled = (event) => {
    setNuevoEstudiante({
      ...nuevoEstudiante,
      [event.target.name]: event.target.value,
    });
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
      <form onSubmit={enviarDatos}>
        <input
          type="text"
          name="id"
          onChange={inputHandled}
          value={nuevoEstudiante.id}
        />
        <input
          type="text"
          name="name"
          onChange={inputHandled}
          value={nuevoEstudiante.name}
        />
        <input
          type="text"
          name="lastname"
          onChange={inputHandled}
          value={nuevoEstudiante.lastname}
        />
        <input
          type="text"
          name="notes"
          onChange={inputHandled}
          value={nuevoEstudiante.notes}
        />

        <button type="submit">Guardar</button>
      </form>
    </>
  );
}

export default Estudiantes;
