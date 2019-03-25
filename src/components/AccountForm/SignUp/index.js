// NPM import
import React from 'react'
import {
  Container,
  Button,
  Form,
  Grid,
  Checkbox,
  Select,
} from 'semantic-ui-react'
import axios from 'axios'

// Local import
import '../account-form.scss'
import Field from '../Field'

const fields = [
  {
    name: 'username',
    placeholder: 'Pseudo',
  },
  {
    name: 'email',
    placeholder: 'Adresse e-mail',
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

// Code
class SignUp extends React.Component {
  // State de App
  state = {}

  options = [
    { key: 'homme', text: 'Homme', value: 'Homme', image: { avatar: true, src: 'src/assets/employee.svg' } },
    { key: 'femme', text: 'Femme', value: 'Femme', image: { avatar: true, src: 'src/assets/woman.svg' } },
    { key: 'autre', text: 'Autre', value: 'Autre', image: { avatar: true, src: 'src/assets/woman.svg' } },
  ]

  inputChange = (event) => {
    const { value, name } = event.target

    this.setState({
      [name]: value,
    })
  }

  handleClick = () => {
    const { newsLetter } = this.state

    this.setState({
      newsLetter: !newsLetter,
    })
  }

  handleChange = (e, { value }) => this.setState({ gender: value })

  handleSubmit = (event) => {
    event.preventDefault()
    const {
      password,
      confirmPassword,
      email,
      username,
      newsLetter,
      gender,
    } = this.state

    const data = {
      username,
      email,
      password,
      newsLetter,
      gender,
    }

    if (password === confirmPassword) {
      axios({
        method: 'post',
        url: 'http://aurelie-calle.vpnuser.oclock.io/Spe/Apo/foodplanner/public/registration',
        data,
        headers: {
          'Content-Type': 'multipart/form-data; charset=UTF-8',
        },
      })
        .then((response) => {
          console.log('Réponse post - signup : ', response)
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
    const { errors, newsLetter, gender } = this.state

    return (
      <Container fluid className="background-image" textAlign="center">
        <Grid.Column className="content">
          <div className="content-text">
            <h1>Pour vous Inscrire, veuillez remplir les champs suivants :</h1>
          </div>
          <Form className="field" onSubmit={this.handleSubmit}>
            <h3 className="field-gender-text">Vous êtes ?</h3>
            <Select placeholder="Genre" onChange={this.handleChange} value={gender} options={this.options} className="field-select" />
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
            <Checkbox label="Vous souhaitez vous inscrire à notre newsletter ?" className="field-checkbox" onClick={this.handleClick} checked={newsLetter} />
            <ul>
              {
                errors ? errors.map((error, index) => <li className="form-message--error" key={index}>{error}</li>) : null
              }
            </ul>
            <Button className="field-button-submit" type="submit">Inscription</Button>
          </Form>
        </Grid.Column>
      </Container>
    )
  }
}
export default SignUp
