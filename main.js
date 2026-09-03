/**
 * Script Principal para Grafikar Impresores SpA
 * Controla la interactividad de las pestañas de productos y el formulario de contacto.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Lógica para alternar las pestañas dinámicas en la sección de Productos
    const menuItems = document.querySelectorAll(".prod-item");
    const panels = document.querySelectorAll(".prod-panel-content");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remover clases activas de todos los elementos
            menuItems.forEach(i => i.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // Activar el elemento seleccionado
            item.classList.add("active");

            // Mostrar el panel correspondiente según el atributo data-target
            const targetId = item.getAttribute("data-target");
            const targetPanel = document.getElementById(targetId);
            
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });

    // 2. Simulación y manejo del envío del formulario de cotización
    const cotizacionForm = document.getElementById('cotizacionForm');
    
    if (cotizacionForm) {
        cotizacionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes conectar posteriormente con un servicio de correo o backend
            alert('¡Gracias por tu mensaje! Tu solicitud de cotización ha sido enviada con éxito.');
            this.reset();
        });
    }
});