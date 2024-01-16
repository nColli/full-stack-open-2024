/* eslint-disable react/prop-types */

export const Note = ({ note }) => {
    const content = note.content
    const date = note.date

    return (
        <li>
            <p>{content}</p>
            <small>{date}</small>
        </li>
    )
}