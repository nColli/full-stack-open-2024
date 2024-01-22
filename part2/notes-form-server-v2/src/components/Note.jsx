/* eslint-disable react/prop-types */

export const Note = ({ note, toggleImportance }) => {
    const content = note.content
    const date = note.date

    const label = note.important
        ? 'make not important' : 'make important'

    return (
        <li>
            <p>{content}</p>
            <small>{date}</small>
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}