import React,{Fragment} from 'react';
import Clientes from './Clientes';

const Panel = () => {
    return (
    <Fragment>
        <h1 className="text-center my-5">Top 10 Cliente que más Compran</h1>
        <Clientes/>
    </Fragment>);
}
//27.2
export default Panel;