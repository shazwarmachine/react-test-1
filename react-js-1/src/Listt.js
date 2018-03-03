import React from "react";
import ReactDOM from 'react-dom';
import "./List.css";
import { List } from 'react-virtualized';
// const getUserName= (ar) =>{
//     console.log(ar);
//     if(ar.username){

//     }
//     else{
//         ar.map((chat)=>{
//                 return (
//                     <p key={chat.username}>{chat.username}</p>
//                 );
//             })
//     }
// }





// function rowRenderer ({
//   key,         // Unique key within array of rows
//   index,       // Index of row within collection
//   isScrolling, // The List is currently being scrolled
//   isVisible,   // This row is visible within the List (eg it is not an overscanned row)
//   style        // Style object to be applied to row (to position it)
// })
// {
  
//    return(
//     <div className="s">
//       <div
//         key={key}
//         style={style}
//       >
//        my name is shahank
        
//       </div>
//     </div>
//   )
// }
 
// export default (width,
//   height,
//   rowCount,
//   rowHeight,

//   username ) => (
//     <div>
//       {console.log(List)}
//       {console.log(width)}
//     </div>
  
// );






// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./List.css";
// import { List } from 'react-virtualized';

// List data as an array of strings


// List data as an array of strings


  
  
// function rowRenderer ({
//     key,         // Unique key within array of rows
//     index,       // Index of row within collection
//     isScrolling, // The List is currently being scrolled
//     isVisible,   // This row is visible within the List (eg it is not an overscanned row)
//     style        // Style object to be applied to row (to position it)
//   }) {
//   return (
//     <div
//       key={key}
//       style={style}
//     >
//       {list[index]}
//     </div>
//   )
// }

// // Render your list
// ReactDOM.render(
//   <List
//     width={300}
//     height={300}
//     rowCount={list.length}
//     rowHeight={20}
//     rowRenderer={rowRenderer}
//   />,
//   document.getElementById('example')
// );



// List data as an array of strings
const list = [
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  'Brian Vaughn',
  'Brian Vaughn',
  'Shashank Mishra',
  // And so on...
];
let u=[];
export default ({username}) =>(
 
  <div>
    
    {
      ReactDOM.render(
        <List
          width={300}
          height={300}
          rowCount={list.length}
          rowHeight={20}
          rowRenderer={rowRenderer}
        />,
        document.getElementById('example')
      )
    }
  </div>

);
function rowRenderer ({
  key,         // Unique key within array of rows
  index,       // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible,   // This row is visible within the List (eg it is not an overscanned row)
  style        // Style object to be applied to row (to position it)
}) {
  
  return (
    
    <div
      key={key}
      style={style}
    >
      {u[index]}
    </div>
  )
}

// Render your list
