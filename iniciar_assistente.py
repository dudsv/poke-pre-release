import http.server
import socket
import socketserver
import webbrowser
import os
import sys

# Garante suporte a UTF-8 no console do Windows sem erros de charmap
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

PORT = 3000
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "app")

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def print_qr_code(data_url):
    try:
        import qrcode
        qr = qrcode.QRCode(border=1)
        qr.add_data(data_url)
        print("\n [QR CODE] Aponte a câmera do celular para abrir instantaneamente:")
        qr.print_ascii(invert=True)
    except Exception:
        pass

def main():
    # 1. Garante que o arquivo único offline esteja 100% atualizado
    try:
        import empacotar_celular
        empacotar_celular.build_single_file()
    except Exception as e:
        print(f"Aviso ao empacotar offline: {e}")

    local_ip = get_local_ip()
    url_local = f"http://localhost:{PORT}"
    url_network = f"http://{local_ip}:{PORT}"
    url_offline = f"http://{local_ip}:{PORT}/assistente_offline.html"

    print("=" * 68)
    print(" ⚡ ASSISTENTE TÁTICO: REINADO DELTA (POKÉMON TCG - 10 BOOSTERS)")
    print("=" * 68)
    print(f" ► No Computador:      {url_local}")
    print(f" ► No Celular (Wi-Fi): {url_network}")
    print(f" ► Baixar no Celular:  {url_offline}")
    print(f" ► Arquivo Offline:    {os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assistente_offline.html')}")
    print("=" * 68)

    # Imprime QR code no terminal se qrcode estiver instalado
    print_qr_code(url_network)

    print("=" * 68)
    print(" 📲 DICA PARA O TORNEIO AMANHÃ:")
    print(" - Envie o arquivo 'assistente_offline.html' pelo WhatsApp para si mesmo")
    print(" - Abra no Chrome ou Safari do celular (funciona offline em Modo Avião)")
    print("=" * 68)
    print(" Abrindo no seu navegador...")
    print(" Pressione Ctrl+C para encerrar quando terminar o evento.")
    print("=" * 68)

    # Abre o navegador local automaticamente
    webbrowser.open(url_local)

    # Inicia o servidor
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor encerrado. Boa sorte no torneio!")
            sys.exit(0)

if __name__ == "__main__":
    main()
