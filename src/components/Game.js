import React, { useState } from "react";

import {Card , Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
const Books = ({ book }) => {

  const [open, setOpen]= useState(false)
  
  return (
      <Card className="mb-3">
        <Card.Body>
         <div className="d-flex justify-content-between">
            <div>
                <Card.Title>
                  <h2>{book.title} </h2>
                </Card.Title>
                
                <Card.Subtitle className="text-muted mb-2">

                </Card.Subtitle>
               
                <div>
                  
               
                
                </div>
            </div>
            <img className="d-none d-md-block" height="150"src={book.Poster}/>
          </div>
      <Card.Text>
        <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant="primary">
            {open ? 'Hide Details' : 'View Details'}
        </Button>
      </Card.Text>
      <Collapse in={open}>
        <div className="mt-4">
       
        </div>
      </Collapse>
    </Card.Body>
  </Card>
    
     
  )
}
export default Books;