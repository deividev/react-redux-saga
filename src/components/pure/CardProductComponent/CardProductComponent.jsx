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
                image: product.image
            }
        }  
    }


    return (
        <div className="grid">
           {
               products.map((product, index) =>
               (   <Link className="Product-link" to={abrirProducto(product)}>
                    <div className="card" key={index}>
                        <h4 className="title">{product.title}</h4>
                        <img width="200px" height="200px" src={product.image}alt="" />
                        <span className="price">{product.price}</span>
                        <button className="btn btn-success">Mas info</button>
                    </div>
                   </Link>
               ))
           }
        </div>
    );
};


export default CardProductComponent;