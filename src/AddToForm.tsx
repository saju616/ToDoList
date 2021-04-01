import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col
} from "react-bootstrap";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <Container>
      <Row>
        <Col className="p-0">
          <InputGroup>
            <FormControl
              aria-label="Default"
              className="p-4"
              placeholder="Enter your task"
              aria-describedby=""
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button
              className="ml-2"
              disabled={!text}
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                addTodo(text);
                setText("");
              }}
            >
              Add Task
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};
