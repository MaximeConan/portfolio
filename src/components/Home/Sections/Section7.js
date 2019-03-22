/**
* NPM import
*/
import React from 'react'
import { Grid, Responsive } from 'semantic-ui-react'

/**
* local import
*/

// Import(s) du/des component(s)
import Stars from 'src/components/Home/Sections/Stars'

const Section7 = () => (
  <Grid textAlign="center" className="section7">
    <h2 className="section7-title">Ils l'ont testé et vite adopté !</h2>
    <div className="section7-wrap">
      <div className="section7-column">
        <img className="section7-column-image" src="src/assets/Home/Section-Avis/section-avis-woman-1.jpg" alt="" />
        <div>
          <span className="section7-column-name">Eleonore</span>
          <span className="section7-column-city">Paris</span>
        </div>
        <Stars />
        <p className="section7-column-text">Mère de 3 enfants et travaillant beaucoup, j'ai enfin trouver une solution afin de gagner du temps et donc d'en passer plus avec eux. Merci FoodPlanner!</p>
      </div>
      <div className="section7-column">
        <img className="section7-column-image" src="src/assets/Home/Section-Avis/section-avis-man-1.jpg" alt="" />
        <div>
          <span className="section7-column-name">Paul</span>
          <span className="section7-column-city">Lyon</span>
        </div>
        <Stars />
        <p className="section7-column-text">FoodPlanner m'a permis de m'organiser plus efficecement dans ma semaine. Et c'est devenu simple et rapide de faire ses courses.</p>
      </div>
      <div className="section7-column responsive-display-none">
        <img className="section7-column-image responsive-display-none" src="src/assets/Home/Section-Avis/section-avis-man-2.jpg" alt="" />
        <div>
          <span className="section7-column-name responsive-display-none">Martin</span>
          <span className="section7-column-city responsive-display-none">Arnac-la-Poste</span>
        </div>
        <Stars />
        <p className="section7-column-text responsive-display-none">Les recettes de FoodPlanner sont parfaites. C'est super de pouvoir planifier sa semaine et de pouvoir choisir des recettes de qualités pour sa famille.</p>
      </div>
    </div>
  </Grid>
)


/**
* Export
*/

export default Section7
