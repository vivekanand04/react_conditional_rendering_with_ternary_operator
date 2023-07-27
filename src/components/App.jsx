//method 1
// import React from "react";
// var isLoggedIn=true;
// function render(){
//   if(isLoggedIn==true)
//   return <h1>Hello</h1>
//   else return <form className="form">
//   <input type="text" placeholder="Username" />
//   <input type="password" placeholder="Password" />
//   <button type="submit">Login</button>
// </form>
// }
// function App() {
//   return (
//     <div className="container">
//       {render()}
//     </div>
//   );
// }

// export default App;
//

//method 2
// import React from "react";
// import Login from "./Login.jsx";
// var isLoggedIn=false;
// function render(){
//   if(isLoggedIn==true)
//   return <h1>Hello</h1>
//   else return < Login />
// }
// function App() {
//   return (
//     <div className="container">
//       {render()}
//     </div>
//   );
// }

// export default App;
// //
//method 2
import React from "react";
import Login from "./Login.jsx";
var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      if(isLoggedIn==true):<h1>Hello</h1>: <Login />
    </div>
  );
}

export default App;
