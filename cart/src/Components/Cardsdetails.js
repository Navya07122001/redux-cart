import "../App.css";
import "./styles.css";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import {DLT,ADD, REMOVE} from "../redux/action"
const Cardsdetails = () => {
  const {id}=useParams();
  const [data,setData]=useState([]);
  const dispatch=useDispatch();
  const getdata=useSelector((state)=>state.cartreducer.carts);
  const compare=()=>{
    let comparedata= getdata.filter((e)=>{
     return  e.id==id
    });
    setData(comparedata)
    
  }
  const send=(e)=>{
    dispatch(ADD(e))
  }
  const navigate=useNavigate();
  //delete
  const dltitem=(id)=>{
    dispatch(DLT(id));
    navigate("/");
  }
  //remove one
  const removeone=(e)=>{
    dispatch(REMOVE(e))
  }
  useEffect(()=>{
   compare();
   
  },[id])
  console.log(getdata);
  return (
    <>
    <div >
    <img src={process.env.PUBLIC_URL + '/diet.png'} alt="Burger" style={{height:"100px",width:"100px"}}/>
      <div className="home mx-5">
       
        <section className="container mt-1">
          <div className="itemsdetails row">
            {
              data.map((ele)=>{
                return (
                  <>
                    <div className="item_img col-lg-6">
                <img
                  src={ele.imgdata}
                  className="img-fluid" // Added Bootstrap class for responsive images
                  alt="Restaurant Image"
                  style={{borderRadius:"10px",boxShadow:"1px solid black"}}
                />
              </div>
            
            <div className="details col-lg-6 mx-2">
              <TableContainer>
                <Table sx={{ minWidth: 500 }}>
                  <TableRow>
                    <TableCell>
                      <p>
                        <strong className="side-text" >Restauant</strong>  :<p className="side-text">{ele.rname}</p> 
                      </p>
                      <p>
                        <strong className="side-text">Price</strong>:<p className="side-text">₹{ele.price}</p>
                      </p>
                      <p>
                        <strong className="side-text">Dishes</strong>:<p className="side-text">{ele.address}</p>
                      </p>
                      <p>
                        <strong className="side-text">Total</strong>:<p className="side-text"> ₹{ele.price* ele.qnty} </p>
                      </p>
                      <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                        <span style={{fontSize:24}} className="side-text p-2"onClick={ele.qnty<=1 ?()=>dltitem(ele.id):()=>removeone(ele)}>-</span>
                        <span style={{fontSize:22,fontWeight:"bold"}}  className='side-text'>{ele.qnty}</span>
                        <span style={{fontSize:24}} className="side-text p-2"onClick={()=>send(ele)}>+</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p>
                        <strong className="side-text">Rating :  </strong>
                        <span 
                        className="side-text rating"
                          style={{
                            background: "green",
                            color: "white",
                            padding: "3px",
                            border: "5px",
                            borderRadius:"4px"
                          }}
                        >
                          {ele.rating} ★
                        </span>
                      </p>
                      <p>
                        <strong className="side-text">Order Review : </strong> <p className="side-text">{ele.somedata}</p>
                      </p>
                      <p>
                        <strong className="side-text">Remove : </strong>
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          
                          }}
                          onClick={()=>dltitem(ele.id)}
                        ></i>
                      </p>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableContainer>
            </div>
            </>
                )
              })
            }
            

          </div>
        </section>
      </div>
      
      {/* <img src="burger.png" alt="burgerimg"></img> */}
      </div>
    </>
  );
};

export default Cardsdetails;
