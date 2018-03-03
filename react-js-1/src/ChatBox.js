import React from "react";
import './ChatBox.css';

export default ({ text, username, handleTextChange,chats,use }) => (
  <div className="r">
   
    <div className="row ">
    <div className="col-xs-12 ">
      <div className="chat ">
        <div className="b">
          <input
            type="text"
            value={text}
            placeholder="chat here..."
            className="form-control  w"
            onChange={handleTextChange}
            onKeyDown={handleTextChange}
          />
        </div>

        <div className="clearfix"></div>
      </div>
    </div>

   <div className=""> <h4 className="greetings" style={{padding:'0'}}>Hello, {username}</h4> </div>
   
  </div>
    </div>
);
