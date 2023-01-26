
import './style.css'

export function Card(props) {

    let name = props.name

  return (
    <div className='card'> 
      <strong> {name} </strong>
      <small>{props.time}</small>
    </div>
  )
}


