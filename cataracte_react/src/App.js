import React, { Component } from "react";
import './App.css';



class App extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  }
  fetchUsers = () => {
    // Where we're fetching data from
    fetch(`/pythonapi`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data => {
        console.log("response from server data :", data)
        this.setState({
              users: data,
              isLoading: false,
            })
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }
 /* componentDidMount() {
    this.fetchUsers();
  }
  */
  render() {
    const { users, isLoading, error } = this.state;
    return(
      <>
        <h1>Users recieved from PYTHON Web API : </h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, name, email } = user;
            return (
              <div key={username}>
                <p>Name: {name}</p>
                <p>Email Address: {email}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </>
    )   
  }
}

export default App;

