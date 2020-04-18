import React, { useEffect } from "react"
import { Dropdown } from 'react-bootstrap'
import { changeCountry } from "../redux/country/countryAction";
import { fetchUsername } from "../redux/user/userAction";
// using hooks
// function Header() {
//   const data = useSelector(state => state.user)
//   console.log(data);
  
//   const auth = () => {
//     switch (data) {
//       case null: return  <div className="col-md-4 col-12 my-md-4 text-right login-link">
//               <a href="auth/logout">loading...</a>
//     </div>
        
//       case false: return <div className="col-md-4 col-12 my-md-4 text-right login-link">
//          <a href="auth/google" className="px-1">Log in</a>&nbsp;
//               <a href="auth/logout">log out</a>
//       </div>
    
//       default:return <div className="col-md-4 col-12 my-md-4 text-right login-link">
//               <a href="/profile">Hello {data.split(' ')[0]}</a>
//       </div>
//     }
//   }
//   const country = useSelector(state => state.country.country)
//   const dispatch = useDispatch()
  
//    useEffect(() => dispatch(fetchUsername()),[])
//   return ( 
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4 my-md-3 col-sm-12 col-12">
//           <Dropdown>
//             <Dropdown.Toggle variant="" id="dropdown-basic">
//               {country}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item onClick={() => dispatch(changeCountry("America"))} href="#actiona">America</Dropdown.Item>
//               <Dropdown.Item onClick={() => dispatch(changeCountry("India"))} href="#actionb">India</Dropdown.Item>
//               <Dropdown.Item onClick={() => dispatch(changeCountry("Europe"))} href="#actionc">Europe</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//         <div className="col-md-4 col-12 text-center">
//           <h2 className="my-md-3 site-title" >Online Store</h2>
//         </div>
//         {auth()}
//       </div>
//     </div>
//   )
// }

// export default Header


// using function
import { connect } from "react-redux";

function Header(props) {

  const auth = () => {
        switch (props.data) {
          case null: return  <div className="col-md-4 col-12 my-md-4 text-right login-link">
                  <a href="auth/logout">loading...</a>
        </div>
            
          case false: return <div className="col-md-4 col-12 my-md-4 text-right login-link">
             <a href="auth/google" className="px-1">Log in</a>&nbsp;
                  <a href="auth/logout">log out</a>
          </div>
        
          default:return <div className="col-md-4 col-12 my-md-4 text-right login-link">
                  <a href="/profile">Hello {props.data.name.split(' ')[0]}</a>
          </div>
        }
      }
   useEffect(() => props.fetchUsername(),[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-md-3 col-sm-12 col-12">
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              {props.country}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => props.changeCountry("America")} href="#actiona">America</Dropdown.Item>
              <Dropdown.Item onClick={() => props.changeCountry("India")} href="#actionb">India</Dropdown.Item>
              <Dropdown.Item onClick={() => props.changeCountry("Europe")} href="#actionc">Europe</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-4 col-12 text-center">
          <h2 className="my-md-3 site-title">Online Store</h2>
        </div>
        {auth()}
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    country: state.country.country,
    data:state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCountry: (countryname) => dispatch(changeCountry(countryname)),
    fetchUsername: () => dispatch(fetchUsername())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)