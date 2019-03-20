/**
* NPM import
*/
import React from 'react'
import {
  Container,
  Button,
  Form,
} from 'semantic-ui-react'
// import classNames from 'classnames'

/**
* local import
*/

// Import(s) du/des component(s)
import HeroSection from 'src/components/Calendar/HeroSectionCalendar'

// Style SCSS
import '../account-form.scss'


// Code
const SignIn = () => (
  <Container fluid>
    <HeroSection />
    <Container>
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
    </Container>
  </Container>
)

// Export
export default SignIn
