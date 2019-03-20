// NPM import
import React from 'react'
import { Container } from 'semantic-ui-react'
import axios from 'axios'

// Local import
import './home.scss'
import Field from './Field'

const fields = [
  {
    name: 'fullname',
    placeholder: 'Pseudo',
  },
  {
    name: 'email',
    placeholder: 'Votre email',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Mot de passe',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    placeholder: 'Confirmation mot de passe',
    type: 'password',
  },
]


// Code
class Home extends React.Component {
  // State de App
  state = {}

  inputChange = (event) => {
    const { value, name } = event.target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {
      password,
      confirmPassword,
      email,
      fullname,
    } = this.state

    if (password === confirmPassword) {
      axios.post('/http://antoine-gagnepain.vpnuser.oclock.io/FoodPlanner/public/registration', {
        fullname: fullname,
        email: email,
        password: password,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      alert('Passwords not match')
    }
  }

  // Render
  render() {
    return (
      <Container>
        <form id="app" autoComplete="off" onSubmit={this.handleSubmit}>
          {fields.map(field => (
            <Field
              required
              key={field.name}
              value={this.state[field.name]}
              onInputChange={this.inputChange}
              {...field}
            />
          ))}
          <button type="submit">Envoyer</button>
        </form>
      </Container>
    )
  }
}
export default Home
