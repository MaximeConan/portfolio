// NPM import
import React, { Fragment } from 'react'
import axios from 'axios'
import {
  Grid,
  Container,
} from 'semantic-ui-react'
import axiosInstance from 'src/data/axiosInstance'

// Local import
import './calendar.scss'
import Day from './Day'
import Meal from './Meal'
import CalendarHeader from './CalendarHeader'
import HeroSectionCalendar from './HeroSectionCalendar'

// Code
class Calendar extends React.Component {
  state = {
    planning: [],
  }

  token = localStorage.getItem('jwtToken')

  componentDidMount() {
    axiosInstance({
      method: 'get',
      url: '/planning',
      header: {
        Authorization: `Bearer ${this.token}`,
      },
    }).then((response) => {
      console.log('Réponse get Planning :', response)
      this.setState({
        planning: response.data.data,
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const { planning } = this.state
    console.log(planning)

    return (
      <Fragment>
        <HeroSectionCalendar />
        <Container>
          <Grid className="calendar">
            <CalendarHeader planning={planning} />
            <Grid.Row>
              <ul className="calendar-days">
                {
                  Object.keys(planning).map(day => (
                    <Day day={day} />
                  ))
                }
              </ul>
              {
                <div className="calendar-cell">
                  {
                    Object.values(planning).map(day => (
                      <ul>
                        {
                          day.map(currentDay => (
                            <Meal currentDay={currentDay} />
                          ))
                        }
                      </ul>
                    ))
                  }
                </div>
              }
            </Grid.Row>
            <Grid.Row textAlign="centered">
              <a href="#" className="calendar-footer-button"><i className="fas fa-shopping-cart" /> Passer à la liste de course</a>
            </Grid.Row>
          </Grid>
        </Container>
      </Fragment>
    )
  }

} 

// Export
export default Calendar

{/* <Fragment>
        <HeroSectionCalendar />
        <Container>
          <Table celled className="calendar">
            <Table.Header>
              <Table.Row textAlign="center">
                <Table.HeaderCell>Midi / soir</Table.HeaderCell>
                <Table.HeaderCell>Lundi</Table.HeaderCell>
                <Table.HeaderCell>Mardi</Table.HeaderCell>
                <Table.HeaderCell>Mercredi</Table.HeaderCell>
                <Table.HeaderCell>Jeudi</Table.HeaderCell>
                <Table.HeaderCell>Vendredi</Table.HeaderCell>
                <Table.HeaderCell>Samedi</Table.HeaderCell>
                <Table.HeaderCell>Dimanche</Table.HeaderCell>
              </Table.Row>
            </Table.Header>day
        
            <Table.Body>
              <Table.Row textAlign="center">
                <Table.Cell verticalAlign="middle"><div><i className="fas fa-hourglass-start" /> Midi</div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal recipe"><span>Spaghetti à la crème de Truffe<div className="recipe-icon"><i className="fas fa-sign-out-alt" /><i className="fas fa-trash-alt" /></div></span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
              </Table.Row>
              <Table.Row textAlign="center">
                <Table.Cell verticalAlign="middle"><div><i className="fas fa-hourglass-end" /> Soir</div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal recipe"><span>Boeuf Bourguinon<div className="recipe-icon"><i className="fas fa-sign-out-alt" /><i className="fas fa-trash-alt" /></div></span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal recipe"><span>Tarte au saumon<div className="recipe-icon"><i className="fas fa-sign-out-alt" /><i className="fas fa-trash-alt" /></div></span></div></Table.Cell>
                <Table.Cell verticalAlign="middle"><div className="calendar-cell-add--meal"><span>Ajoutez un repas<br /> à votre calendrier</span></div></Table.Cell>
              </Table.Row>
            </Table.Body>
        
            <Table.Footer>
              <Table.Row textAlign="center">
                <Table.Cell colSpan="8">
                  <a href="#" className="calendar-footer-button"><i className="fas fa-shopping-cart" /> Passer à la liste de course</a>
                </Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </Fragment> */}
