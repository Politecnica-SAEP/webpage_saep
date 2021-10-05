import React from "react";
import Header from '../../components/header'
import Calendar from "../../components/calendar/index";
import Day from "../../components/day";

export default function Home() {

    return (
        <>
            <Header />

            <Calendar>
                <h4>A Semana Acadêmica da Escola Politécnica da Unisinos ocorrerá dos dias 18 à 23 de outuburo de 2021, confira nossa programação abaixo e <a href='https://www.unisinos.br/lab/cursos/vi-semana-academica-da-escola-politecnica-saep-ex920916-00001-1415' >faça sua inscrição</a> </h4>
                <Day title="18/10 - Segunda-Feira" day={18} />
                <Day title="19/10 - Terça-Feira" day={19} />
                <Day title="20/10 - Quarta-Feira" day={20} />
                <Day title="21/10 - Quinta-Feira" day={21} />
                <Day title="22/10 - Sexta-Feira" day={22} />
            </Calendar>
        </>
    );
}