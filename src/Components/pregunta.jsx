import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './error'

const Pregunta = ({ guardarPresupeusto, guardarRestante,actualizarPregunta }) => {

    //Definir state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    //funciopn de leer presupuesto

    const definirPresupuesto = e =>{
        guardarCantidad( parseInt(e.target.value, 10))
    }

    //submit para definir el presupuesto 
    const guardarPresupuesto = e =>{
        e.preventDefault();
        
        // validar
        if (cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        //si pasa la validacion
        guardarError(false);
        guardarPresupeusto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
        


    }


    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error? <Error emensaje='El presupuesto es incorrecto' /> :null}
            <form
                onSubmit={guardarPresupuesto}
            >
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                />

                <input 
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir Presupuesto'
                />
            </form>
        </Fragment>
    );
}
 
Pregunta.propTypes = {
    guardarPresupeusto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}


export default Pregunta;