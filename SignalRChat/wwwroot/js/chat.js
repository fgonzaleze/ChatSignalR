"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

// Clase del mensaje de usuario
class clsMensajeUsuario {
    constructor(NombreUsuario, MensajeUsuario) {
        this.NombreUsuario = NombreUsuario;
        this.MensajeUsuario = MensajeUsuario;
    }
}

document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (objMensajeUsuario) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = `${objMensajeUsuario.NombreUsuario} dice ${objMensajeUsuario.MensajeUsuario}`;
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    let objMensajeusuario = new clsMensajeUsuario()
    objMensajeUsuario.MensajeUsuario = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", NombreUsuario, MensajeUsuario).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
