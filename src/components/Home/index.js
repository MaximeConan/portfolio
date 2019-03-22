/**
* NPM import
*/
import React, { Fragment } from 'react'
import { Container } from 'semantic-ui-react'

/**
* local import
*/

// Import(s) du/des component(s)
import Section1 from 'src/components/Home/Sections/Section1'
import Section2 from 'src/components/Home/Sections/Section2'
import Section3 from 'src/components/Home/Sections/Section3'
import Section4 from 'src/components/Home/Sections/Section4'
import Section5 from 'src/components/Home/Sections/Section5'
import Section6 from 'src/components/Home/Sections/Section6'
import Section7 from 'src/components/Home/Sections/Section7'
import SectionNewsletter from 'src/components/Home/Sections/SectionNewsletter'

// Style SCSS
import './home.scss'

// Code
const Home = () => (
  <Fragment>
    <Container fluid>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <SectionNewsletter />
    </Container>
  </Fragment>
)
export default Home
