/* eslint-disable react/prop-types */
export const Note = ({content,date}) => {
    console.log(content,date);
    //console.log(props)
  
    return <li>
    <p>{content}</p>
    <small>
      <time>{date}</time>
    </small>
    </li>
  }
  