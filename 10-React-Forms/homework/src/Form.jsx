import React from 'react';

export function validate (input) {
  let error = {};

  if(!input.username) {
    error.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = 'Username is invalid'
  }
  if(!input.password) {
    error.password = 'Password is required';
  } else if (!/(?=.-*[0-9])/.test(input.password)) {
    error.password = 'Password is invalid';
  }
  return error;
}

export default function  Form() {
  const [input, setInput] = React.useState({
    username: "",
    password: "", 
  });

  let [error, setError] = React.useState({})

  
  let handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name] : [e.target.value],
  }))
  // ACA DEBERIA IR CHEQUEANDO SI HAY UN ERROR.

  let objError = validate({...input, [e.target.name]: e.target.value});
  setError(objError);
}
  
return (
  <form>
    <div>
        <label>Username:</label>
        <input 
        name="username" 
        type="text" 
        value={input.username} 
        placeholder="Insert your username..." 
        onChange={handleInputChange} 
        className={error.username && 'danger'}
       />
        {
          error.username && (<p>{error.username}</p>)
        }
        </div>
        <div> 
          <label>Password:</label>
          <input 
            name="password" 
            type="password" 
            value={input.password} 
            placeholder="Insert your password..." 
            onChange={handleInputChange}
            className = {error.password && 'danger'}
          />
          {
            error.password && (<p>{error.password}</p>)
          }
        </div>
        {/* {(error.username || error.password) ? null : <input type="submit">} */}
        <input type="submit" value={"insert"} />
    </form>
  );
}
