//import React from "react";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import {NavLink} from "react-router-dom";
import "../App.css";
import {DLT} from '../redux/action.js'
import { useDispatch } from "react-redux";
import { cartreducer } from "../redux/reducers/reducer";
import {  useSelector } from "react-redux";
import { useEffect } from "react";
import { Typography } from "@mui/material";
function Header() {
  const getdata=useSelector((state)=>state.cartreducer.carts);
  console.log(getdata);
  const [price,setPrice]=useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch=useDispatch()
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dltitem=(id)=>{
    dispatch(DLT(id))
  }
  const total=()=>{
    let price=0;
    getdata.map((ele,k)=>{
        price=ele.price*ele.qnty+price
    });
    setPrice(price);
  }
  useEffect(()=>{
    total();
  },[total])
  return (
    <>
      <Navbar className="navbgc">
        <Container>
          <Navbar.Brand style={{ fontSize: "1.5rem" }}>Shoppee</Navbar.Brand>

          <Nav className="me-auto">
            <NavLink to="/"
              href="#home"
              className="text-decoration-none text-light mx-3"
              style={{ fontSize: "1rem" }}
            >
              Cart Items
            </NavLink>
          </Nav>

          <Badge
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="badgestyle"
            badgeContent={getdata.length}
            color="secondary"
            onClose={handleClose}
            
          >
            <i class="fa-solid fa-cart-shopping text-light"></i>
          </Badge>
       
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
        
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {
            getdata.length ? 
            <Table style={{width:"20rem"}}>
              <thead>
                <tr>
                <td><Typography sx={{fontWeight:"bold"}}>Photo</Typography></td>
                <td><Typography sx={{fontWeight:"bold"}}>Item</Typography></td>
                </tr>
              </thead>
              <tbody>
              {getdata.map((ele)=>{
                return (
                  <>
                  <tr>
                    <td>
                      <NavLink to={`/cart/${ele.id}`}>
                      <img src={ele.imgdata} style={{height:"7rem",width:"7rem"}} onClick={handleClose}></img>
                      </NavLink>
                      </td>
                    <td>
                      <Typography><p>{ele.rname}</p></Typography>
                      <Typography><p>Price :{ele.price}</p></Typography>
                      <Typography><p>Quantity :{ele.qnty}</p></Typography>
                      <p style={{color:"red",fontSize:20,cursor:"pointer"}}><i className="fas fa-trash smalltrash" onClick={()=>dltitem(ele.id)}></i></p>
                    </td>
                    <td>
                    <p style={{color:"red",fontSize:20,cursor:"pointer"}}><i className="fas fa-trash largetrash" onClick={()=>dltitem(ele.id)}></i></p>
 </td>
                  </tr>
                  </>

                )
              })
            }
            <p className="text-center"><Typography>Total : {price}</Typography></p>
            </tbody>

            </Table>
            :
            <div className="card_details d-flex justify-content-center align-items-center" style={{width:"18rem",padding:5}}>
            <i
              className="fas fa-close smallclose"
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 25,
                cursor: "pointer",
                onClick:{handleClose}
              }}
            ></i>
            
            <p style={{fontSize:20}}>Your Cart is Empty</p>
            <img src="./cart.gif" alt=""className='emptycart_img' style={{width:"5rem",padding:10}}/>
          
          </div>

          }
         

        </Menu>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
