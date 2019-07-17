import React from 'react';
import {Link} from 'react-router-dom';

const BotonRegistro = ({session}) => {

    //console.log(session.session.obtenerUsuario.rol);
    //obtener el rol
    const {rol} = session.session.obtenerUsuario;
    if (rol !== 'ADMINISTRADOR') return null;
    

    return (
        <Link to="/registro" className= "btn btn-warning ml-md-2 mt-2 mt-md-0">Crear Usuario</Link>
        );
}

export default BotonRegistro;