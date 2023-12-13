import React from "react";
import { FormControl } from "@mui/material";

import "./productForm.css";
type Props = {
  category: string;
};

const ProductForm = ({ category }: Props) => {
  return (
    <div className="productFormConteiner">
      {category === "cables" ? (
        <div className="cableContainer">
          <div className="containerInfo">
            <div className="nameItem">
              <p className="textInput">שם הרתמה</p>
              <input placeholder="רתמה" className="inputName" type="text" />
            </div>
            <div className="identification">
              <div className="amountContainer">
                <p className="textInput">כמות</p>
                <input placeholder="כמות" className="amountInput" type="text" />
              </div>
              <div className="catalogNumber">
                <p className="textInput">מספר קטלוגי</p>
                <input placeholder="מקט" className="catalogInput" type="text" />
              </div>
            </div>
            <div className="commentsContainer">
              <div className="comments">
                <p className="textInput">הקלד הערות </p>
                <textarea placeholder="הערות" cols={44} rows={5} />
              </div>
            </div>

            <div className="locationsContainer">
              <div className="location">
                <p className="textInput">מיקום(איפה נמצא הפריט) </p>
                <input
                  placeholder="מיקום"
                  className="locationInput"
                  type="text"
                />
              </div>
            </div>
            <div className="OKbutton">
              <button>אישור</button>
            </div>
          </div>
        </div>
      ) : category === "computers" ? (
        <div className="computerContainer">
          <div className="containerInfo">
            <div className="nameItem">
              <p className="textInput">שם מחשב</p>
              <input placeholder="המחשב" className="inputName" type="text" />
            </div>
            <div className="identification">
              <div className="numberContainer">
                <p className="textInput">המספר מחשב</p>
                <input
                  placeholder="123"
                  className="numberComputerInput"
                  type="text"
                />
              </div>
              <div className="chNumber">
                <p className="textInput">מספר צ</p>
                <input placeholder="צ" className="chNumberInput" type="text" />
              </div>
            </div>

            <div className="identification">
              <div className="catalogNumber">
                <p className="textInput">מספר קטלוגי</p>
                <input placeholder="מקט" className="catalogInput" type="text" />
              </div>
              <div className="signed">
                <p className="textInput">מי חתום על המחשב</p>
                <input
                  placeholder="שם מלא"
                  className="signedInput"
                  type="text"
                />
              </div>
            </div>
            <div className="commentsContainer">
              <div className="comments">
                <p className="textInput">הקלד הערות </p>
                <textarea placeholder="הערות" cols={44} rows={5} />
              </div>
            </div>
            <div className="OKbutton">
              <button>אישור</button>
            </div>
          </div>
        </div>
      ) : category === "components" ? (
        <div className="componentsContainer">
          <div className="containerInfo">
            <div className="nameItem">
              <p className="textInput">שם התקן</p>
              <input placeholder="" className="inputName" type="text" />
            </div>
            <div className="identification">
              <div className="numberContainer">
                <p className="textInput">איזה כלי</p>
                <input
                  placeholder="טנק"
                  className="numberComputerInput"
                  type="text"
                />
              </div>
              <div className="chNumber">
                <p className="textInput">מספר צ</p>
                <input placeholder="צ" className="chNumberInput" type="text" />
              </div>
            </div>

            <div className="identification">
              <div className="catalogNumber">
                <p className="textInput">מספר קטלוגי</p>
                <input placeholder="מקט" className="catalogInput" type="text" />
              </div>
              <div className="signed">
                <p className="textInput">חתימה</p>
                <input
                  placeholder="מאור "
                  className="signedInput"
                  type="text"
                />
              </div>
            </div>
            <div className="commentsContainer">
              <div className="comments">
                <p className="textInput">הקלד הערות </p>
                <textarea placeholder="הערות" cols={44} rows={5} />
              </div>
            </div>
            <div className="OKbutton">
              <button>אישור</button>
            </div>
          </div>
        </div>
      ) : category === "usb_sticks" ? (
        <div className="usb_sticksContainer">
          <div className="containerInfo">
            <div className="nameItem">
              <p className="textInput">שם התקן</p>
              <input placeholder="" className="inputName" type="text" />
            </div>
            <div className="identification">
              <div className="numberContainer">
                <p className="textInput">GB מקום אחסון</p>
                <input
                  placeholder="16"
                  className="numberComputerInput"
                  type="text"
                />
              </div>
              <div className="chNumber">
                <p className="textInput">מי חתום על ההתקן</p>
                <input
                  placeholder="אלקנה"
                  className="chNumberInput"
                  type="text"
                />
              </div>
            </div>

            <div className="identification">
              <div className="catalogNumber">
                <p className="textInput">מספר קטלוגי</p>
                <input placeholder="מקט" className="catalogInput" type="text" />
              </div>
              <div className="signed">
                <p className="textInput">Bootable</p>
                <input
                  placeholder="כן/לא "
                  className="signedInput"
                  type="text"
                />
              </div>
            </div>
            <div className="commentsContainer">
              <div className="comments">
                <p className="textInput">הקלד הערות </p>
                <textarea placeholder="הערות" cols={44} rows={5} />
              </div>
            </div>
            <div className="OKbutton">
              <button>אישור</button>
            </div>
          </div>
        </div>
      ) : (
        <div>{/* תוכן כללי */}</div>
      )}
    </div>
  );
};

export default ProductForm;
