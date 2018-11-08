import React, { Component } from 'react';
import './App.css';
import {Button, TextField} from '@material-ui/core/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <TextField
                id="outlined-name"
                label="快递编号"
                margin="normal"
                variant="outlined"
            />
            <br/>
            <Button variant="contained" color="primary">1</Button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
