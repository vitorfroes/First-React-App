import React from 'react';
import './App.css';
import List from './Challenge/List';
import Form from './Challenge/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
    };
  };

  addNewProfile = (profileData) => {
    console.log("App", profileData);

    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewProfile} />

        <List profiles={this.state.profiles} />
      </div>
    );
  };
}

export default App;
