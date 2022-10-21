import React from 'react'
import { ICheckList } from '../interfaces'

type CheckListProps = {
    checklist: ICheckList[]
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