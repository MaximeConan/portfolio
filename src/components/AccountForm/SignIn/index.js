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

// Style SCSS
import '../account-form.scss'


// Code
const SignIn = () => (
  <Container fluid className="background-image" textAlign="center">
    <Grid.Column centered className="content">
      <div className="content-text">
        <h1>Pour vous connecter, veuillez remplir les champs suivants :</h1>
      </div>
      <Form className="field">
        <Form.Field required
        // Code pour dynamiser les champs en scss
        // className={classNames(
        //   'field',
        //   {
        //     'field--has-content': value !== '',
        //   },
        // )}
        >
          <input className="field-input" type="mail" />
          <label className="field-label">Adresse mail</label>
        </Form.Field>
        <Form.Field required>
          <input className="field-input" type="password" />
          <label className="field-label">Votre mot de passe</label>
        </Form.Field>
        <Button className="field-button-submit" type="submit">Connexion</Button>
      </Form>
    </Grid.Column>
  </Container>
)

// Export
export default SignIn
