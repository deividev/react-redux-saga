import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../store/provider'

import './MenuComponent.scss';


export default function MenuComponent() {

    const context = useContext(AppContext);

  

        return (
            <div className="nav">
                <Link className="nav-link" to="/store">Store</Link>
                <Link className="nav-link" to="/todo" >To-do</Link>
                <Link className="nav-link" to="/about">About</Link>
                {context && <span>{context.email}</span>}
            </div>
        );
}

