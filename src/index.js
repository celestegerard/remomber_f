import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js'

ReactDOM.render(
  <Router><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></Router>
  , document.getElementById('root')
);
