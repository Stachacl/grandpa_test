import React from 'react'
import { ICheckList } from '../interfaces'

type CheckListProps = {
    checklist: ICheckList[]
    //parameters to handle checkbox and Bin icon 
    onCheckBox(id: number): void
    onBin: () => void
}

export const CheckList: React.FC<CheckListProps> = ({ checklist }) => {
  return (
    <ul>
        {checklist.map(checkListItem => {

            const classes = ['checkListItem']
            if (checkListItem.completed) {
                classes.push("completed")
            }

            return (
              <li className={classes.join(' ')} key={checkListItem.id}>
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