import React, { useState } from "react";
import { TodoList } from "../src/ToDoList";
import { AddTodoForm } from "../src/AddToForm";
import { Container, Row, Col, Card } from "react-bootstrap";

const initialTodos: Todo[] = [
  {
    text: "Exercise",
    complete: false
  },
  {
    text: "Eat Healthy",
    complete: true
  }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="mt-5">
          <Card border="grey">
            <Card.Header>
              <h2>To Do List</h2>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <TodoList todos={todos} toggleTodo={toggleTodo} />
                <AddTodoForm addTodo={addTodo} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
