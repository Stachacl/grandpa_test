import React from 'react'

type CheckListProps = {
    checklist: any[]
}

export const CheckList: React.FC<CheckListProps> = ({ checklist }) => {
  return (
    <ul>
        {checklist.map(checkListItem => {
            return (
              <li className='checkListItem'>
                <label>
                 <input type="checkbox" />
                 <span></span>
                 <i className='material-icons red-text'>delete</i>
                </label>
              </li>
            )
        } )}
       
    </ul>
    
  )
}

export default CheckList