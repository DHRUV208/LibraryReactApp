import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
// import config from '../config.json';

export default function Read() {
  // const [APIData, setAPIData] = useState([]);
  const [books, setBooksData] = useState([]);
  useEffect(() => {
    // getBooks();
    axios.get(`http://localhost:9000/`).then((response) => {
      console.log(response);
      setBooksData(response.data.books);
    });
  }, []);
  // const getBooks = async ()=>{
  //     let result = await  fetch ('http://localhost:9000/');

  //     result= await  result.json();
  //     setBooksData()
  // }

  const getData = () => {
    axios.get(`http://localhost:9000/`).then((getData) => {
    console.log(getData.data);  
    setBooksData(getData.data.books);
    });
  };
  const onDelete = (bookId) => {
    // console.log(`bookId`)
    axios.delete(`http://localhost:9000/${bookId}`).then(()=>{
      alert(`Successful Deletion ${bookId}`);
    }).then(() => {
      getData();
    });
  };

  

  const setData = (data) => {
    let {
      bookId,
      bookName,
      authorName,
      bookPublisher,
      bookPublishedYear,
     
    } = data;
    localStorage.setItem("bookId", bookId);
    localStorage.setItem("Book Name", bookName);
    localStorage.setItem("Author Name", authorName);
    localStorage.setItem("bookPublisher", bookPublisher);
    localStorage.setItem("bookPublishedYear", bookPublishedYear);
  
  };
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>S.No.</Table.HeaderCell>
            <Table.HeaderCell>Book Name</Table.HeaderCell>
            <Table.HeaderCell>Author Name</Table.HeaderCell>
            <Table.HeaderCell>bookPublisher</Table.HeaderCell>
            <Table.HeaderCell>bookPublishedYear</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <tbody>
          {Array.isArray(books) &&
            books.map((val) => {
              return (
                <Table.Row key={val.id}>
                  <Table.Cell  >{val.id}</Table.Cell> 
                  <Table.Cell >{val.BookName}</Table.Cell>
                  <Table.Cell >{val.AuthorName}</Table.Cell>
                  <Table.Cell >{val.bookPublisher}</Table.Cell>
                  <Table.Cell >{val.bookPublishedYear}</Table.Cell>
                 
                  <Table.Cell>
                  <Link to="/update">
                   
                      <Button onClick={() => setData(val)}>UpDate</Button>
                    
                  </Link>
                  </Table.Cell>

                  <Table.Cell>
                    <Button
                      onClick={() => {
                        {onDelete(val.id)}
                      }}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
