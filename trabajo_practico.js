function mostrarTicket(){
    document.getElementById('totalTicket').style.display='block';
    let totalPago = document.getElementById('totalPago');
    totalPago.textContent = "Total a pagar:$ " + capturaDeDato(); 
}



function capturaDeDato(){
    let CantidadTicket = document.getElementById('cantidadTicket').value;
    let descuentoTicket = document.getElementById('descuentoTicket').value;
        if (descuentoTicket == "Estudiante"){
            CantidadDeDato= (200 - (200 * 0.8))*CantidadTicket;
        } 
        else if (descuentoTicket == "Trainee"){
            CantidadDeDato= (200-(200 * 0.5))*CantidadTicket;
        }
        else if (descuentoTicket == "Junior"){
            CantidadDeDato = (200 -(200 * 0.15))*CantidadTicket;
        }
        else
            CantidadDeDato = 200 * CantidadTicket;
    return CantidadDeDato
    ;
}