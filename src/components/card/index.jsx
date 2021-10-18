import './style.css'

export default function Card(props) {



    return (
     <div className="card">
         <h4 className='title'>{props.titulo}</h4>
         <p className="scheduled-hour">{props['horário']}</p>
         <p className="speaker">Palestrantes: {props.participantes.toString().split(',').join(' | ')}</p>
         <p className="keywords"> Palavras-chave: {props['palavras-chave'].join(', ').toUpperCase()}</p>
         <a href= {props.link} target='_blank' rel="noreferrer"> {props['Nome do Link']}</a>
     </div>   
    )
}