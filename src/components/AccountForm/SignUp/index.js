/**
* NPM import
*/
import React from 'react'
import {
  Container,
  Button,
  Form,
  Grid,
} from 'semantic-ui-react'
// import classNames from 'classnames'

/**
* local import
*/

// Import(s) du/des component(s)

// Style SCSS
import '../account-form.scss'


// Code
const SignUp = () => (
  <Container fluid className="background-image" textAlign="center">
    <Grid.Column centered className="content">
      <div className="content-text">
        <h1>Pour vous Inscrire, veuillez remplir les champs suivants :</h1>
      </div>
      <Form className="field">
        <h3 className="field-gender-text">Vous êtes ?</h3>
        <div className="field-gender-button-images">
          <Button circular className="field-gender-button-image"><img src="src/images/employee.svg" alt=""/></Button>
          <Button circular className="field-gender-button-image"><img src="src/images/woman.svg" alt=""/></Button>
        </div>
        <Form.Field required>
          <label className="field-label" htmlFor="">Pseudo</label>
          <input className="field-input" type="text" />
        </Form.Field>
        <Form.Field required>
          <label className="field-label" htmlFor="">Votre email</label>
          <input className="field-input" type="mail" />
        </Form.Field>
        <Form.Field required>
          <label className="field-label" htmlFor="">Mot de passe</label>
          <input className="field-input" type="password" />
        </Form.Field>
        <Form.Field required>
          <label className="field-label" htmlFor="">Confirmez votre mot de passe</label>
          <input className="field-input" type="password" />
        </Form.Field>
        <Button className="field-button-submit" type="submit">S'inscrire</Button>
      </Form>
    </Grid.Column>
  </Container>
)

// Export
export default SignUp
