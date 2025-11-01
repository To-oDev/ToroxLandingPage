# Torox Landing Page

Torox es un estudio de videojuegos independiente para roblox.
Esta landing page es el prototipo del sitio oficial de Torox Studio.

## Incluye

- Información general del estudio y sus integrantes.

- Un background dinamico utilizando WebGL.

- Un formulario de contacto que se envía a [ToroxContactServer](https://github.com/To-oDev/ToroxContactServer), un endpoint construido en Java con Springboot. 
    > 💡 Este endpoint recibe las peticiones POST del formulario y responde de manera automatica con un correo de notificación para el estudio y un correo de respuesta automatica al remitente.

> ⚠️ ToroxLandingPage y ToroxContactServer han sido probados en modo localhost. Es necesario adaptarlo para su uso en producción.

---

## 🚀 Características

- Fondo animado con shaders WebGL
- Tarjetas animadas de información
- Formulario de contacto
- Pruebas de forma local

---

## 🧪 Cómo probar

```bash
git clone https://github.com/To-oDev/ToroxLandingPage
cd ToroxLandingPage
npm install
npm run dev
```

Navega la Landing.
Revisa la información.
Contacta con el formulario.
> ⚠️ Para que el formulario sea recibido y se produzca la respuesta automatica es necesario descargar [ToroxContactServer](https://github.com/To-oDev/ToroxContactServer) y correr de forma local con Intelli J IDEA Community Edition,