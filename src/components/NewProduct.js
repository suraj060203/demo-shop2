import './NewProduct.css';
import React, { useState } from 'react';
import ProductForm from './ProductForm';

function NewProduct(){
    return(
        <div className='new-product'>
            <ProductForm></ProductForm>
        </div>
        
    );

}

export default NewProduct;