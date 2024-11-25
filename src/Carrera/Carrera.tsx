import Grafica from '../Grafico/Grafica';
import './Carrera.css';
import Materia from './Materia/Materia';

const Carrera = () => {
  return (
    <div className='carrera'>
        <h2>Variable: Nombre Carrera</h2>
        <div>
            <article>
                <div>
                    <Grafica />
                </div>
            </article>
            <article className='carrera-bases'>
                <p>Grado de Avance</p>
                <p>30%</p>
                <p>Materias Aprobadas</p>
                <p>5</p>
                <p>Total Materias</p>
                <p>20</p>
            </article>            
        </div>

        <Materia />
        <Materia />
    </div>
  )
}

export default Carrera