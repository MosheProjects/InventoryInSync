import React ,{useState} from 'react';
import './AddProductForm.css';
import ProductForm from './Categories/productForm';

type Categories = { [key: string]: string };



export default function AddProductForm() {
  const [category,setCategory] =  useState("");
  const categories: Categories = {
    רתמות: "cable",
    מחשבים: "computers",
    "דיסק און קי": "usb_stiks",
    מכלולים: "components",
    "ציוד היקפי": "generalProducts"
  };

  return (
    <div dir='rtl' className="containerPopUp">
      <div className="popUp">
        <div className="upperPart">
          <div className="titleText">
            <h2>טופס הוספת פריט</h2>
          </div>
          <div dir="rtl" className="textOptions">
            <p className='textTitleCategories'>בחר את סוג הפריט</p>
          </div>
          <div className="inputItems">
            {Object.keys(categories).map((category) => (
              <div className='catagoriesText' key={category}>
           <input onChange={() => setCategory(categories[category])} type="radio" name="category" value={categories[category]} />
              {category}
              </div>
            ))}
          </div>
        </div>
            <div className='columnContainers'>
              <ProductForm category={category}/>
            </div>

      </div>
    </div>
  );
}
