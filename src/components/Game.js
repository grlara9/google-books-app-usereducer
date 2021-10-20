import React, { useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom'
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
                  <h2>{book.volumeInfo.title} </h2>
                </Card.Title>
                <Card.Text>{book.volumeInfo.subtitle} </Card.Text>
                <Card.Subtitle className="text-muted mb-2">
                  <span className="text-muted font-weight-light mr-2">by {book.volumeInfo.authors }</span> | {new Date(book.volumeInfo.publishedDate).toLocaleDateString()}
                </Card.Subtitle>
               <span color="black">{book.volumeInfo.categories}</span>
                <div>
                  
                 {book.volumeInfo.infoLink}
                
                </div>
            </div>
            <img className="d-none d-md-block" height="150"src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}/>
          </div>
      <Card.Text>
        <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant="primary">
            {open ? 'Hide Details' : 'View Details'}
        </Button>
      </Card.Text>
      <Collapse in={open}>
        <div className="mt-4">
          <ReactMarkdown>{book.volumeInfo.description}</ReactMarkdown>
        </div>
      </Collapse>
    </Card.Body>
  </Card>
    
     
  )
}
export default Books;