/**
* NPM import
*/
import React from 'react'
import { Grid } from 'semantic-ui-react'
import Coverflow from 'react-coverflow'

/**
* Code
*/

const Section2 = () => (
  <Grid textAlign="center" className="section2">
    <h2 className="section2-title">Faites votre choix parmi 70 000 recettes.</h2>
    <Coverflow
      media={{
        '@media (max-width: auto)': {
          width: '100vw',
          height: '80vh',
        },
        '@media (min-width: 200px)': {
          width: '100vw',
          height: '70vh',
        },
      }}
      displayQuantityOfSide={1}
      navigation={false}
      infiniteScroll={0}
      enableScroll={0}
      clickable={1}
      active={1}
    >
      <img src="src/assets/sara-dubler-648793-unsplash.jpg" alt="Recette 1" data-action="" />
      <img src="src/assets/eaters-collective-132772-unsplash.jpg" alt="Recette 2" data-action="" />
      <img src="src/assets/brenan-greene-229562-unsplash.jpg" alt="Recette 3" data-action="" />
      <img src="src/assets/brenan-greene-229562-unsplash.jpg" alt="Recette 3" data-action="" />
      <img src="src/assets/rsz_lily-banse-365344-unsplash.jpg" alt="Recette 4" data-action="" />
    </Coverflow>
  </Grid>
)


/**
* Export
*/

export default Section2
