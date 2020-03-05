import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Footer from '../pages/sections/Footer';
import Snackbar from '../components/Snackbar';
import H1 from "../components/H1";
import H3 from "../components/H3";
import LinkElement from '../components/LinkElement';

import { ReactComponent as Mail } from '../assets/icons/reachme/mail-color.svg';
import { ReactComponent as Back } from '../assets/icons/contact/arrow.svg';

import styled from 'styled-components';
import sizesMui from '../helpers/sizesMui';
import { sizes } from '../helpers/sizes';

import { ThemeContext } from '../context/ThemeContext';


const TextFields = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const ContactContainer = styled.div`
  height: calc(100vh - 2rem - 104px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  ${({ theme }) => theme.color.secondary};
  border: 1rem solid #2f3542;
  border-bottom: none;
  flex-direction: column;

  svg {
    /* margin: ${({ theme }) => theme.margin.related}; */
    width: 40px;
    height: 40px;
    transition: .2s;

    &:hover {
      transform: scale(1.3);
    }
  }

  ${sizes.mobileS} {
    height: calc(100vh - 2rem);
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 400,
      [sizesMui.down("xs")]: {
        width: 250
      }
    },
  },
  button: {
    marginLeft: '1rem',
    marginBottom: '2rem',
    width: '40%',
    padding: '.7rem'
  },
  link: {
    textDecoration: 'none',
    color: '#2f3542',
    position: 'absolute',
    top: '5%',
    left: '5%',
    [sizesMui.down("xs")]: {
      width: 250,
      top: '4%',
      left: '10%',
    },
    [sizesMui.down("xxs")]: {
      width: 250,
      top: '82%',
      left: '10%',
    }
  }
}));

function Contact() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { isDarkMode } = useContext(ThemeContext);
  const [status, setStatus] = useState()

  const handleChange = (e) => {
    e.persist()
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);

    setState({
      name: '',
      email: '',
      message: ''
    })
    setStatus('success');
    setTimeout(() => {
      history.push("/");
    }, 3000)
  }

  const styles = {
    border: isDarkMode ? '1rem solid black' : '',
    color: isDarkMode ? 'white' : '',
    backgroundColor: isDarkMode ? 'black' : ''
  }

  const fieldsStyles = {
    backgroundColor: isDarkMode ? '#16a085' : '',
    marginTop: isDarkMode ? '2rem' : '',
    borderRadius: '3px'
  }

  return (
    <div style={{ borderBottom: isDarkMode ? '0rem solid black' : '1rem solid #2f3542' }}>
      <ContactContainer style={styles}>
        <Link className={classes.link} to="/"><Back style={{ fill: isDarkMode ? 'white' : '' }} /></Link>
        <H1>Contact me</H1>
        <H3>Use form or send me an email</H3>
        <LinkElement link="mailto:grzegorz.konarski86@gmail.com"><Mail /></LinkElement>
        <form
          action="https://formspree.io/xjvwdrje"
          method="POST"
          onSubmit={handleSubmit}
          className={classes.root}
          autoComplete="off">
          <TextFields style={fieldsStyles} >
            <TextField
              required
              onChange={handleChange}
              value={state.name}
              name="name"
              type="text"
              label="Name" />
            <TextField
              required
              onChange={handleChange}
              value={state.email}
              name="email"
              type="email"
              label="Email" />
            <TextField
              required
              onChange={handleChange}
              value={state.message}
              name="message"
              id="standard-multiline-static"
              label="Message"
              multiline
              rows="6"
            />
            <Button className={classes.button} type="submit" variant="outlined">
              Send
            </Button>
          </TextFields>
        </form>

      </ContactContainer>
      <Snackbar
        setStatus={setStatus} status={status} message="Thanks! Will get back to You ASAP 😀" />
      <Footer />
    </div>
  );
}

export default Contact;
