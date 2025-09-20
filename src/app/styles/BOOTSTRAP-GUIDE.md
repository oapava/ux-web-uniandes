# 🎨 Bootstrap + Habitz - Guía de Uso

## ✅ Configuración Completada

Bootstrap ha sido integrado exitosamente en tu proyecto Habitz con personalización completa de colores y componentes.

## 🎨 Colores Disponibles

### **Colores Principales (Bootstrap personalizado)**
- `primary` → `#2FA39A` (Teal calmo)
- `secondary` → `#84A98C` (Sage)
- `warning` → `#F4B860` (Ámbar suave - tu accent)
- `success` → `#22c55e` (Verde éxito)
- `danger` → `#ef4444` (Rojo error)
- `info` → `#3b82f6` (Azul información)

### **Color Personalizado**
- `accent` → `#F4B860` (Solo disponible en clases custom)

## 🚀 Cómo Usar

### **1. Clases Bootstrap Estándar (con colores Habitz)**
```html
<!-- Botones -->
<button class="btn btn-primary">Acción Principal</button>
<button class="btn btn-secondary">Acción Secundaria</button>
<button class="btn btn-warning">Racha/Logro</button>

<!-- Alerts -->
<div class="alert alert-primary">Información principal</div>
<div class="alert alert-warning">Logro desbloqueado</div>

<!-- Cards -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Mi Hábito</h5>
    <p class="card-text">Descripción del hábito</p>
  </div>
</div>

<!-- Badges -->
<span class="badge bg-primary">Nuevo</span>
<span class="badge bg-warning">Racha</span>
```

### **2. Clases Personalizadas Habitz**
```html
<!-- Botones Habitz -->
<button class="btn-habitz-primary">Completar Hábito</button>
<button class="btn-habitz-secondary">Ver Detalles</button>
<button class="btn-habitz-accent">🔥 Racha</button>

<!-- Cards Habitz -->
<div class="card-habitz">
  <div class="card-body">
    <h5 class="card-title">Ejercicio Matutino</h5>
    <p class="card-text">30 minutos de cardio</p>
    <span class="badge-streak">🔥 7 días</span>
  </div>
</div>

<!-- Alertas Habitz -->
<div class="alert-habitz-success">¡Hábito completado exitosamente!</div>
<div class="alert-habitz-info">Nuevo logro desbloqueado</div>

<!-- Formularios Habitz -->
<input type="text" class="form-control-habitz" placeholder="Nombre del hábito">
```

### **3. Sistema de Grid Bootstrap**
```html
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <!-- Contenido de hábito -->
    </div>
    <div class="col-12 col-md-6 col-lg-8">
      <!-- Estadísticas -->
    </div>
  </div>
</div>
```

### **4. Utilidades de Espaciado**
```html
<!-- Margin y Padding (0-10) -->
<div class="p-4 m-3">Contenido con padding y margin</div>
<div class="mt-5 mb-4">Margin top y bottom</div>

<!-- Flexbox -->
<div class="d-flex justify-content-between align-items-center">
  <span>Hábito</span>
  <button class="btn btn-primary btn-sm">✓</button>
</div>
```

## 🎯 Componentes Específicos para Habitz

### **Tarjeta de Hábito Completa**
```html
<div class="card-habitz mb-3">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-start">
      <div>
        <h5 class="card-title text-primary">Meditar</h5>
        <p class="card-text text-muted">10 minutos diarios</p>
      </div>
      <span class="badge-streak">🔥 5</span>
    </div>
    <div class="progress mt-3" style="height: 8px;">
      <div class="progress-bar bg-primary" style="width: 75%"></div>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <small class="text-muted">75% completado esta semana</small>
      <button class="btn btn-primary btn-sm">Completar</button>
    </div>
  </div>
</div>
```

### **Dashboard de Estadísticas**
```html
<div class="row g-4">
  <div class="col-6 col-md-3">
    <div class="card text-center">
      <div class="card-body">
        <h2 class="text-primary mb-0">7</h2>
        <small class="text-muted">Días seguidos</small>
      </div>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="card text-center">
      <div class="card-body">
        <h2 class="text-warning mb-0">12</h2>
        <small class="text-muted">Hábitos activos</small>
      </div>
    </div>
  </div>
</div>
```

## 📱 Responsive Design

Bootstrap ya incluye clases responsive que funcionan perfectamente:

```html
<!-- Ocultar/mostrar en diferentes tamaños -->
<div class="d-none d-md-block">Solo en desktop</div>
<div class="d-block d-md-none">Solo en móvil</div>

<!-- Columnas responsive -->
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
  <!-- Se adapta automáticamente -->
</div>
```

## 🔧 Personalización Adicional

Si necesitas más personalización, puedes:

1. **Modificar variables en** `bootstrap-custom.scss`
2. **Agregar nuevas clases en** `styles.scss`
3. **Usar las variables CSS de Habitz** con `var(--primary-500)`

## 💡 Mejores Prácticas

1. **Usa clases Bootstrap estándar** para layout y spacing
2. **Usa clases Habitz personalizadas** para componentes específicos
3. **Combina ambos sistemas** según necesidades
4. **Mantén consistencia** en el uso de colores
5. **Aprovecha el sistema de grid** para responsive design

¡Ya tienes Bootstrap completamente integrado y personalizado con los colores de Habitz! 🎉