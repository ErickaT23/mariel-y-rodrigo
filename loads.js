const guests = [
    { name: "Familia Worford Ramirez", passes: 3 },
    { name: "Rodrigo", passes: 1 },
    { name: "Lucy y Rod", passes: 2 },
    { name: "Sofi Wolford", passes: 2 },
    { name: "Camilo Wolford", passes: 3 },
    { name: "Familia Ortiz Wolford", passes: 2 },
    { name: "Familia Hernandez Wolford", passes: 3 },
    { name: "Emma y Analu", passes: 2 },
    { name: "Familia Peñate Ortiz", passes: 2 },
    { name: "Familia Hernandez Ortiz", passes: 4 },
    { name: "Familia Ramirez Moran", passes: 3 },
    { name: "Familia Rios Ramirez", passes: 2 },
    { name: "Familia Polanco Moran", passes: 3 },
    { name: "Don Manuel Ramirez", passes: 1 },
    { name: "Rodrigo Gomez", passes: 1 },
    { name: "Alejandra Blanco", passes: 1 },
    { name: "Carlos Chua", passes: 1 },
    { name: "Julito y Celeny", passes: 2 },
    { name: "Diego y Tess", passes: 2 },
    { name: "Jorge Valey", passes: 1 },
    { name: "Mario y Fabiola", passes: 2 },
    { name: "Byron y Maria José", passes: 2 },
    { name: "Licda. Flor Lara y José Lara", passes: 2 },
    { name: "Licda. Idolly Carranza", passes: 2 },
    { name: "Licda. Nohemi Orozco", passes: 2 },
    { name: "Licda. Nora Guzmán", passes: 1 },
    { name: "Sra. Miriam Martinez", passes: 1 },
    { name: "Jorge Solis", passes: 1 },
    { name: "Anita y Alvarito", passes: 2 },
    { name: "José León Castillo", passes: 1 },
    { name: "Oscar Abac", passes: 1 },
    { name: "Isabel Amorín", passes: 1 },
    { name: "Saraí Toledo", passes: 1 },
    { name: "Leonel Flores", passes: 1 },
    { name: "Omar y Alejandra", passes: 2 },
    { name: "Monica Rodriguez", passes: 3 },
    { name: "Javier Del Cid", passes: 2 },
    { name: "Familia Andrade", passes: 3 },
    { name: "Mariel", passes: 1 },
    { name: "Familia Sandoval", passes: 3 },
    { name: "Familia Solares Rendón", passes: 3 },
    { name: "Familia Figueroa Garcia", passes: 2 },
    { name: "Familia Echeveria Figueroa", passes: 3 },
    { name: "Familia Solis Xicara", passes: 4 },
    { name: "Familia Del Cid Vicente", passes: 3 },
    { name: "Wendy Peréz", passes: 1 },
    { name: "Michael Mó", passes: 1 },
    { name: "David Velasquez", passes: 1 },
    { name: "Kevyn Vela", passes: 1 },
    { name: "Dayana Guerra", passes: 1 },
    { name: "Andreita y Julio", passes: 2 },
    { name: "Maria Andrea", passes: 2 },
    { name: "Vicky y Fernando", passes: 2 },
    { name: "Kevin Lainfiesta", passes: 1 },
    { name: "Enrique Orellana", passes: 1 },
    { name: "Hugo Cardona", passes: 1 },
    { name: "Noelia Solares", passes: 1 },
    { name: "Andres Lopez", passes: 1 },
    { name: "Claudia Carballo", passes: 1 },
    { name: "Familia Carrera Villeda", passes: 2 },
    { name: "Patricia Villeda", passes: 2 },
    { name: "Judith Gonzalez", passes: 1 },
    { name: "Mirnita Rocha", passes: 1 },
    { name: "Licda. Brenda Estrada", passes: 3 },
    { name: "Irma de Gonzalez", passes: 2 },
    { name: "Dorita Reyes", passes: 2 },
    { name: "Andrea Galicia", passes: 2 },
    { name: "Joaquin y Erika", passes: 2 },
    { name: "Rosy Peralta", passes: 2 },
    { name: "Carlos Cantoral", passes: 1 },
    { name: "Vicky Ventura", passes: 2 },
    { name: "Marvin y Monica", passes: 2 },
    { name: "Familia Paz Alvarez", passes: 3 },
    { name: "Lic Edwin Taracena", passes: 2 },
    { name: "Lic. Ricardo Veliz", passes: 2 },
    { name: "Licda. Patricia Navas", passes: 2 },
    { name: "Licda. Bessie Oliva", passes: 2 },
    { name: "Licda. Martha Del Cid", passes: 2 },
    { name: "Licda. Jaquelin Carrera", passes: 1 }
];

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
    const passes = parseInt(queryParams.pases) || 0;

    // Mostrar el nombre del invitado con la condición de 1 pase o más
    if (passes === 1) {
        document.getElementById('guest-name').textContent = `¡${guestName}, estás invitado!`;
    } else if (passes > 1) {
        document.getElementById('guest-name').textContent = `¡${guestName}, están invitados!`;
    } else {
        document.getElementById('guest-name').textContent = `¡${guestName}!`;
    }

    // Mostrar la cantidad de pases con "pase" o "pases" dependiendo de la cantidad
    if (passes > 0) {
        document.getElementById('passes').textContent = `${passes} ${passes === 1 ? 'pase' : 'pases'}`;
    } else {
        // Si no hay pases, oculta la sección
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});
