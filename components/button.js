const buttonStyle = {
  backgroundColor: '#C7C329',
  color: 'white',
  borderRadius: '2px',
  border: 'none',
  paddingLeft: '2em',
  paddingRight: '2em',
  paddingTop: '5px',
  paddingBottom: '5px',
  fontSize: '24px'
}

const Button = (props) => (
  <button
    onClick={props.action}
    style={buttonStyle}
  >
    {props.icon ? <Icon name={props.icon} /> : null}
    {props.text}
  </button>
)

export default Button;
