using static System.Runtime.InteropServices.JavaScript.JSType;

namespace SignalRChat.Modelo
{
    public class clsMensajeUsuario
    {
        private string nombreUsuario = "";
        private string mensajeUsuario = "";
        

    public string NombreUsuario
    {
        get { return nombreUsuario; }
        set { nombreUsuario = value; }
    }

    public string MensajeUsuario
    {
        get { return mensajeUsuario; }
        set { mensajeUsuario = value; }
    }
    }

}
