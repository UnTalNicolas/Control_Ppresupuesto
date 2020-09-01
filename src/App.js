import React, {useState, useEffect} from 'react';
import Pregutna from './Components/pregunta'
import Formulario from './Components/Formulario'
import Listado from './Components/listado'
import Control from './Components/controlPresupuesto'

function App() {
  //definir el state
  const [presupuesto, guardarPresupeusto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [ gasto, guardarGasto] = useState({});
  const [ creargasto, guardarCrearGasto] = useState(false);

  //useeffect que actualiza el restante

  useEffect( ()=>{
    if(creargasto){
      guardarGastos([
        ...gastos,
        gasto
      ])

      //resta presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante)
      //resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante])


  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
        {mostarPregunta ? (
          <Pregutna
          guardarPresupeusto={guardarPresupeusto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}
           />
        ) : (
          <div className='row'>
             <div className='one-half column'>
                <Formulario 
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
             </div>
             <div className='one-half column'>
                <Listado 
                  gastos={gastos}
                />
                <Control 
                  presupuesto={presupuesto}
                  restante={restante}
                />
             </div>
           </div>
           ) }
        </div>
      </header>
    </div>
  );
}

export default App;
