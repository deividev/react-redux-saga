import React from 'react';
import { Link } from 'react-router-dom';

import './MenuComponent.scss';


export default function MenuComponent() {
    
        return (
            <div className="nav">
                <Link className="nav-link" to="/">Store</Link>
                <Link className="nav-link" to="/task">To-do</Link>
                <Link className="nav-link" to="/about">About</Link>
            </div>
        );
}

