import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [validated, setValidated] = useState('')
  const [error, setError] = useState('')
  const [regstart, setRegtart] = useState(false)

  const handleRegstart = event => {
    setRegtart(event.target.checked)
  }

  const handleEmailInputField = event => {
    setEmail(event.target.value)
  }
  const handlePassInputField = event => {
    setPass(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    if (! /^.*(?=.{8,}).*$/.test(password)) {
      setError('Please Enter more than 7 cerecters password')
      return
    }
    setError('')
    setValidated(true)

    if (regstart) {
      signInWithEmailAndPassword(auth, email, password)
      .then(resutl => {
        const user = resutl.user
        console.log(user)
      })
      .catch(err => {
        setError(err)
        console.log(err)
      })
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(resutl => {
          const user = resutl.user
          setEmail('')
          setPass('')
          console.log(user)
        })
        .catch(err => {
          setError(err.message)
          console.error(err)
        })
    }
    event.preventDefault()
  }

  return (
    <div className="App">
      <div className="w-50 mx-auto mt-5 border p-4">
        <h2 className="text-primary text-center">Please {regstart ? "Login" : "registration"}...!</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailInputField} type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid mail.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassInputField} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegstart} type="checkbox" label="Already an account" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {regstart ? "Login" : "Register"}
          </Button>
        </Form>
        <p className="text-danger mt-3">{error}</p>
      </div>
    </div>
  );
}

export default App;
