import React from 'react';
import PropTypes from 'prop-types';

const Error = ({emensaje}) => ( 
    <p className='alert alert-danger error'>{emensaje}</p>
 );

 Error.propTypes = {
    emensaje: PropTypes.string.isRequired
}
 
export default Error;