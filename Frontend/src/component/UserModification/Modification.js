import React, { useState } from "react";
import "./Modification.css"

function Modi() {
  const [username, setUsername] = useState("John");
  const [newUsername, setNewUsername] = useState("");

  const handleInputChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(newUsername);
    setNewUsername("");
  };

  return (
    <div>
      <h1>Welcome back</h1>
      <form onSubmit={handleSubmit} className="modiForm">
        <div className="modification">
            <div className="modification-input">
                <label>  
                    <input type="text" value={newUsername} placeholder="Tony" onChange={handleInputChange} />
                </label>
                <label>  
                    <input type="text" value={newUsername} placeholder="Jarvis" onChange={handleInputChange}/>
                </label>
            </div>
            <div className="modification-btn"> 
                <button type="submit">Save</button>
                <button type="submit">Cancel</button>
            </div>
        </div>
      </form>
    </div>
  );
}

export default Modi;
