# 🧪 Login Page Automation - Playwright

Este proyecto automatiza pruebas del formulario de login usando [Playwright](https://playwright.dev/) + [TypeScript](https://www.typescriptlang.org/).

Las pruebas cubren:

- Validación de campos vacíos.
- Manejo de credenciales inválidas.
- Verificación de mensajes de error en la UI.

---

## 📦 Requisitos

- Node.js v18 o superior
- npm o yarn
- Git (opcional, pero recomendado)

---

## ⚙️ Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/tu-repo-login-tests.git
cd tu-repo-login-tests
```

2. **Instalar dependencias**

```bash
npm install
```
ó si usas yarn:

```bash
yarn install
```

---

## 🔐 Configurar variables de entorno

Debes crear un archivo `.env` en la raíz del proyecto:

```bash
touch .env
```

Y agregar dentro:

```
LOGIN_URL=https://app.ninjarmm.com/auth/#/login
```

**Importante:**  
El archivo `.env` ya está ignorado en el `.gitignore` y no será subido a GitHub.

---

## 🏃 Ejecutar las pruebas

Lanzar todos los tests:

```bash
npx playwright test
```

Lanzar un test específico:

```bash
npx playwright test tests/login.spec.ts
```

Ver reporte interactivo:

```bash
npx playwright show-report
```

---

## 🗂️ Estructura del proyecto

```
├── tests/
│   └── login.spec.ts       # Tests automatizados de la página de login
├── utils/
│   └── env.ts              # Carga y validación de variables de entorno
├── .env                    # Variables de entorno (no subir a GitHub)
├── .gitignore
├── package.json
├── playwright.config.ts    # Configuración global de Playwright
└── README.md
```

---

## 📋 Notas adicionales

- Se recomienda no exponer URLs ni credenciales sensibles en los tests.
- Puedes extender este proyecto para probar otros flujos de autenticación.

---

## ✨ Créditos

Proyecto desarrollado como ejercicio de automatización E2E con Playwright y TypeScript.

---

# 🚀 ¡Listo para testear!
