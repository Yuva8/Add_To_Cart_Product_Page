import React from 'react';
import { Route,Routes,useLocation } from 'react-router-dom';


export default function Productdescripation() {
    let location = useLocation();
    let element = location.state.cartitems;
    console.log(element)
    
    return (
        <div>
            <h1>Product Added to Cart</h1>
            <div>
                <table border="2"  style={{borderCollapse:'collapse'}} cellspacing="10" cellpadding="10">
                    <thead style= {{fontSize: "17px",fontWeight: "bold"}}>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Quantity</td>
                            <td>Actual Price</td>
                            <td>Discount</td>
                            <td>Mrp Price</td> 
                            <td>Gst</td>
                            <td>Total</td>
                        </tr>
                        </thead>
                        <tbody style= {{fontSize: "17px"}}>
                            {
                                element.map((data)=>
                                {
                                    return(
                                         <tr>
                                        <td>{data[0].id}</td>
                                        <td>{data[0].name}</td>
                                        <td>{data[0].quantity}</td>
                                        <td>{data[0].price}</td>
                                        <td>{data[0].discount}</td>
                                        <td>{data[0].price-data[0].discount}</td>
                                        <td>18%</td>
                                        <td>{(data[0].price-data[0].discount)+((data[0].price-data[0].discount)*.18)}</td>
                                       
                                    </tr>
                                    )
                                }
                                )
                            }
                           

                        </tbody>
                   
                </table>
            </div>
        </div>
    );
}

