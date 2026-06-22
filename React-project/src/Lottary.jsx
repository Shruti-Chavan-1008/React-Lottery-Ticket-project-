import { useState } from 'react'
import './Lottary.css'
import { genTicket ,sum } from './helper';



export default function Lottary(){

    let [Ticket, setTicket]=useState(genTicket(3));
    let isWinning=sum(Ticket)===15;

    let buyTicket=()=>{
        setTicket(genTicket(3));
    }

    return(
        <div>
             <h1>Lottary Game!!!</h1>
             <div className="ticket">
                <span>{Ticket[0]}</span>
                <span>{Ticket[1]}</span>
                <span>{Ticket[2]}</span>

             </div>
             <button onClick={buyTicket}> Buy New Ticket</button>
             <h3>{isWinning && "congratulation,you win!!"}</h3>
             <h3>{!isWinning && " you loss!!"}</h3>
        </div>
    );
}