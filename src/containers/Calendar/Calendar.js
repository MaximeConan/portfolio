
/**
 * Npm import
 */
import { connect } from 'react-redux'

/**
 * Local import
 */
import Calendar from 'src/components/Calendar'

// Action Creators
/* import { doSomething } from 'src/store/reducer' */

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null
 */
const mapStateToProps = (state, ownProps) => ({
  planning: state.calendar.planning.data,
  dataLoaded: state.calendar.dataLoaded,
})

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {}
 */
const mapDispatchToProps = {}

// Container
const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar)

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps)
const CalendarContainer = createContainer(Calendar)
*/

/**
 * Export
 */
export default CalendarContainer
