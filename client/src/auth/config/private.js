// import React, { useContext } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { UserContext } from "./AuthContext";

// const PrivateRoute = ({ component, ...rest }) => {
//   let RenderComponent = component;
//   const { loggedIn } = useContext(UserContext);

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return loggedIn ? (
//           <RenderComponent {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/login" }} />
//         );
//       }}
//     />
//   );
// };

// export default PrivateRoute;
