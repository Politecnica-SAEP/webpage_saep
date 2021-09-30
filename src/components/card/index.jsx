import './style.css'

export default function Card(props) {
    
    //const object = props.event
    
    console.log('props')

    const checkHour = (horario) => {
        if(horario.toLowerCase() === 'noite'.toLowerCase()) {
            return '(20h - 22h)'
        }

        if(horario === 'Vespertino'.toLowerCase()) {
            return '(18h - 19h)'
        }

        return '(15h - 17h)'
    }


    return (
     <div className="card">
         <h4 className='title'>{props.titulo}</h4>
         <p className="scheduled-hour">{`${props.horario}: ${checkHour(props.horario)}`}</p>
         <p className="speaker">Palestrantes: {props.participantes.split(',').join(' | ')}</p>
         <p className="keywords"> Palavras-chave: {props['palavras-chave'].join(', ').toUpperCase()}</p>
         <a href= {props.link ? props.link : `https://www.google.com.br/`} target='_blank' rel="noreferrer"> Link para a reunião</a>

         
     </div>   
    )
}