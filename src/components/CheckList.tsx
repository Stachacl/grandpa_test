import React from 'react'
import { ICheckList } from '../interfaces'

type CheckListProps = {
    checklist: ICheckList[]
}

export const CheckList: React.FC<CheckListProps> = ({ checklist }) => {
  return (
    <ul>
        {checklist.map(checkListItem => {

            const classes = ['checkListItem']
            
            return (
              <li className='checkListItem' key={checkListItem.id}>
                <label>
                 <input type="checkbox" checked={checkListItem.completed} />
                 <span>{checkListItem.title}</span>
                 <i className='material-icons red-text'>delete</i>
                </label>
              </li>
            )
        } )}
       
    </ul>
    
  )
}

export default CheckList