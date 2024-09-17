import React from 'react'
import {ProductConsumer, ProductProvider} from "../Context"
import { Table, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <>
    <div className="container">
        <h3>CRUD OPERTIONS</h3>
        <ProductConsumer>
            {
                (value) => {
                    return(
                        <Table size='sm' variant='dark' striped bordered hover>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Information</th>
                                    <th>Price</th>
                                    <th>Company</th>
                                    <th>Actions</th>
                                </tr>


                                {value.map(product =>{
                                    return(
                                        <tr  key={product.id}>
                                            <td>{product.title}</td>
                                            <td>{product.info}</td>
                                            <td>{product.price}</td>
                                            <td>{product.company}</td>
                                            <td><Button size="sm" variant='primary' onClick={() =>{value.onEdit(product.id)}} >EDIT</Button> |
                                            <Button size="sm" variant='secondary' onClick={() =>{value.onDelete(product.id)}} >DELETE</Button>
                                            </td>
                                           



                                        </tr>
                                    )
                                })}
                            </tbody>

                        </Table>
                    )
                }
            }
            
        </ProductConsumer>
    </div>
    </>
  )
}
