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
    name: 'password',
    placeholder: 'Mot de passe',
    type: 'password',
  },

]

// Code
class SignIn extends React.Component {
  // State de App
  state = {
    isLogged: false,
  }

  inputChange = (event) => {
    const { value, name } = event.target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {
      username,
      password,
    } = this.state

    const data = {
      username,
      password,
    }

    axios({
      method: 'get',
      url: 'http://antoine-gagnepain.vpnuser.oclock.io/FoodPlanner/public/login',
      data,
      headers: {
        Authorization: `bearer${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Réponse get - signin : ', response)
        this.setState({
          username,
          password,
          isLogged: response.data.isLogged,
          errors: response.data.errors,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Render
  render() {
    const { errors } = this.state

    return (
      <Container>
        <div>
          {
            errors ? errors.map((error, index) => <div key={index}>{error}</div>) : null
          }
        </div>
        <form id="signin" autoComplete="off" onSubmit={this.handleSubmit}>
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
export default SignIn
