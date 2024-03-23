import React from 'react'

import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import Cardsdata from './Cardsdata';
import { useState } from 'react';
import './styles.css';
import {ADD} from "../redux/action"
import {  useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
const Cards = () => {
    const [data,setData]=useState(Cardsdata);
    const dispatch=useDispatch();
    const send=(e)=>{
      dispatch(ADD(e))
    }
    return (
        <div className="home">
        <div className='container '>
        
        {/* <h2 className='heading'>Shopping Cart</h2> */}
        <div className='row d-flex justify-content-center align-items-center'>
       { data.map((ele,id)=>{
        return (
            <Card style={{ width: '18rem',border:"none"}}  className="mx-2 mt-4 card_style">
            <Card.Img variant="top" src={ele.imgdata} style={{height:"13em" ,objectFit:"cover"}} className='mt-3' />
            <Card.Body>
              <Card.Title>
                <Typography sx={{fontWeight:"bold",letterSpacing:"1px"}}>{ele.rname}</Typography></Card.Title>
              <Card.Text>
                <Typography>Price :<strong> ₹{ele.price}</strong></Typography>
              </Card.Text>
              <div className="d-flex justify-content-center">
              <Button variant="primary" 
              onClick={()=>send(ele)}
              className="custombtn col-lg-12" ><Typography sx={{fontWeight:"bold"}}>Add to Cart</Typography></Button>

              </div>
            </Card.Body>
          </Card>
       )
        })
    }
    </div>
        
      </div>
      </div>
      )
}

export default Cards
