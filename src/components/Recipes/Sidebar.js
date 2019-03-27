// NPM Import
import React from 'react'
import { Radio } from 'semantic-ui-react'
import { NumericMenu, RefinementList, ClearRefinements } from 'react-instantsearch-dom'

// Local import
import './recipes.scss'
import { CustomNumericMenu } from './CustomNumericMenu'

// Code
const Sidebar = () => (
  <aside className="sidebar">
    <h2>Affinez :</h2>
    <ClearRefinements
      clearsQuery
      translations={{
        reset: 'Nettoyer les filtres',
      }}
    />
    <div className="sidebar-filter">
      <p>Calories</p>
      <CustomNumericMenu
        attribute="calorie"
        translations={{
          all: 'Tout',
        }}
        items={[
          { label: 'Tout' },
          { label: '- de 300 calories', end: 300 },
          { label: '0 à 600 calories', start: 301, end: 600 },
          { label: '+ 600 calories', start: 601 },
        ]}
      />
    </div>
    <div className="sidebar-filter">
      <p>Difficulté</p>
      <ul>
        <li><Radio label="Tout" /></li>
        <li><Radio label="Facile" /></li>
        <li><Radio label="Moyen" /></li>
        <li><Radio label="Difficile" /></li>
      </ul>
    </div>
    <div className="sidebar-filter">
      <p>Catégorie</p>
      <ul>
        <li><Radio label="Tout" /></li>
        <li><Radio label="Entrée" /></li>
        <li><Radio label="Plat" /></li>
        <li><Radio label="Dessert" /></li>
      </ul>
    </div>
    <div className="sidebar-filter">
      <p>Note</p>
      <ul>
        <li><Radio label="" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /></li>
        <li><Radio label="" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /></li>
        <li><Radio label="" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></li>
        <li><Radio label="" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /></li>
        <li><Radio label="" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></li>
      </ul>
    </div>
  </aside>
)


// Export
export default Sidebar
