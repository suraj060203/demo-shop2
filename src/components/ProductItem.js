import './ProductItem.css';
import React from 'react';

import ProductDate from './ProductDate';
import Card from './Card';

const ProductItem = (props) => {
    return (
        <Card className="product-item">
            <ProductDate date={props.date} />
            <div className="product-item__description">
                <h2>{props.title}</h2>
            </div>
        </Card>
    );
}

export default ProductItem;