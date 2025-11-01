# 🌆 Torox Landing Page

**Torox Landing Page** es el prototipo del sitio oficial de **Torox Studio**, un estudio independiente de desarrollo de videojuegos para **Roblox**.  
No es un sitio final, sino un entorno de prueba local donde se experimenta con diseño, animación y comunicación entre frontend y backend.  

---

## 🎯 Objetivo

- Presentar la identidad visual y técnica del estudio.  
- Probar un entorno interactivo con **WebGL**.  
- Implementar un **sistema de contacto funcional** conectado a un backend real.  
- Servir como base para la futura web oficial del estudio.  

---

## 🧩 Qué incluye

- Sección de **información general** del estudio y sus integrantes.  
- **Fondo dinámico** sencillo construido con shaders WebGL.  
- **Formulario de contacto** conectado al endpoint [ToroxContactServer](https://github.com/To-oDev/ToroxContactServer) (Spring Boot).  
  > 💡 El servidor recibe peticiones **POST**, envía un correo automático al estudio y una **respuesta automática** al remitente.

> ⚠️ Tanto *ToroxLandingPage* como *ToroxContactServer* funcionan en entorno **localhost**.  
> Para uso en producción será necesario configurar variables de entorno y desplegar ambos servicios.

---

## 🚀 Características

- Fondo animado con **WebGL shaders**.  
- Tarjetas con **transiciones simples y efectos suaves**.  
- **Formulario funcional** conectado a backend Java.  
- Flujo completo de pruebas locales.  

---

## 🧪 Cómo probarlo

1. Clona el repositorio e instala dependencias
```bash
git clone https://github.com/To-oDev/ToroxLandingPage
cd ToroxLandingPage
npm install
````

3. Ejecuta el entorno de desarrollo
````bash
npm run dev
````

4. Abre el navegador y explora la landing.
Completa el formulario para probar la integración con el backend.

> ⚠️ Para recibir correos automáticos es necesario tener corriendo localmente ToroxContactServer en IntelliJ IDEA Community Edition.

# 🧠 Uso

Este proyecto sirve como caso práctico de integración entre frontend y backend, ideal para:

Comprender el flujo completo entre cliente y servidor.

Experimentar con envío de formularios y respuestas automáticas.

Aprender a conectar una aplicación web con un backend en Spring Boot.

Explorar el uso de WebGL en interfaces web.