// NPM import
import React from 'react'
import { Container } from 'semantic-ui-react'
import axios from 'axios'

// Local import
import './home.scss'
import Field from './Field'

const fields = [
  {
    name: 'username',
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
      username,
    } = this.state

    const data = {
      username,
      email,
      password,
    }

    if (password === confirmPassword) {
      axios({
        method: 'post',
        url: 'http://antoine-gagnepain.vpnuser.oclock.io/FoodPlanner/public/registration',
        data,
        headers: {
          'Content-Type': 'multipart/form-data; charset=UTF-8',
        },
      })
        .then((response) => {
          console.log(response)
          this.setState({
            username,
            email,
            password,
            errors: response.data.errors,
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      alert('Passwords not match')
    }
  }

  // Render
  render() {
    const { errors } = this.state

    return (
      <Container>
        <div>
          {
            errors ? errors.map(error => <div>{error}</div>) : <div>Tableau errors vide</div>
          }
          {/* errors ? errors.forEach(error => console.log(error)) : <div>Hello</div> */}
        </div>
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
