import Grafica from '../Grafico/Grafica';
import { useEffect, useState } from 'react';
import './Carrera.css';
import Materia from './Materia/Materia';

type Programa = {
  carrera: string;
  materias: MateriaType[];
};
type MateriaType = {
  cod_materia: number;
  nom_materia: string;
  hs_materia: number;
  año: number;
  equivalente: number;
};


const Carrera = ({programa}:Programa) => {
  
  const [materiasSeleccionadas, setMateriasSeleccionadas] = useState<number>(0);

  const cuentaMaterias = (tildada: boolean) => {
    setMateriasSeleccionadas((prev) => tildada ? prev+1:prev-1)
  }

  const mostrarAvance = (av: number,tot: number): number => {
    return (av/tot*100).toFixed(2);
  }



  return (
    <div className='carrera'>
      {programa ? (
        <>
          <h2>{programa.carrera}</h2>
          <div>
            <article className='grafica'>
              
                <Grafica val={mostrarAvance(materiasSeleccionadas,programa.materias.length) || 0} />
              
            </article>
            <article className='carrera-bases'>
              <p>Grado de Avance</p>
              <p>{mostrarAvance(materiasSeleccionadas,programa.materias.length)}%</p>
              <p>Materias Aprobadas</p>
              <p>{materiasSeleccionadas}</p>
              <p>Total Materias</p>
              <p>{programa.materias.length}</p>
            </article>
          </div>

          <div className="materias">
            {programa.materias.map((materia) => (
              <Materia
                key={materia.cod_materia}
                nombre={materia.nom_materia}
                hs={materia.hs_materia}
                año={materia.año}
                equivalente={materia.equivalente}
                cuentaMaterias={cuentaMaterias}
              />
            ))}
          </div>
        </>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};

export default Carrera;
