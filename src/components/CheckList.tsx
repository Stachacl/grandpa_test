import React from 'react'

export const CheckList: React.FC = () => {
  return (
    <ul>
        <li className='checklist'>
           <label>
            <input type="checkbox" />
            <span></span>
            <i className='material-icons red-text'>delete</i>
           </label>
        </li>
    </ul>
    
  )
}

export default CheckList