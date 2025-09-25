# Habitz

Aplicación web para el seguimiento y gestión de hábitos personales desarrollada con Angular. Este proyecto permite a los usuarios crear, monitorear y mantener sus hábitos diarios de manera organizada y efectiva.

## Descripción del Proyecto

Habitz es una aplicación de seguimiento de hábitos que proporciona las siguientes funcionalidades:

- Gestión de hábitos personalizados
- Panel de control (dashboard) para visualización de progreso
- Sistema de rachas para motivación del usuario
- Configuración personalizable de la aplicación
- Navegación intuitiva y diseño responsivo

## Requisitos del Sistema

### Versiones Mínimas Requeridas

- **Node.js**: Versión 18.19.0 o superior
- **npm**: Versión 10.0.0 o superior
- **Angular CLI**: Versión 18.2.0 o superior

### Verificación de Versiones

Para verificar las versiones instaladas en su sistema, ejecute los siguientes comandos:

```bash
node --version
npm --version
ng version
```

## Instalación del Entorno de Desarrollo

### 1. Instalación de Node.js

Si no tiene Node.js instalado, descárguelo desde el sitio oficial:
- Visite [https://nodejs.org/](https://nodejs.org/)
- Descargue la versión LTS recomendada
- Siga las instrucciones de instalación para su sistema operativo

### 2. Instalación de Angular CLI

Una vez que tenga Node.js instalado, proceda a instalar Angular CLI globalmente:

```bash
npm install -g @angular/cli@18.2.10
```

Verifique la instalación ejecutando:

```bash
ng version
```

## Configuración del Proyecto

### 1. Clonación del Repositorio

```bash
git clone https://github.com/oapava/ux-web-uniandes.git
cd habitz
```

### 2. Instalación de Dependencias

Ejecute el siguiente comando para instalar todas las dependencias del proyecto:

```bash
npm install
```

Este comando instalará automáticamente:
- Angular Framework (v18.2.0)
- Bootstrap (v5.3.8)
- Dependencias de desarrollo y testing

### 3. Verificación de la Instalación

Para confirmar que todas las dependencias se instalaron correctamente:

```bash
npm list --depth=0
```

## Ejecución del Proyecto

### Servidor de Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
ng serve
```

**Opciones adicionales:**

```bash
# Ejecutar en un puerto específico
ng serve --port 4201

# Abrir automáticamente en el navegador
ng serve --open

# Ejecutar en modo verbose para debugging
ng serve --verbose
```

Una vez ejecutado el comando, la aplicación estará disponible en:
- **URL**: http://localhost:4200/
- **Recarga automática**: La aplicación se recarga automáticamente al detectar cambios en el código fuente

### Servidor de Desarrollo con Observación de Cambios

Para desarrollo continuo con compilación automática:

```bash
ng build --watch --configuration development
```

## Comandos de Desarrollo

### Generación de Código

Para generar nuevos componentes y otros elementos de Angular:

```bash
# Generar un nuevo componente
ng generate component nombre-componente

# Generar un servicio
ng generate service nombre-servicio

# Generar una directiva
ng generate directive nombre-directiva

# Generar un pipe
ng generate pipe nombre-pipe

# Generar un guard
ng generate guard nombre-guard

# Generar una interfaz
ng generate interface nombre-interfaz

# Generar una enumeración
ng generate enum nombre-enum
```

### Compilación para Producción

Para crear una versión optimizada para producción:

```bash
ng build
```

Los archivos compilados se almacenarán en el directorio `dist/habitz/`.

**Opciones de compilación:**

```bash
# Compilación con optimizaciones adicionales
ng build --configuration production

# Compilación con análisis de bundle
ng build --stats-json
```

## Estructura del Proyecto

```
habitz/
├── src/
│   ├── app/
│   │   ├── pages/           # Páginas de la aplicación
│   │   ├── shared/          # Componentes compartidos
│   │   ├── styles/          # Sistema de estilos personalizado
│   │   ├── app.component.*  # Componente raíz
│   │   ├── app.routes.ts    # Configuración de rutas
│   │   └── app.config.ts    # Configuración de la aplicación
│   ├── styles.scss          # Estilos globales
│   ├── index.html           # Página HTML principal
│   └── main.ts              # Punto de entrada de la aplicación
├── public/
│   └── images/              # Recursos estáticos (imágenes)
├── angular.json             # Configuración de Angular CLI
├── package.json             # Dependencias y scripts
└── tsconfig.json            # Configuración de TypeScript
```

## Tecnologías Utilizadas

- **Frontend Framework**: Angular 18.2.0
- **Lenguaje**: TypeScript
- **Estilos**: SCSS + Bootstrap 5.3.8
- **Arquitectura**: Standalone Components
- **Routing**: Angular Router con lazy loading
- **Testing**: Karma + Jasmine

## Scripts Disponibles

Los siguientes scripts están disponibles en el archivo `package.json`:

```bash
# Iniciar servidor de desarrollo
npm start

# Compilar para producción
npm run build

# Ejecutar pruebas
npm test

# Compilar con observación de cambios
npm run watch
```

## Solución de Problemas Comunes

### Error de versión de Node.js

Si encuentra errores relacionados con versiones incompatibles:

```bash
# Verificar versión de Node.js
node --version

# Si la versión es menor a 18.19.0, actualice Node.js
```

### Error de dependencias

Si hay problemas con las dependencias:

```bash
# Limpiar cache de npm
npm cache clean --force

# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Puerto ocupado

Si el puerto 4200 está en uso:

```bash
# Usar un puerto diferente
ng serve --port 4201
```

## Configuración Adicional

### Variables de Entorno

Para configuraciones específicas del entorno, puede crear archivos de configuración en:
- `src/environments/environment.ts` (desarrollo)
- `src/environments/environment.prod.ts` (producción)

### Personalización de Estilos

Los estilos personalizados de Habitz se encuentran en:
- `src/app/styles/variables.css` - Variables CSS customizadas
- `src/app/styles/bootstrap-custom.scss` - Personalización de Bootstrap
- `src/styles.scss` - Estilos globales

## Contribución

Para contribuir al proyecto:

1. Cree una nueva rama desde `main`
2. Realice sus cambios siguiendo las convenciones de código
3. Ejecute las pruebas para verificar que no se rompan funcionalidades existentes
4. Envíe un pull request con descripción detallada de los cambios

## Ayuda y Documentación

Para obtener más ayuda sobre Angular CLI:

```bash
ng help
```

Para consultar la documentación oficial de Angular:
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Angular Documentation](https://angular.dev/)

