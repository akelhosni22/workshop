import React from "react";

 const Item = ({item}) => {
   const handleClick = () => {
     alert (`item.name: ${item.name}
     item.price: ${item.price}`
       
     )
   };
    return (
        <>
            <tr>
      <th scope="row"> 
      <button type="button" onClick={handleClick} > Product Details</button>
       </th>
      <td> 
          <img src={item.imgSrc} style={{ height:"200px"}} alt={item.name}/>
      </td>
      <td>{item.name }</td>
      <td>{item.price}</td>
    </tr>
      </>
    );
};
export default Item;
