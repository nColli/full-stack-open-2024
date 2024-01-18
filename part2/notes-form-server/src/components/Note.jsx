/* eslint-disable react/prop-types */

export const Note = ({ note }) => {
    const title = note.title
    const body = note.body

    return (
        <li>
            <p>{title}</p>
            <small>{body}</small>
        </li>
    )
}