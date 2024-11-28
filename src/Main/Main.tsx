import Carrera from '../Carrera/Carrera';
import './Main.css';
import { useEffect, useState } from 'react';

const Main = () => {

  const pathLic: string = '/consumirDatos/lic.json';
  const pathTup: string = '/consumirDatos/tup.json';

  const [programaLic, setProgramaLic] = useState<Programa | null>(null);
  const [programaTup, setProgramaTup] = useState<Programa | null>(null);
  type MateriaType = {
    cod_materia: number;
    nom_materia: string;
    hs_materia: number;
    año: number;
    equivalente: number;
  };

  type Programa = {
    carrera: string;
    materias: MateriaType[];
  };

  useEffect(() => {
    const traerInfo = async (path: string) => {
      try {
        const response = await fetch(path);
        if (!response.ok) throw new Error('Error al cargar los datos');
        const data: MateriaType[] = await response.json();

        const programaAgrupado: Programa = {
          carrera: data[0]?.carrera || 'Sin Nombre',
          materias: data,
        };
        if(path.includes('lic')){
          setProgramaLic(programaAgrupado);
        }else{
          setProgramaTup(programaAgrupado)
        }
        
        
      } catch (error) {
        console.error('Error al traer la información:', error);
      }
    };
    traerInfo(pathLic);
    traerInfo(pathTup);
  }, []);

  

  return (
    <main>

        <Carrera programa={programaLic}/>
        <Carrera programa={programaTup} />
    </main>

  )
}

export default Main