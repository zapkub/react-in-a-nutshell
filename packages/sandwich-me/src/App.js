import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class App extends Component {

  async submit() {
    const result = await fetch('http://localhost:3001/order', {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ bread: "" })
    })
    alert(JSON.stringify(result, null, ""))
    
    // clear state
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ marginTop: "30px" }}>Subway Order 🐸🦄</h1>
        <Form style={{ margin: "0 15%" }}>
          <FormGroup row>
            <Label for="Input">Input</Label>
            <Input type="text" placeholder="with a placeholder" />
          </FormGroup>
          <Button color="primary" onClick={this.submit}>submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
