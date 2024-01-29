/* eslint-disable react/prop-types */

const Notification = ({ message,error }) => {
    if (message === null || message === '' || message === undefined) {
      return null
    }
    
    if (error === true) {
        return (
            <div className="messageError">
                {message}
            </div>
        )
    } else {
        return (
            <div className="messageNoError">
                {message}
            </div>
        )
    }

    
}

export default Notification