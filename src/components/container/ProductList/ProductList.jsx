import React from 'react';
import CardProductComponent from '../../pure/CardProductComponent/CardProductComponent';

const ProductList = () => {

   
    const defaultProducts = [
        {
            title: "Reloj",
            img: "",
            description: "adfadwad",
            price: 100,
            id: 10,
        },
        {
            title: "Pulsera",
            img: "",
            description: "adfadwad",
            price: 30,
            id: 10,
        },
        {
            title: "collar",
            img: "",
            description: "adfadwad",
            price: 100,
            id: 10,
        },
        {
            title: "Reloj",
            img: "",
            description: "adfadwad",
            price: 100,
            id: 10,
        },
        {
            title: "Pulsera",
            img: "",
            description: "adfadwad",
            price: 30,
            id: 10,
        },
        {
            title: "collar",
            img: "",
            description: "adfadwad",
            price: 100,
            id: 10,
        },
        {
            title: "Reloj",
            img: "",
            description: "adfadwad",
            price: 100,
            id: 10,
        },
        {
            title: "Pulsera",
            img: "",
            description: "adfadwad",
            price: 30,
            id: 10,
        },
        {
            title: "collar",
            img: "",
            description: "adfadwad",
            price: 100,
            id: 10,
        }
    ]

    return (
        <div>
          
            {/* TODO Aplicar un map para renderizar la lista de tareas */}
            <CardProductComponent products={defaultProducts}></CardProductComponent>

        </div>
    );
};

export default ProductList;