import './bouton.css'
// eslint-disable-next-line react/prop-types
const Bouton = ({text , icon}) => {
  return (
    <button className='btn'>
        {icon}
        {text} 
    </button>
  )
}

export default Bouton