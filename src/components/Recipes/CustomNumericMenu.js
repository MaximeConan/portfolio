import React from 'react'
import { connectNumericMenu } from 'react-instantsearch-dom'

import './recipes.scss'

const NumericMenu = ({ items, refine, createURL }) => (
  <ul>
    {items.map(item => (
      <li key={item.value}>
        <a
          href={createURL(item.value)}
          style={{ fontWeight: item.isRefined ? 'bold' : '' }}
          onClick={(event) => {
            event.preventDefault()
            refine(item.value)
          }}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
)

export const CustomNumericMenu = connectNumericMenu(NumericMenu)
