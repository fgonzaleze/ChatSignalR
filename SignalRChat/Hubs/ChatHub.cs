using Microsoft.AspNetCore.SignalR;
using SignalRChat.Modelo;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(clsMensajeUsuario objMensajeUsuario)
        {
            await Clients.All.SendAsync("ReceiveMessage", objMensajeUsuario);
        }
    }
}
