import React from "react";  
import Header from '../../components/header'
import Calendar from "../../components/calendar/index";
import Day from "../../components/day";

export default function Home(){ 

    return(
        <>
            <Header />
            <Calendar>
                <Day title="18/10 - Segunda-Feira" day={18}/>
                <Day title="19/10 - Terça-Feira" day={19}/>
                <Day title="20/10 - Quarta-Feira" day={20}/>
                <Day title="21/10 - Quinta-Feira" day={21}/>
                <Day title="22/10 - Sexta-Feira" day={22}/>
            </Calendar>
        </>
    );
}