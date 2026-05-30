let tickets = [];

const modalTicket = document.getElementById("modalTicket");
const btnNuevoTicket = document.getElementById("btnNuevoTicket");
const btnCancelar = document.getElementById("btnCancelar");
const ticketsBody = document.getElementById("ticketsBody");

btnNuevoTicket.addEventListener("click", () => {
    modalTicket.style.display = "flex";
});

btnCancelar.addEventListener("click", () => {
    modalTicket.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {

    const ticketsGuardados = localStorage.getItem("tickets");

    if (!ticketsGuardados) {
        tickets = [
            {
                id: 1,
                nombre: "Juan Pérez",
                departamento: "Contabilidad",
                tipoProblema: "Hardware",
                descripcion: "La impresora principal no responde al enviar documentos.",
                prioridad: "alta",
                estado: "pendiente",
                fechaCreacion: "2026-05-29"
            },
            {
                id: 2,
                nombre: "María López",
                departamento: "Recursos Humanos",
                tipoProblema: "Software",
                descripcion: "El sistema de nómina presenta errores al iniciar sesión.",
                prioridad: "media",
                estado: "en proceso",
                fechaCreacion: "2026-05-28"
            },
            {
                id: 3,
                nombre: "Carlos Gómez",
                departamento: "Ventas",
                tipoProblema: "Red",
                descripcion: "No hay conexión a internet en varios equipos del área.",
                prioridad: "baja",
                estado: "resuelto",
                fechaCreacion: "2026-05-27"
            }
        ];
        localStorage.setItem(
            "tickets",
            JSON.stringify(tickets)
        );
    } else {
        tickets = JSON.parse(ticketsGuardados);
    }
    renderizarTickets(tickets);
});

function renderizarTickets(lista) {
    ticketsBody.innerHTML = "";
    lista.forEach(ticket => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${ticket.id}</td>
            <td>${ticket.nombre}</td>
            <td>${ticket.departamento}</td>
            <td>${ticket.tipoProblema}</td>
            <td>${ticket.prioridad}</td>
            <td>${ticket.estado}</td>
            <td>${ticket.fechaCreacion}</td>
            <td>
                <!-- Botones de acción
                     (Actualizar / Eliminar)
                     se implementarán después -->
            </td>
        `;
        ticketsBody.appendChild(fila);
    });
}