import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './error';

const Formulario = ({guardarGasto,guardarCrearGasto}) => {

    //config. usestate
    const [ nombregasto, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false); 


    //cuadno se agrega un gasto
    const agregarGasto = e=>{
        e.preventDefault();

        //validar
        
        if (cantidad < 1 || isNaN(cantidad) || nombregasto.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto 

        const gasto = {
            nombregasto,
            cantidad,
            id: shortid.generate()
        }

        // pasar el gasto a el componente principal
        guardarGasto(gasto); 
        guardarCrearGasto(true);

        // resetear formulario
        guardarNombre('');
        guardarCantidad(0);

    }

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error emensaje='Ambos campos son obligatorios o presupuesto incorrecto' /> : null}

            <div className='campo'>
                <label>Nombre gasto</label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    value={nombregasto}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Cantidad gasto</label>
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 300'
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar gasto'
            />
        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;