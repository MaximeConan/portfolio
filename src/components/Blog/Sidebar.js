// NPM Import
import React from 'react'
import { Radio } from 'semantic-ui-react'
import { ClearRefinements } from 'react-instantsearch-dom'

// Local import
import './blog.scss'

// Code
const Sidebar = () => (
  <aside className="sidebar">
    <h2>Affinez :</h2>
    <ClearRefinements
      clearsQuery
      translations={{
        reset: 'Nettoyer les filtres',
      }}
    />
    <div className="sidebar-filter">
      <p>Catégorie</p>
      <ul>
        <li><Radio label="Catégorie" /></li>
        <li><Radio label="Recettes" /></li>
        <li><Radio label="Nutrition" /></li>
        <li><Radio label="Sport" /></li>
      </ul>
    </div>
    <div className="sidebar-filter">
      <p>Temps de lecture</p>
      <ul>
        <li><Radio label="Tout" /></li>
        <li><Radio label="-10 min" /></li>
        <li><Radio label="de 10 à 20 min" /></li>
        <li><Radio label="+ 30 min" /></li>
      </ul>
    </div>
  </aside>
)


// Export
export default Sidebar
