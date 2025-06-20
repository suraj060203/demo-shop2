import './NewProduct.css';
import { useState } from 'react';    

function ProductForm() {

    const[newTitle, setTitle] = useState('');
    const[newDate, setDate] = useState('');

    function titleChangeHandler(event) {
            setTitle(event.target.value); 
            // console.log(event.target.value); 
        }
    function dateChangeHandler(event) {
            setDate(event.target.value);
            // console.log("Printing");
            // console.log(newTitle);
            // console.log(newDate);
        }

    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title: newTitle,   
            date: newDate
        };

        console.log(productData);

        setTitle('');
        setDate('');
    }

    return(
        <form className="new-product__controls" onSubmit={submitHandler}>
            <div className='new-product__control'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product__control'>
                <label>Date</label>
                <input type='date' value={newDate} onChange={dateChangeHandler} min='2025-01-01' max='2025-12-31'></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    );
}

export default ProductForm;