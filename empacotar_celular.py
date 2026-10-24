#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Empacotador Offline Zero-Install para Celular
Reinado Delta • Pokémon TCG Pre-Release Assistant

Compila HTML, CSS, JavaScript dos dados, engine e app em um único arquivo
autocontido (.html) que roda diretamente em qualquer smartphone (Android/iOS)
sem instalar absolutamente nada e 100% offline (mesmo em Modo Avião).
"""

import os
import re
import sys

# Garante suporte a UTF-8 no console do Windows sem erros de charmap
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
APP_DIR = os.path.join(BASE_DIR, "app")

INDEX_PATH = os.path.join(APP_DIR, "index.html")
CSS_PATH = os.path.join(APP_DIR, "style.css")
DATA_PATH = os.path.join(APP_DIR, "data.js")
ENGINE_PATH = os.path.join(APP_DIR, "engine.js")
APP_JS_PATH = os.path.join(APP_DIR, "app.js")

OUT_ROOT_PATH = os.path.join(BASE_DIR, "assistente_offline.html")
OUT_APP_PATH = os.path.join(APP_DIR, "assistente_offline.html")

def build_single_file():
    print("=" * 64)
    print(" 📦 GERANDO PACOTE OFFLINE ZERO-INSTALL PARA CELULAR")
    print("=" * 64)

    # 1. Carrega os arquivos fontes
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    with open(CSS_PATH, "r", encoding="utf-8") as f:
        css = f.read()

    with open(DATA_PATH, "r", encoding="utf-8") as f:
        data_js = f.read()

    with open(ENGINE_PATH, "r", encoding="utf-8") as f:
        engine_js = f.read()

    with open(APP_JS_PATH, "r", encoding="utf-8") as f:
        app_js = f.read()

    # 2. Injeta CSS inline
    css_inline = f"<style>\n/* Bundle CSS Offline */\n{css}\n</style>"
    html = re.sub(
        r'<link\s+rel=["\']stylesheet["\']\s+href=["\']style\.css["\']\s*/?>',
        lambda _: css_inline,
        html
    )

    # 3. Injeta meta tags para comportamento de App Nativo no Celular (PWA standalone)
    mobile_meta = """  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="theme-color" content="#0f172a">
  <meta name="apple-mobile-web-app-title" content="Reinado Delta">"""
    
    html = html.replace('<meta name="viewport" content="width=device-width, initial-scale=1.0">',
                        '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' + mobile_meta)

    # 4. Injeta JS inline
    js_inline = f"""<script>
// ==========================================
// BUNDLE JS OFFLINE - DADOS, ENGINE E APP
// ==========================================

// --- DATA ---
{data_js}

// --- ENGINE ---
{engine_js}

// --- APP ---
{app_js}
</script>"""

    # Remove as tags de script externas e coloca o bundle inline
    html = re.sub(
        r'<script\s+src=["\']data\.js["\']></script>\s*<script\s+src=["\']engine\.js["\']></script>\s*<script\s+src=["\']app\.js["\']></script>',
        lambda _: js_inline,
        html
    )

    # 5. Salva na raiz e dentro da pasta app/
    with open(OUT_ROOT_PATH, "w", encoding="utf-8") as f:
        f.write(html)

    with open(OUT_APP_PATH, "w", encoding="utf-8") as f:
        f.write(html)

    size_kb = os.path.getsize(OUT_ROOT_PATH) / 1024

    print(f" [OK] Arquivo gerado com sucesso!")
    print(f"  -> Raiz: {OUT_ROOT_PATH} ({size_kb:.1f} KB)")
    print(f"  -> App:  {OUT_APP_PATH} ({size_kb:.1f} KB)")
    print("=" * 64)
    print(" 🚀 COMO USAR NO CELULAR SEM INSTALAR NADA:")
    print(" 1. Envie o arquivo 'assistente_offline.html' para si mesmo pelo WhatsApp/Telegram/Drive")
    print(" 2. Toque no arquivo no celular e escolha 'Abrir com Chrome' ou 'Abrir com Safari'")
    print(" 3. Ele roda 100% offline (Modo Avião no meio da loja de cartas)")
    print(" 4. (Opcional) No navegador do celular: Menu > 'Adicionar à tela de início'")
    print("=" * 64)

if __name__ == "__main__":
    build_single_file()
