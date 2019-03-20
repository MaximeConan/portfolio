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
import HeroSectionAccount from 'src/components/AccountForm/Account/HeroSectionAccount/index'

// Style SCSS
import '../account-form.scss'


// Code
const SignUp = () => (
  <Container>
    <HeroSectionAccount />
    <Form className="field">
    <Button circular icon='man' />
    <Button circular icon='woman' />
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
  </Container>
)

// Export
export default SignUp
