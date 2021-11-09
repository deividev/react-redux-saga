import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import './CardProductComponent.scss'

const CardProductComponent = ({ products }) => {


    let abrirProducto = (product) => {
        // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
        return {
            pathname: '/product/' + product.id,
            state: { 
                id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                
            }
        }  
    }


    return (
        <div className="grid">
           {
               products.map((product, index) =>
               (
                   <div className="card" key={index}>
                       <h4>{product.title}</h4>
                       <span>{product.price}</span>
                       <Link className="Product-link" to={abrirProducto(product)}>Detalle</Link>
                   </div>
               ))
           }
        </div>
    );
};


export default CardProductComponent;