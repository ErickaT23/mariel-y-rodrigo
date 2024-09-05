// Asegúrate de que el archivo invitados.js esté en la misma carpeta
import { guests } from './invitados'; 

document.addEventListener("DOMContentLoaded", function() {

    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestName = queryParams.nombre || "Invitado";
    const passes = queryParams.pases || 0;

    // Mostrar el nombre del invitado
    document.getElementById('guest-name').textContent = `¡Hola ${guestName}!`;

    // Mostrar la cantidad de pases solo si existen
    if (passes > 0) {
        document.getElementById('passes').textContent = `${passes} pase${passes > 1 ? 's' : ''}`;
    } else {
        // Si no hay pases, oculta la sección
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});
