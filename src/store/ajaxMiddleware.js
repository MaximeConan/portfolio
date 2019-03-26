// Middleware ajax : traitement des recup de données (recettes)

// npm
import axios from 'axios'

// Import
import { LOAD_PLANNING, receivedPlanning, LOAD_RECIPES, receivedRecipes } from 'src/store/reducer'

const recipesURL = 'http://aurelie-calle.vpnuser.oclock.io/Spe/Apo/foodplanner/API_Backend/public/'
const planningURL = 'http://aurelie-calle.vpnuser.oclock.io/Spe/Apo/foodplanner/API_Backend/public/planning'

const ajax = store => next => (action) => {
  switch (action.type) {
    case LOAD_PLANNING:
      axios
        .get(planningURL)
        .then(({ data }) => {
          store.dispatch(receivedPlanning(data))
        })
        .catch(() => {
          console.error('HOOOO')
        })
      break

    case LOAD_RECIPES:
      axios
        .get(recipesURL)
        .then(({ data }) => {
          store.dispatch(receivedRecipes(data))
        })
        .catch(() => {
          console.error('HOOOO')
        })
      break

    default:
      break
  }

  // Passe à ton voisin
  next(action)
}

export default ajax
