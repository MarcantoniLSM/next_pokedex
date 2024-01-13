import './Card.css'

export default function Card(props){
    return(<div className='card'>
            <span className='name'>{props.name}</span>
            <img src={props.img} alt=""/>
        </div>)
}