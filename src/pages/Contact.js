import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

const TextFields = styled.div`
  display: flex;
  flex-direction: column; 
`

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 400,
    },
  },
}));

const ContactContainer = styled.div`
  height: calc(100vh - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  ${({ theme }) => theme.color.secondary};
  border: 1rem solid #2f3542;
`

function Contact() {
  const classes = useStyles();
  const [value, setValue] = useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <ContactContainer>
      <form className={classes.root} noValidate autoComplete="off">
        <TextFields>
          <TextField required type="text" label="Name" />
          <TextField required type="email" label="Email" />
          <TextField
            required
            id="standard-multiline-static"
            label="Message"
            multiline
            rows="4"
          />
        </TextFields>
      </form>
    </ContactContainer>
  );
}

export default Contact;

// import React from 'react'

// function Contact() {
//   return (
//     <div>
//       <h1>Hello form contact</h1>
//     </div>
//   )
// }

// export default Contact


