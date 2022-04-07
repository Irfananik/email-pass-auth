import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

  const handleEmailInputField = even => {
    setEmail(even.target.value)
  }
  const handlePassInputField = even => {
    setPass(even.target.value)
  }

  const handleFormSubmit = even => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(resutl => {
      const user = resutl.user
      console.log(user)
    })
    .catch(err => {
      console.error(err)
    })
    even.preventDefault()
  }

  return (
    <div className="App">
      <div className="w-50 mx-auto mt-5 border p-4">
        <h2 className="text-primary text-center">Please registration...!</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailInputField} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassInputField} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
