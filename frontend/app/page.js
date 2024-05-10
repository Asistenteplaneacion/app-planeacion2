'use client'


import React, { useEffect, useState } from "react";
import styles from '../styles/home.css'
import Swal from 'sweetalert2';

export default function Home() {
  const [objetivo, setObjetivo] = useState([]);
  const [politica, setPolitica] = useState([]);
  const [programa, setPrograma] = useState([]);
  const [proyecto, setProyecto] = useState([]);
  const [componente, setComponente] = useState([]);
  const [responsableComponente, setResponsableComponente] = useState([]);
  const [macroactividades, setMacroactividades] = useState([]);




  const [selectedObjetivo, setSelectedObjetivo] = useState(""); 
  const [selectedPolitica, setSelectedPolitica] = useState("");
  const [selectedPrograma, setselectedPrograma] = useState("");
  const [selectedProyecto, setselectedProyecto] = useState("");
  const [selectedComponente, setselectedComponente] = useState("");
  const [selectedResponsableComponente, setselectedResponsableComponente] = useState("");
  const [selectedMacroactividades, setselectedMacroactividades] = useState({
    campo1: "",
    campo2: "",
    campo3: ""
  });





  const [selectedData, setSelectedData] = useState([]);


  const baseUrl = 'http://localhost:5000/objetivo';
  const basePolitica = 'http://localhost:5000/politica';
  const basePrograma = 'http://localhost:5000/programa';
  const baseProyecto = 'http://localhost:5000/proyecto';
  const baseComponente = 'http://localhost:5000/componente';
  const baseResponsableComponente = 'http://localhost:5000/responsableComponente';
  const baseMacroactividades = 'http://localhost:5000/macroactividades';




  const saveUrl = 'http://localhost:5000/saveData';


  const fetchObjetivos = () => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => {
        setObjetivo(res);
      });
  };

  const fetchPolitica = () => {
    fetch(basePolitica)
      .then((res) => res.json())
      .then((res) => {
        setPolitica(res);
      });
  };

  const fetchPrograma = () => {
    fetch(basePrograma)
      .then((res) => res.json())
      .then((res) => {
        setPrograma(res);
      });
  };

  const fetchProyecto = () => {
    fetch(baseProyecto)
      .then((res) => res.json())
      .then((res) => {
        setProyecto(res);
      });
  };

  const fetchComponente = () => {
    fetch(baseComponente)
      .then((res) => res.json())
      .then((res) => {
        setComponente(res);
      });
  };

  const fetchResponsableComponente = () => {
    fetch(baseResponsableComponente)
      .then((res) => res.json())
      .then((res) => {
        setResponsableComponente(res);
      });
  };

  const fetchMacroactividades = () => {
    fetch(baseMacroactividades)
      .then((res) => res.json())
      .then((res) => {
        setMacroactividades(res);
      });
  };

  const fetchSavedData = () => {
    fetch(saveUrl)
      .then((res) => res.json())
      .then((res) => {
        setSelectedData(res);
      });
  };

  useEffect(() => {
    fetchObjetivos();
    fetchPolitica();
    fetchPrograma();
    fetchProyecto();
    fetchComponente();
    fetchResponsableComponente();
    fetchMacroactividades();
    
    fetchSavedData(); // Cargar los datos guardados al montar el componente
  }, []); 

  const handleObjetivoChange = (e) => {
    setSelectedObjetivo(e.target.value);
  };

  const handlePoliticaChange = (e) => {
    setSelectedPolitica(e.target.value);
  };

  const handleProgramaChange = (e) => {
    setselectedPrograma(e.target.value);
  };

  const handleProyectoChange = (e) => {
    setselectedProyecto(e.target.value);
  };

  const handleComponenteChange = (e) => {
    setselectedComponente(e.target.value);
  };

  const handleResponsableComponenteChange = (e) => {
    setselectedResponsableComponente(e.target.value);
  };

  const handleMacroactividadesChange = (e) => {
    const { name, value } = e.target;
    setselectedMacroactividades(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  

  const handleSave = () => {
    const newData = { 
      objetivo: selectedObjetivo,
      politica: selectedPolitica,
      programa: selectedPrograma,
      proyecto: selectedProyecto,
      componente: selectedComponente,
      responsableComponente: selectedResponsableComponente,
      macroactividades: [{ ...selectedMacroactividades }]
    };
    fetch(saveUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data saved:', data);
      setSelectedData([...selectedData, newData]);
      
      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Datos guardados correctamente!',
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error => {
      console.error('Error saving data:', error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: 'error',
        title: 'Error al guardar los datos',
        text: 'Ha ocurrido un error al intentar guardar los datos. Por favor, inténtalo de nuevo.',
        confirmButtonText: 'Aceptar'
      });
    });
    
    setSelectedObjetivo("");
    setSelectedPolitica("");
    setselectedPrograma("");
    setselectedProyecto("");
    setselectedComponente("");
    setselectedResponsableComponente("");
    setselectedMacroactividades({
      campo1: "",
      campo2: "",
      campo3: ""
    });
  };
  

  return (
    <>
      <div className="select-container">
        <h3>Selecciona un objetivo estratégico:</h3>
        <select className="custom-select" value={selectedObjetivo} onChange={handleObjetivoChange}>
          <option value="">Seleccionar objetivo</option>
          {objetivo.map((obj, index) => (
            <option key={index} value={obj.nombre}>{obj.nombre}</option>
          ))}
        </select>
      </div>

      <div className="select-container">
        <h3>Selecciona una política:</h3>
        <select className="custom-select" value={selectedPolitica} onChange={handlePoliticaChange}>
          <option value="">Seleccionar política</option>
          {politica.map((pol, index) => (
            <option key={index} value={pol.nombre}>{pol.nombre}</option>
          ))}
        </select>
      </div>

      <div className="select-container">
        <h3>Selecciona un programa:</h3>
        <select className="custom-select" value={selectedPrograma} onChange={handleProgramaChange}>
          <option value="">Seleccionar programa</option>
          {programa.map((pro, index) => (
            <option key={index} value={pro.nombre}>{pro.nombre}</option>
          ))}
        </select>
      </div>

      <div className="select-container">
        <h3>Selecciona un proyecto:</h3>
        <select className="custom-select" value={selectedProyecto} onChange={handleProyectoChange}>
          <option value="">Seleccionar proyecto</option>
          {proyecto.map((proyec, index) => (
            <option key={index} value={proyec.nombre}>{proyec.nombre}</option>
          ))}
        </select>
      </div>

      <div className="select-container">
        <h3>Selecciona un componente:</h3>
        <select className="custom-select" value={selectedComponente} onChange={handleComponenteChange}>
          <option value="">Seleccionar componente</option>
          {componente.map((componen, index) => (
            <option key={index} value={componen.codigoComponente}>{componen.codigoComponente}</option>
          ))}
        </select>
      </div>

      <div className="select-container">
        <h3>Selecciona un areá Responsable:</h3>
        <select className="custom-select" value={selectedResponsableComponente} onChange={handleResponsableComponenteChange}>
          <option value="">Seleccionar Areá</option>
          {responsableComponente.map((ResComponen, index) => (
            <option key={index} value={ResComponen.area}>{ResComponen.area}</option>
          ))}
        </select>
      </div>

      <div className="macroactividades-container">
        <h3>Macroactividades:</h3>
        <input className="macro-input" type="text" name="campo1" value={selectedMacroactividades.campo1} onChange={handleMacroactividadesChange} placeholder="Campo 1" />
        <input className="macro-input" type="text" name="campo2" value={selectedMacroactividades.campo2} onChange={handleMacroactividadesChange} placeholder="Campo 2" />
        <input className="macro-input" type="text" name="campo3" value={selectedMacroactividades.campo3} onChange={handleMacroactividadesChange} placeholder="Campo 3" />
      </div>



      <button className="save-button"  onClick={handleSave}>Guardar selección</button>

      <h3>Selecciones guardadas:</h3>
      <table className="selection-table">
        <thead>
          <tr>
          <th>Objetivo Estratégico</th>
          <th>Política</th>
          <th>Programa</th>
          <th>Proyecto</th>
          <th>Componente</th>
          <th>Responsable Componente</th>
          <th>Macroactividad Campo 1</th>
          <th>Macroactividad Campo 2</th>
          <th>Macroactividad Campo 3</th> 
          </tr>
        </thead>
        <tbody>
        {selectedData.map((data, index) => (
  <tr key={index}>
    <td>{data.objetivo}</td>
    <td>{data.politica}</td>
    <td>{data.programa}</td>
    <td>{data.proyecto}</td>
    <td>{data.componente}</td>
    <td>{data.responsableComponente}</td>
    {/* Asegúrate de que data.macroactividades sea un array */}
    {Array.isArray(data.macroactividades) && data.macroactividades.map((macroact, macroIndex) => (
      <React.Fragment key={macroIndex}>
        <td>{macroact.campo1}</td>
        <td>{macroact.campo2}</td>
        <td>{macroact.campo3}</td>
      </React.Fragment>
    ))}
  </tr>
))}
        </tbody>
      </table>
    </>
  );
}
