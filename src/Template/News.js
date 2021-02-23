import React, { Component } from "react";
import axios from 'axios'

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      persons: []
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }


  render() {
    return (
      <ul>
        { 
        this.state.persons.map(person => 
            <li>{person.name} -- {person.username} -- {person.email}</li>
        )}
      </ul>
    )
  }

  

  
}

