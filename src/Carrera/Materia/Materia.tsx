import React from 'react';
import './Materia.css';

type MateriaProps = {
  nombre: string;
  hs: number;
  año: number;
  equivalente: number;
  cuentaMaterias: (tildada: boolean) => void;
};

const Materia = ({ nombre, hs, cuentaMaterias, equivalente }: MateriaProps)  => {
  const modificaEstado = (e: React.ChangeEvent<HTMLInputElement>) => {
    cuentaMaterias(e.target.checked);
  }
  return (
    <li className='registro' key={equivalente}>
        <input type="checkbox" name="done" id="done" onChange={modificaEstado} />
        <p>{nombre}</p>
        <p>{hs}</p>
    </li>
  )
}

export default Materia