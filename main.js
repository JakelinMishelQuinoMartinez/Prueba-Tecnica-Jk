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

const ticketForm = document.getElementById("ticketForm");

ticketForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const departamento = document.getElementById("departamento").value;
    const tipoProblema = document.getElementById("tipoProblema").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const prioridad = document.getElementById("prioridad").value;
    if (
        !nombre ||
        !departamento ||
        !tipoProblema ||
        !descripcion ||
        !prioridad
    ) {
        alert("Todos los campos son obligatorios.");
        return;
    }
    if (nombre.length < 3) {
        alert("El nombre debe contener al menos 3 caracteres.");
        return;
    }
    if (descripcion.length < 10) {
        alert("La descripción debe contener al menos 10 caracteres.");
        return;
    }
    const nuevoTicket = {
        id: Date.now(),
        nombre: nombre,
        departamento: departamento,
        tipoProblema: tipoProblema,
        descripcion: descripcion,
        prioridad: prioridad,
        estado: "pendiente",
        fechaCreacion: new Date().toISOString().split("T")[0]
    };
    tickets.push(nuevoTicket);
    localStorage.setItem(
        "tickets",
        JSON.stringify(tickets)
    );
    ticketForm.reset();
    modalTicket.style.display = "none";
    renderizarTickets(tickets);
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
                <button class="btn-cambiar-estado">
                    Cambiar Estado
                </button>
                <button class="btn-eliminar">
                    Eliminar
                </button>
            </td>
        `;
        const btnCambiarEstado =
            fila.querySelector(".btn-cambiar-estado");
        btnCambiarEstado.addEventListener("click", () => {
            if (ticket.estado === "pendiente") {
                ticket.estado = "en proceso";
            } else if (ticket.estado === "en proceso") {
                ticket.estado = "resuelto";
            } else {
                ticket.estado = "pendiente";
            }
            localStorage.setItem(
                "tickets",
                JSON.stringify(tickets)
            );
            renderizarTickets(tickets);
        });
        const btnEliminar =
            fila.querySelector(".btn-eliminar");
        btnEliminar.addEventListener("click", () => {
            const confirmar = confirm(
                "¿Está seguro de que desea eliminar este ticket?"
            );
            if (!confirmar) return;
            tickets = tickets.filter(
                item => item.id !== ticket.id
            );
            localStorage.setItem(
                "tickets",
                JSON.stringify(tickets)
            );
            renderizarTickets(tickets);
        });
        ticketsBody.appendChild(fila);
    });
}