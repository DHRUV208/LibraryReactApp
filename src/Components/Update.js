import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Update() {
     
    const [BookName, setBookName] = useState("");
    const [AuthorName, setAuthorName] = useState("");
    const [ bookPublisher, setbookPublisher] = useState("");
    const [bookPublishedYear, setbookPublishedYear] = useState("");
    // const [checkbox, setCheckbox] = useState(false);
    
    
    const [id, setID] = useState(null);
    
  
useEffect(() => {
        setID(localStorage.getItem('ID'))
        setBookName(localStorage.getItem('BookName'));
        setAuthorName(localStorage.getItem('AuthorName'));
        
}, []);

const updateAPIData = (bookId) => {
    axios.patch(`http://localhost:9000/${bookId}`, {
        id,
        BookName,
         AuthorName,
         bookPublisher,
         bookPublishedYear
       
    }).then (()=>{
        alert('Successful Update')
    })

}

return (
        <div>
            <Form className="create-form">
                
                <Form.Field>
                    {/* <label>Book Name</label> */}
                    <input placeholder='Book Name' value={BookName || "" } onChange={(e) => setBookName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    {/* <label>Author Name</label> */}
                    <input placeholder='Author Name' value={AuthorName || "" } onChange={(e) => setAuthorName(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    {/* <label>bookPublisher</label> */}
                    <input placeholder='bookPublisher' value={bookPublisher || ""} onChange={(e) => setbookPublisher(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    {/* <label>bookPublishedYear</label> */}
                    <input placeholder='bookPublishedYear' value={bookPublishedYear || ""} onChange={(e) => setbookPublishedYear(e.target.value)}/>
                </Form.Field>
                {/* <Form.Field>
                    <Checkbox  checked={checkbox || false} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field> */}
                <Button type='submit' onClick={()=>{updateAPIData(id)}}>Update</Button>
            </Form>
        </div>
    )
}