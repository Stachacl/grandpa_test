import React from 'react'

export const CheckListForm: React.FC = () => {
  return (
    <div className='imput-field'>
    <input type="text" id="title" autoFocus />
    <label htmlFor='title' className='active'  >
        Add your custom check point
    </label>
    </div>
  )
}

export default CheckListForm