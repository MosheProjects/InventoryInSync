import React, { useState } from "react";
import "./AddProductForm.css";
import ProductForm from "./Categories/ProductForm";
import {
  LENDING_FORM_FIELDS,
  EQUIPMENT_CATAGORIES,
  CATAGORY_OBJECT_TYPE,
  USERS_INFO_FIELDS,
} from "../../Constants/consts";

const AddProductForm = () => {
  const [category, setCategory] = useState("");

  return (
    <div dir="rtl" className="containerPopUp">
      <div className="popUp">
        <div className="upperPart">
          <div className="titleText">
            <h2>טופס הוספת פריט</h2>
          </div>
          <div dir="rtl" className="textOptions">
            <p className="textTitleCategories">בחר את סוג הפריט</p>
          </div>
          <div className="inputItems">
            {EQUIPMENT_CATAGORIES.map((category, i) => (
              <div className="catagoriesText" key={i}>
                <input
                  onChange={() => setCategory(category.en)}
                  type="radio"
                  name="category"
                  value={category.he}
                />
                {category.he}
              </div>
            ))}
          </div>
        </div>
        <div className="columnContainers">
          <ProductForm category={category} />
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
