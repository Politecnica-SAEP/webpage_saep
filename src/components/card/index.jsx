import './style.css'

export default function Card(props) {

    
    const checkHour = (horario) => {
        if(horario.includes('noite')) {
            return '(20h - 22h)'
        }

        if(horario.includes('vespertino')) {
            return '(18h - 19h)'
        }

        if(horario.includes('tarde')) {
            return '(15h - 17h)'
        }

        return '(8h30 - 11h30)'
        
    }


    const checkLink = (link) => {
        if(link.toLowerCase() === 'presencial') {
            return false;
        }
        return true;
    }

    return (
     <div className="card">
         <h4 className='title'>{props.titulo}</h4>
         <p className="scheduled-hour">Horário: {checkHour(props.horario)}</p>
         <p className="speaker">Palestrantes: {props.participantes.toString().split(',').join(' | ')}</p>
         <p className="keywords"> Palavras-chave: {props['palavras-chave'].join(', ').toUpperCase()}</p>
         <a href= {checkLink(props.link) ? props.link : `http://www.unisinos.br/mapa/localiza-se-campus-sao-leopoldo.php`} target='_blank' rel="noreferrer"> {checkLink(props.link) ? `Link para o Teams` : `Presencial`}</a>
     </div>   
    )
}