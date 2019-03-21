// NPM import
import React from 'react'
import {
  Container,
  Button,
  Form,
  Grid,
} from 'semantic-ui-react'
import axios from 'axios'
import setAuthorizationToken from 'src/utils/setAuthorizationToken'

// Local import
import '../account-form.scss'
import Field from '../Field'

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
      method: 'post',
      url: 'http://antoine-gagnepain.vpnuser.oclock.io/FoodPlanner/public/api/login_check',
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log('Réponse get - signin : ', response)

        const { token } = response.data
        localStorage.setItem('jwtToken', token)
        setAuthorizationToken(token)
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
      <Container fluid className="background-image" textAlign="center">
        <Grid.Column className="content">
          <div className="content-text">
            <h1>Pour vous connecter, veuillez remplir les champs suivants :</h1>
          </div>
          <ul>
            {
              errors ? errors.map((error, index) => <li key={index}>{error}</li>) : null
            }
          </ul>
          <Form className="field" onSubmit={this.handleSubmit}>
            {fields.map(field => (
              <Form.Field required>
                <label className="field-label">{field.name}</label>
                <Field
                  required
                  className="field-input"
                  key={field.name}
                  value={this.state[field.name]}
                  onInputChange={this.inputChange}
                  {...field}
                />
              </Form.Field>
            ))}
            <Button className="field-button-submit" type="submit">Connexion</Button>
          </Form>
        </Grid.Column>
      </Container>
    )
  }
}
export default SignIn
