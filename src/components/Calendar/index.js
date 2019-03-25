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

  token = localStorage.getItem('jwtToken')

  render() {
    const { planning, dataLoaded } = this.props

    return (
      dataLoaded ? (
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
      ) :  <p>Loading</p>
    )
  }
} 

// Export
export default Calendar
