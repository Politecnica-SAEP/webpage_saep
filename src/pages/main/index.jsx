import React from "react";  
import Header from '../../components/header'
import Calendar from "../../components/calendar/index";
import Day from "../../components/day";

export default function Home(){ 

    return(
        <>
            <Header />
            <Calendar>
                <Day title="Segunda-Feira (18/10)" day={18}/>
                <Day title="Terça-Feira (19/10)" day={19}/>
                <Day title="Quarta-Feira (20/10)" day={20}/>
                <Day title="Quinta-Feira (21/10)" day={21}/>
                <Day title="Sexta-Feira (22/10)" day={21}/>
            </Calendar>
        </>
    );
}