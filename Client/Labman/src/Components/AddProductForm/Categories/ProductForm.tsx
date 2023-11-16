import React from 'react'
import './productForm.css'
type Props = {
    category: string
}

export default function productform({ category } : Props) {



    return (
        <div className='productFormConteiner'>
 {category =="cable"?(
    <div className='cableContainer'>gdgdgfd </div>
    
    )  :(

<div></div>
    )

}
 </div>
    );
    
}
