import React, { Component, useState } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Menu,  Bread, Sauces, Veggie } from "./Component"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: "",
      bread: "",
      veggies: [],
      sauces: [],
      name: ""
    };
  }

  async submit() {
    const result = await fetch('http://sandwich-api.rungsikorn.rocks/order', {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ 
        ...this.state
      })
    })
    const resultJson = await result.json()
    alert(JSON.stringify(resultJson.message, null, ""))
    
    // clear state
  }

  

  handleChangeMenu(data) {
    this.setState({ menu: data })
  }

  handleChangeBread(data){
    this.setState({ bread: data }) 
  }

  handleChangeVeggie(data){
    this.setState({ veggies: data }) 
  }

  handleChangeSauces(data){
    this.setState({ sauces: data }) 
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ marginTop: "30px" }}>Subway Order 🐸🦄</h1>
        <Form style={{ margin: "0 15%" }} >
          <FormGroup row>
            <Label for="Input">Name</Label>
              <FormGroup>
                <Input type="text" value={this.state.name} onChange={(e) => {this.setState({ name: e.target.value })}}/>
              </FormGroup>
          </FormGroup>
          <Menu onChange={this.handleChangeMenu.bind(this)}/> 
          <Bread onChange={this.handleChangeBread.bind(this)}/> 
          <Veggie onChange={this.handleChangeVeggie.bind(this)}/> 
          <Sauces onChange={this.handleChangeSauces.bind(this)}/> 
          <Button color="primary" onClick={this.submit.bind(this)}>submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
