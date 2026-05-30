# 🎫 Sistema de Tickets de Soporte Técnico (MVP)

Un prototipo funcional de Single Page Application (SPA) desarrollado para la gestión interna de tickets de soporte técnico. Este proyecto fue diseñado aplicando metodologías ágiles de desarrollo por fases, control de versiones semántico y optimización guiada con Inteligencia Artificial.

## 🚀 Características Principales

* **CRUD Completo en Memoria:** Creación, lectura, actualización de estado cíclica (`pendiente` ➔ `en proceso` ➔ `resuelto`) y eliminación de tickets.
* **Persistencia de Datos:** Uso de `LocalStorage` para el almacenamiento local de la información, incluyendo 3 registros semilla autogenerados en la primera carga.
* **Validaciones Robustas:** Control de formularios en el cliente que valida campos obligatorios, longitud mínima de nombres (min. 3 caracteres) y descripciones detalladas (min. 10 caracteres).
* **Filtros Cruzados en Tiempo Real:** Filtros dinámicos por **Estado** y **Prioridad** que mantienen la sincronización de la interfaz incluso tras alteraciones en los datos (UX optimizada).

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica y formularios modales nativos.
* **CSS3:** Diseño responsivo, Flexbox, Media Queries y Arquitectura de color mediante `:root`.
* **JavaScript (ES6+):** Manipulación del DOM, programación basada en eventos, manejo de Arrays (`.filter()`, `.forEach()`) y persistencia con la API de `LocalStorage`.

## 👤 Autor
Jakelin Quino