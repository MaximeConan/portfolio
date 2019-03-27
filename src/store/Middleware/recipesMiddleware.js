// Middleware ajax : traitement des recup de données (recettes)

// npm
import axios from 'axios'

// Import
import { LOAD_RECIPES, receivedRecipes } from 'src/store/Reducers/recipes'

const recipesURL = 'http://aurelie-calle.vpnuser.oclock.io/Spe/Apo/foodplanner/API_Backend/public/'

const ajax = store => next => (action) => {
  switch (action.type) {
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
