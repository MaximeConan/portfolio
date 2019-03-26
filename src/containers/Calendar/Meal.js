// npm import
import { connect } from 'react-redux'

// Composant
import Meal from 'src/components/Calendar/Meal'

// action creators
import { removeMeal } from 'src/store/Reducers/calendar'

// === State (Données) ===
const mapStateToProps = (state, ownProps) => ({
  planning: state.calendar.planning.data,
  dataLoaded: state.calendar.dataLoaded,
})

// === Dispatch (Actions) ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  removeMeal: () => {
    console.log('container : removeMeal', ownProps)
    dispatch(removeMeal(ownProps.currentDay.recipeTitle))
  },
})

// Container
const MealContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meal)

// Export
export default MealContainer
