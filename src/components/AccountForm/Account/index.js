// NPM import
import React from 'react'
import axios from 'axios'
import { Container, Grid, Form, Button } from 'semantic-ui-react'

// Local import
import '../account-form.scss'
import Field from '../Field'

// Code
class Account extends React.Component {
  state = {}

  token = localStorage.getItem('jwtToken')

  componentDidMount() {
    axios.defaults.baseURL = ' http://aurelie-calle.vpnuser.oclock.io/Spe/Apo/foodplanner/public/api'

    axios({
      method: 'get',
      url: '/profil',
      headers: { Authorization: `Bearer ${this.token}` },
    }).then((response) => {
      console.log('Réponse get Account :', response)
      this.setState({
        email: response.data.email,
        username: response.data.username,
        gender: response.data.gender,
        newsletter: response.data.newsletter,
      })
    }).catch((error) => {ttp://aurelie-calle.vpnuser.oclock.io/Spe/Apo/foodplanner/public/api/profil/edit
      console.log(error)
    })
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
      email,
      username,
      password,
      confirmPassword,
    } = this.state

    const data = {
      username,
      email,
      password,
    }

    if (password === confirmPassword) {
      axios({
        method: 'post',
        url: 'profil/edit',
        data,
        headers: { Authorization: `Bearer ${this.token}` },
      }).then((response) => {
        console.log('Réponse post Account :', response)
      }).catch((error) => {
        console.log(error)
      })
    }
    else {
      alert('Passwords not match')
    }
  }

  render() {
    const { username } = this.state

    const fields = [
      {
        name: 'username',
        placeholder: 'Pseudo',
      },
      {
        name: 'email',
        placeholder: 'email',
        type: 'email',
      },
      {
        name: 'password',
        placeholder: 'Mot de passe',
        type: 'password',
      },
      {
        name: 'confirmPassword',
        placeholder: 'Confirmer mot de passe',
        type: 'password',
      },
    ]

    return (
      <Container fluid className="background-image" textAlign="center">
        <Grid.Column className="content">
          <div className="content-text">
            <h1>Hello {username} ça va ? Gérez votre compte ici :</h1>
          </div>
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
            <Button className="field-button-submit" type="submit">Mettre à jour</Button>
          </Form>
        </Grid.Column>
      </Container>
    )
  }
}
// Export
export default Account
