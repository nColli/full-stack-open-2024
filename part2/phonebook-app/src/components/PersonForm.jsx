/* eslint-disable react/prop-types */

export const PersonForm = ({handleSubmit,handleChangeName,newName,handleChangeNumber,newNumber}) => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeName} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleChangeNumber} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    ) 
  }