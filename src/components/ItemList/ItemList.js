import React from "react";
import Item from "../Item/Item.js";
const ItemList = ({itemArray}) =>{

return (
    <div>
        <table class="table">
          <thead>
           <tr>
              <th scope="col">View</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
           </tr>
        </thead>
        {itemArray.map((item)=>(<Item item ={item}/>))

        }
       </table>
    </div>
   );
  };
  export default ItemList;