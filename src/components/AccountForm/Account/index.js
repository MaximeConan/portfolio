// NPM import
import React, { Fragment } from 'react'
import { Container, Grid, Form, Button, Checkbox, Select } from 'semantic-ui-react'

// Local import
import '../account-form.scss'
import axiosInstance from 'src/data/axiosInstance'
import Field from '../Field'

// Code
class Account extends React.Component {
  state = {}

  options = [
    { key: 'homme', text: 'Homme', value: 'Homme', image: { avatar: true, src: 'src/assets/employee.svg' } },
    { key: 'femme', text: 'Femme', value: 'Femme', image: { avatar: true, src: 'src/assets/woman.svg' } },
    { key: 'autre', text: 'Autre', value: 'Autre', image: { avatar: true, src: 'src/assets/woman.svg' } },
  ]

  token = localStorage.getItem('jwtToken')

  componentDidMount() {
    axiosInstance({
      method: 'get',
      url: 'api/profil',
      headers: { Authorization: `Bearer ${this.token}` },
    }).then((response) => {
      console.log('Réponse get Account :', response)
      this.setState({
        email: response.data.email,
        username: response.data.username,
        gender: response.data.gender,
        newsLetter: response.data.newsLetter,
      })
    }).catch((error) => {
      console.log(error)
    })
  }

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
      email,
      username,
      password,
      confirmPassword,
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
      axiosInstance({
        method: 'post',
        url: 'api/profil/edit',
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
    const { username, newsLetter, gender } = this.state

    const fields = [
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
            <h1>Hello <span className="content-username">{username}</span> ça va ? Gérez votre compte ici :</h1>
          </div>
          <Form className="field" onSubmit={this.handleSubmit}>
            {fields.map(field => (
              <Fragment>
                <p className="content-label">Editez votre {field.name}</p>
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
              </Fragment>
            ))}
            <p className="content-label">Editez votre genre</p>
            <Select placeholder={gender} onChange={this.handleChange} value={gender} options={this.options} className="field-select" />
            <Checkbox label="Vous souhaitez vous inscrire à notre newsletter ?" className="field-checkbox" onClick={this.handleClick} checked={newsLetter} />
            <Button className="field-button-submit" type="submit">Mettre à jour</Button>
          </Form>
        </Grid.Column>
      </Container>
    )
  }
}
// Export
export default Account
