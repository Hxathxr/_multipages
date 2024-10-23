// // import { Link } from 'react-router-dom';
// // import './Navbar.css';

// // function Navbar({ tab, setTab }) {
// //     return (
// //         <div className='navbar-container'>
// //             <Link to='/home'>
// //                 <button
// //                     className={'btn ' + (tab === 'home' ? 'btn-primary' : 'btn-outline-primary')}
// //                     onClick={() => setTab('home')}
// //                 >
// //                     Home
// //                 </button>
// //             </Link>

// //             <Link to='/calculator'>
// //                 <button
// //                     className={'btn ' + (tab === 'calculator' ? 'btn-primary' : 'btn-outline-primary')}
// //                     onClick={() => setTab('calculator')}
// //                 >
// //                     Calculator
// //                 </button>
// //             </Link>

// //             <Link to='/components'>
// //                 <button
// //                     className={'btn ' + (tab === 'components' ? 'btn-primary' : 'btn-outline-primary')}
// //                     onClick={() => setTab('components')}
// //                 >
// //                     Components
// //                 </button>
// //             </Link>

// //             <Link to='/todo'>
// //                 <button
// //                     className={'btn ' + (tab === 'todo' ? 'btn-primary' : 'btn-outline-primary')}
// //                     onClick={() => setTab('todo')}
// //                 >
// //                     Todo
// //                 </button>
// //             </Link>

// //             <Link to='/products'>
// //                 <button
// //                     className={'btn ' + (tab === 'products' ? 'btn-primary' : 'btn-outline-primary')}
// //                     onClick={() => setTab('products')}
// //                 >
// //                     Products
// //                 </button>
// //             </Link>

// //             <Link to='/carts'>
// //                 <button
// //                     className={'btn ' + (tab === 'carts' ? 'btn-primary' : 'btn-outline-primary')}
// //                     onClick={() => setTab('carts')}
// //                 >
// //                     Carts
// //                 </button>
// //             </Link>
// //         </div>
// //     );
// // }

// // export default Navbar;

// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const initPage = "home";
// function Navbar({ products, carts, setToken }) {
//   const [tab, setTab] = useState("");

//   useEffect(() => {
//     setTab(initPage);
//   }, []);

//   const homeRef = useRef();
//   const calculatorRef = useRef();
//   const animationRef = useRef();
//   const componentsRef = useRef();
//   const todoRef = useRef();
//   const productsRef = useRef();
//   const cartsRef = useRef();

//   useEffect(() => {
//     if (tab === "calculator") calculatorRef.current.click();
//     else if (tab === "animation") animationRef.current.click();
//     else if (tab === "components") componentsRef.current.click();
//     else if (tab === "todo") todoRef.current.click();
//     else if (tab === "products") productsRef.current.click();
//     else if (tab === "carts") cartsRef.current.click();
//     else homeRef.current.click();
//   }, [tab]);

//   return (
//     <div className="navbar-container">
//       <Link to="/home">
//         <button
//           style={{ boxShadow: "0 0 0.25rem gray" }}
//           className={`btn ${
//             tab === "home" ? "btn-primary" : "btn-outline-primary"
//           }`}
//           onClick={() => setTab("home")}
//           ref={homeRef}
//         >
//           Home
//         </button>
//       </Link>
//       <Link to="/calculator">
//         <button
//           style={{ boxShadow: "0 0 0.25rem gray" }}
//           className={`btn ${
//             tab === "calculator" ? "btn-primary" : "btn-outline-primary"
//           }`}
//           onClick={() => setTab("calculator")}
//           ref={calculatorRef}
//         >
//           Calculator
//         </button>
//       </Link>
//       <Link to="/animation">
//         <button
//           style={{ boxShadow: "0 0 0.25rem gray" }}
//           className={`btn ${
//             tab === "animation" ? "btn-primary" : "btn-outline-primary"
//           }`}
//           onClick={() => setTab("animation")}
//           ref={animationRef}
//         >
//           Animation
//         </button>
//       </Link>
//       <Link to="/components">
//         <button
//           style={{ boxShadow: "0 0 0.25rem gray" }}
//           className={`btn ${
//             tab === "components" ? "btn-primary" : "btn-outline-primary"
//           }`}
//           onClick={() => setTab("components")}
//           ref={componentsRef}
//         >
//           Components
//         </button>
//       </Link>
//       <Link to="/todo">
//         <button
//           style={{ boxShadow: "0 0 0.25rem gray" }}
//           className={`btn ${
//             tab === "todo" ? "btn-primary" : "btn-outline-primary"
//           }`}
//           onClick={() => setTab("todo")}
//           ref={todoRef}
//         >
//           Todos
//         </button>
//       </Link>
//       <Link to="/products">
//         <button
//           style={{ boxShadow: "0 0 0.25rem gray" }}
//           className={`btn ${
//             tab === "products" ? "btn-primary" : "btn-outline-primary"
//           }`}
//           onClick={() => setTab("products")}
//           ref={productsRef}
//         >
//           Products ({products.length})
//         </button>
//       </Link>
//       <Link to="/carts">
//         <button
//           style={{ boxShadow: "0 0 0.25rem gray" }}
//           className={' position-relative ' +
//             `btn ${
//             tab === "carts" ? "btn-primary" : "btn-outline-primary"
//           }`}
//           onClick={() => setTab("carts")}
//           ref={cartsRef}
//         >
//           Carts {
//             carts.length > 0 && (
//               <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//             {carts.length < 10 ? carts.length : "9+"}
//             <span class="visually-hidden">unread messages</span>
//           </span>
//             )
//           }
         
//         </button>
//       </Link>

//       <button
//   className={`btn ${tab === "home" ? "btn-danger" : "btn-outline-danger"}`}
//   onClick={() => {
//     setToken(''); // ตั้งค่า token ให้เป็นค่าว่าง
//     setTab("home"); // เปลี่ยนกลับไปที่แท็บ home
//   }}
//   ref={homeRef}
// >
//   Logout
// </button>


//     </div>
//   );
// }
// export default Navbar;
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const initPage = "home";

function Navbar({ products, carts, setToken }) {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initPage);
  }, []);

  const homeRef = useRef();
  const calculatorRef = useRef();
  const animationRef = useRef();
  const componentsRef = useRef();
  const todoRef = useRef();
  const productsRef = useRef();
  const cartsRef = useRef();

  useEffect(() => {
    if (tab === "calculator") calculatorRef.current.click();
    else if (tab === "animation") animationRef.current.click();
    else if (tab === "components") componentsRef.current.click();
    else if (tab === "todo") todoRef.current.click();
    else if (tab === "products") productsRef.current.click();
    else if (tab === "carts") cartsRef.current.click();
    else homeRef.current.click();
  }, [tab]);

  return (
    <div className="navbar-container">
      <Link to="/home">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "home" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("home")}
          ref={homeRef}
        >
          Home
        </button>
      </Link>
      <Link to="/calculator">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "calculator" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("calculator")}
          ref={calculatorRef}
        >
          Calculator
        </button>
      </Link>
      <Link to="/animation">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "animation" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("animation")}
          ref={animationRef}
        >
          Animation
        </button>
      </Link>
      <Link to="/components">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "components" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("components")}
          ref={componentsRef}
        >
          Components
        </button>
      </Link>
      <Link to="/todo">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "todo" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("todo")}
          ref={todoRef}
        >
          Todos
        </button>
      </Link>
      <Link to="/products">
        <button
          style={{ boxShadow: "0 0 0.25rem gray", position: "relative" }}
          className={`btn ${
            tab === "products" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("products")}
          ref={productsRef}
        >
          Products ({products.length})
        </button>
      </Link>
      <Link to="/carts">
        <button
          style={{ boxShadow: "0 0 0.25rem gray", position: "relative" }}
          className={`btn ${
            tab === "carts" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("carts")}
          ref={cartsRef}
        >
          Carts
          {carts.length  > 0 && (
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
             {carts.length < 10 ? carts.length : "9+"} 
             <span className="visually-hidden">unread messages</span>
           </span>
          )} 
         </button>
      </Link>
      <button
        className="btn btn-outline-danger"
        style={{ marginLeft: "1rem" }}
        onClick={() => { setToken(''); }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;



