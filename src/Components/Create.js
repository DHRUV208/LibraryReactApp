import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function Create() {
  const [BookName, setBookName] = useState("");
  const [AuthorName, setAuthorName] = useState("");
  const [bookPublisher, setbookPublisher] = useState("");
  const [bookPublishedYear, setbookPublishedYear] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios
      .post(`http://localhost:9000/`, {
        BookName,
        AuthorName,
        bookPublisher,
        bookPublishedYear,
      })
      .then(() => {
        alert("Successful Insert");
      });

    // setBookName([])
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          {/* <label>Book Name</label> */}
          <input
            placeholder="Book Name"
            onChange={(e) => setBookName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          {/* <label>Author Name</label> */}
          <input
            placeholder="Author Name"
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          {/* <label>Book Publisher</label> */}
          <input
            placeholder="Book publisher Name"
            onChange={(e) => setbookPublisher(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          {/* <label>Published Year</label> */}
          <input
            placeholder="Year"
            onChange={(e) => setbookPublishedYear(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <Checkbox onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
