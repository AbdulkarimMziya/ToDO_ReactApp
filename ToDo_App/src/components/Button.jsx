import PropTypes from "prop-types"
const Button = ({color, text}) => {
    // onClick() function called in the button attribute
    // logs 'Clickes' in the console
    const onClick = () => {
        console.log('Clicked')
    }

  return (
  <button 
  onClick={onClick}
  style={{backgroundColor: color}}  
  className="btn"
  >
    {text}
  </button>
  )
}

Button.defaultProps = {
    color: 'black'
}

//Proptypes are meant to help with error handling
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
