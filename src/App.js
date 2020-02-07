import React from 'react';
import './App.css';
import List from './Challenge/List';
import Form from './Challenge/Form';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars1.githubusercontent.com/u/28302061?v=4", company: "Facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars1.githubusercontent.com/u/28579081?v=4", company: "Facebook" },
  { name: "Sebastian Markbage", avatar_url: "https://avatars3.githubusercontent.com/u/39866572?v=4", company: "Facebook" },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: testData,
    };
  }
  render() {
    return (
      <div>
        <Form />

        <List profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
