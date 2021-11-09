import React from 'react';
import { Link } from 'react-router-dom';



import './MenuComponent.scss';


export default function MenuComponent() {

        return (
            <div className="nav">
                <Link className="nav-link" to="/store">Store</Link>
                <Link className="nav-link" to="/todo">To-do</Link>
                <Link className="nav-link" to="/about">About</Link>
            </div>
        );
}

