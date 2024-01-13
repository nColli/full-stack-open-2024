/* eslint-disable react/prop-types */
export const Note = ({id,content,date}) => {
    console.log(id,content,date);
  
    return <li key={id}>
    <p>{content}</p>
    <small>
      <time>{date}</time>
    </small>
    </li>
  }
  