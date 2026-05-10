# 🏥 Sistema de gestión de turnos

Este proyecto es una API REST desarrollada con Node.js, Express y MongoDB Atlas.
Permite gestionar pacientes, especialistas y turnos médicos.
Incluye autenticación de usuarios y validación de datos.

---

## 🚀 Tecnologías usadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Zod (validación de datos)
- JSON Web Token (JWT)

---

## 📂 Estructura del proyecto

```txt
backend/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── validations/
└── index.js
```

---

## ⚙️ Instalación

1. Clonar el repositorio  
2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env` en la raíz del backend

4. Ejecutar el proyecto:

```bash
npm start
```

---

## 📡 Endpoints principales

### 🔐 Users (Auth)
- POST /users/register
- POST /users/login
  
### 👤 Patients
- GET /api/patients
- POST /api/patients
- PUT /api/patients/:id
- DELETE /api/patients/:id

### 🩺 Practitioners
- GET /api/practitioners
- POST /api/practitioners
- PUT /api/practitioners/:id
- DELETE /api/practitioners/:id

### 📅 Appointments
- GET /api/appointments
- POST /api/appointments
- PUT /api/appointments/:id
- DELETE /api/appointments/:id

---

## 🔐 Autenticación

La API utiliza JWT para proteger rutas.

Para acceder a rutas protegidas se debe enviar el token en el header:

Authorization: Bearer <token>

---

## 🧪 Cómo probar la API

Se recomienda usar Postman o Thunder Client para probar los endpoints.

---

## 🧠 Notas importantes

- La base de datos se gestiona con MongoDB Atlas
- Los IDs se generan automáticamente con MongoDB (`_id`)
- Todas las validaciones se realizan antes de llegar al controlador
- La arquitectura sigue el patrón: routes → controllers → models

---

## 👩‍💻 Autor

Proyecto desarrollado por Ariadna Salomone✨
