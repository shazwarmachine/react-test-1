import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatList from './ChatList';
import ChatBox from './ChatBox';
import "./List.css";
import Listt from './Listt';
import { List } from 'react-virtualized';

import './App.css';

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
  let user=[];
//  let use=[];

let n=[];
let c=0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: '',
      chats: [],
     
    };
    
    
    
  }


 
  
  componentDidMount() {
    // console.log(List);
    const username =  window.prompt('Username: ', 'Anonymous');
    this.setState({ username });
    
    
    const pusher = new Pusher('3ad6fa8c15497ca51350', {
      cluster: 'ap2',
      encrypted: true
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      this.setState({ chats: [...this.state.chats, data], test: '' });
    });
    
    this.handleTextChange = this.handleTextChange.bind(this);
    
  }

  handleTextChange(e) {

    
    if (e.keyCode === 13) {
      const payload = {
        username: this.state.username,
        message: this.state.text,
        
      };
      
      axios.post('http://localhost:5000/message', payload);
    } else {
      this.setState({ text: e.target.value });
    }

   
  }
  
  //  chatUser(arr,um){
  //    console.log("hello i am on line 106");
  //           let k=0;
            
  //           for(let i=0;i<arr.length;i++){
              
  //             if(arr[i]===um){
  //               k++;
  //             }
              
  //           }

  //           if( c===0){
  //               return um;
  //           }
  // }
  rowRenderer ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
  }) {
    
  //   function chatUser(um){
  //     console.log("hello i am on line 106");
  //     console.log(um,"this is um")
  //            let k=0;
  //            console.log(c,"c before any increment")
  //             n=[];    
  //            console.log(n,"this is s before ternary");
  //            c==0?console.log("hello ternary"):n[c]=um;
  //            console.log(n,"this is s before loop");
  //            for(let i=0;i<n.length;i++){
               
  //              if(n[i]===um){
  //                console.log("this is "+i+"th iteration",k)
  //                k++;
  //                console.log("this is "+i+"th iteration",k)
  //              }
               
  //            }
  //             c==0?n[c]=um:"";
  //            c++;

            
  //            if( k>=n.length-1){
                 
  //            }
  //            else{
  //              return um;
  //            }
  //  }
    return (
      
     user.map((uk)=>{
        
         return (
         <div
            key={key}
            style={style}
            style={{
              position:'relative',
              boxSizing: 'content-box',
              color:'white',
              fontSize:'30px',
              textAlign:'center',
              fontWeight:'400',
              width:'400px'
            }}
            
          >
          
            {
               uk
            }
           
          </div>)
      })
      // <div
      //       key={key}
      //       style={style}
      //     >
      //       {user[c++]
      //       }
           
      //     </div>
    )
  }

  
  render() {
    
    
    return (
      <div className="App">
      
        <header className="App-header">
          
          <h1 className="App-title" style={{fontSize:'30px',fontFamily:'Helvetica',padding:'5px',margin:'5px'}}>ChatApp</h1>
        </header>
        <section>

          <ChatList chats={this.state.chats} />
          <h1 style={{color:'white',textAlign:'center'
            }}>List of Users Online</h1>
          <List
            
            width={300}
            height={400}
            rowCount={user.length}
            rowHeight={45}
            rowRenderer={this.rowRenderer}
         
          />
          <ChatBox
            text={this.state.text}
            username={this.state.username}
            handleTextChange={this.handleTextChange}
            chats={this.state.chats}
            use={this.state.use}
          />
         
       {  user=this.state.chats.map(chat=>{
        
        return chat.username;
      })}
      
         {
           
         }
         {
          
         }
          {/* {user.push(this.state.username)} */}
        {/* {user.push(this.state.chats.map((chat)=>chat.username))}
        {console.log(user+" hello")} */}
          {/* {user.push(this.state.chats.map((chat)=>chat.username))}
          {console.log(this.state.chats.map((chat)=>chat.username))} */}
        </section>
      </div>
    );
    
     
     
      
  }
//   rowRenderer ({
//     key,         // Unique key within array of rows
//     index,       // Index of row within collection
//     isScrolling, // The List is currently being scrolled
//     isVisible,   // This row is visible within the List (eg it is not an overscanned row)
//     style        // Style object to be applied to row (to position it)
//   }) {
//     {}
//     return (
//       <div className="s">
//         <div
//           key={key}
//           style={style}
//         >
//          { 
           
//           //  user[index]
//             filter(use,index)
//           }
//         </div>
//       </div>
//     )
// }


}

export default App;
