import React from "react"
import { Dropdown } from 'react-bootstrap'
import { changeCountry } from "../redux/country/countryAction";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAction } from "../redux/user/userAction";
import { useEffect } from 'react'
// using hooks
function Header() {
  const data = useSelector(state => state.user)
  console.log(data);
  
  const auth = () => {
    switch (data) {
      case null: return  <div className="col-md-4 col-12 my-md-4 text-right login-link">
              <a href="auth/logout">loading...</a>
    </div>
        
      case false: return <div className="col-md-4 col-12 my-md-4 text-right login-link">
         <a href="auth/google" className="px-1">Log in</a>&nbsp;
              <a href="auth/logout">log out</a>
      </div>
    
      default:return <div className="col-md-4 col-12 my-md-4 text-right login-link">
              <a href="/profile">Hello {data}</a>
      </div>
    }
  }
  const country = useSelector(state => state.country.country)
  const dispatch = useDispatch()

        
  useEffect(()=>dispatch(fetchUserAction()))
  return ( 
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-md-3 col-sm-12 col-12">
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              {country}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => dispatch(changeCountry("America"))} href="#actiona">America</Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch(changeCountry("India"))} href="#actionb">India</Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch(changeCountry("Europe"))} href="#actionc">Europe</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-4 col-12 text-center">
          <h2 className="my-md-3 site-title" >Online Store</h2>
        </div>
        {auth()}
      </div>
    </div>
  )
}

export default Header


// using function
// import { connect } from "react-redux";

// function Header(props) {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4 my-md-3 col-sm-12 col-12">
//           <Dropdown>
//             <Dropdown.Toggle variant="" id="dropdown-basic">
//               {props.country}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item onClick={() => props.changeCountry("America")} href="#actiona">America</Dropdown.Item>
//               <Dropdown.Item onClick={() => props.changeCountry("India")} href="#actionb">India</Dropdown.Item>
//               <Dropdown.Item onClick={() => props.changeCountry("Europe")} href="#actionc">Europe</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//         <div className="col-md-4 col-12 text-center">
//           <h2 className="my-md-3 site-title">Online Store</h2>
//         </div>
//         <div className="col-md-4 col-12 my-md-4 text-right login-link">
//           <a href="auth/google" className="px-1">Log in</a>&nbsp;
//                   <a href="auth/logout">log out</a>
//         </div>
//       </div>
//     </div>
//   )
// }


// const mapStateToProps = state => {
//   return {
//     country: state.country
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     changeCountry: (countryname) => dispatch(changeCountry(countryname))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)