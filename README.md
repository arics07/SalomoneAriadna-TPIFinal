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

Ejemplo REGISTER un nuevo usuario:

```bash
{
  "email": "ari@test.com",
  "password": "123456"
}
```

Ejemplo LOGIN de un usuario registrado:

```bash
{
  "email": "ari@test.com",
  "password": "123456"
}
```
La respuesta recibida desde el servidor será de la forma: 

```bash
{
  "message": "Login exitoso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

El token JWT debe usarse en el header Authorization para acceder a rutas protegidas.

  
### 👤 Patients
- GET /api/patients
- POST /api/patients
- PUT /api/patients/:id
- DELETE /api/patients/:id

Ejemplo para agregar un nuevo paciente:

```bash
{
  "name": "María López",
  "dni": "35111222",
  "email": "maria@test.com",
  "phone": "2215551234",
  "notes": "Paciente desde mayo 2019"
}
```

⚠️ Los campos name, dni y phone son obligatorios y deber ser ingresados siempre. 

### 🩺 Practitioners
- GET /api/practitioners
- POST /api/practitioners
- PUT /api/practitioners/:id
- DELETE /api/practitioners/:id

Ejemplo para agregar un nuevo especialista:

```bash
{
  "name": "Ana Martinez",
  "specialty": "Cirugía"
}
```
⚠️ Restricción de especialidades

El campo specialty solo acepta un conjunto de valores predefinidos:

"Lic. en Nutrición"
"Dermatología"
"Cardiología"
"Psicología"

Estos valores pueden ser modificados o ampliados desde el backend según las necesidades del sistema.


### 📅 Appointments
- GET /api/appointments
- POST /api/appointments
- PUT /api/appointments/:id
- DELETE /api/appointments/:id

Ejemplo: para agregar un nuevo turno:

```bash
{
  "patient": "69fffcbafbdfc407c5520476",
  "practitioner": "69fffbbc37e640b6eb8788af",
  "date": "2026-05-10T18:00:00.000Z",
  "status": "confirmado",
  "notes": "Consulta nutricional inicial"
}
```

⚠️ Restricción del estado del turno:

El campo status solo acepta un conjunto de valores predefinidos:

"confirmado"
"en espera"
"atendido"
"cancelado"

Estos valores pueden ser modificados o ampliados desde el backend según las necesidades del sistema.

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
