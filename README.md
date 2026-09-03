
# Reconstrucción Grafikar Impresores

Landing page para Grafikar Impresores SpA, 
Diseñada para presentar los servicios, productos, portafolio y canales de contacto de la empresa 
de manera rápida y estructurada.

## Tecnologías Utilizadas
* HTML5 Semántico
* CSS3 (Flexbox, CSS Grid, diseño responsivo)
* Vanilla JavaScript (Interacciones de la interfaz de usuario)
* Control de versiones con Git y GitHub

## Decisiones de Diseño y Arquitectura
* **Optimización de Activos:** Migración a imágenes en formato PNG de alta calidad para preservar la saturación y nitidez del logo oficial y evitar la pérdida de color propia de otros formatos comprimidos.
* **Estructura del Header:** Integración gráfica del logotipo junto al slogan corporativo directamente en Adobe Illustrator para optimizar el código del header y asegurar una lectura visual perfecta.
* **Identidad Visual Real:** Reemplazo de fotografías genéricas por recursos visuales alineados con la actividad real de la imprenta.
* **Sección Hero Simplificada:** Eliminación de categorías superiores redundantes para priorizar un llamado a la acción limpio y directo.
* **Catálogo Dinámico de Productos:** Implementación de un sistema interactivo mediante JavaScript y selectores CSS (`data-target` y paneles dinámicos) en la sección de productos para alternar de forma fluida entre cada categoría, su detalle descriptivo y sus características principales sin recargar la página.

## Contexto de Desarrollo
La estructura inicial, maquetación y refactorización a código limpio fueron desarrolladas con IA, tomando como base referencias visuales de la interfaz original.

## Próximos Pasos (To-Do)
* [x] Integrar y optimizar el logo oficial junto con su versión institucional en PNG.
* [x] Integrar imagenes optimizadas de acuerdo a la actividad de la empresa.
* [x] Incorporar el sistema de categorías dinámicas en la sección de productos.
* [x] Actualizar el contenido general de los servicios y enlaces definitivos.
* [x] Conectar e implementar la lógica del formulario de contacto.
* [ ] Depurar codigo general del proyecto, reorganizado y legible.

## Últimas Actualizaciones

* **Sección Hero:** Incorporación de una impactante imagen de fondo optimizada con un filtro *overlay* para asegurar el contraste, tipografía y elementos centrados para una mejor recepción visual.
* **Sección Qué Hacemos:** Actualización y optimización de botones interactivos y enlaces.
* **Formulario de Contacto:** Mejoras en la estructura y funcionalidad de los campos de contacto.
* **Limpieza y Depuración:** Eliminación de títulos redundantes en las distintas secciones de la landing page y limpieza general del código para mayor rendimiento y orden.

## Últimas Actualizaciones

* **Sección Hero:** Nuevo botón de acceso rápido hacia la sección de productos.
* **Títulos de Secciones:** Creación y estandarización de títulos y subtítulos con líneas decorativas y diseño moderno en *Qué Hacemos*, *Productos*, *Galería* y *Contacto*.
* **Alternancia de Tonos:** Estilización de los fondos por sección (blanco puro, grises suaves y un fondo oscuro elegante en Contacto) para mejorar el impacto visual y la separación de contenidos.
* **Enlaces de Cotización:** Conexión funcional mediante etiquetas `<a>` desde los botones de los productos hacia la sección de contacto.