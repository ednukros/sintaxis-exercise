// Ejercicio. Define la función.



const pasarLaNavidad = function (personaje, film, mike, planning, end, myName, reality, nothing) {


    console.log("Hola mi nombre es " + myName.replace("(cambia con tu nombre esta string)", "Inma"));
    console.log("Trabajar de cara al público en navidad, me convierte un poco en el " + personaje)
    console.log("Asi que al llegar a casa ayer me fui a dormir y acabé soñando que iba en el coche con  " + mike + "...");
    //Aquí quiero poner unas comillas para dar comienzo al sueño, pero no me sale :(!
    planning.function();
    console.log("estaban siendo en el" + planning.destinoVacaciones[2]);
    console.log("era " + planning.dia + " de Julio y disfrutaba de una relajación extrema mientras kitt nos cantaba una canción");  //aquí quería poner unas comillas para cerrar el sueño
    console.log("Me desperté y vi que estaban echando en la tele " + film[0] +" asi que...");
    console.log("Me quedé viendola ya que me acordé que hoy ir al trabajo es = " + reality)
    console.log("¿Qué haré en nochevieja? ")
    console.log(nothing);

    console.log(end());






}


pasarLaNavidad('grinch', [
    'Solo en casa',
    function () {
        console.log('AaRrrrGgggggg ¡Llegan los ladrones!')
    },
    'Como vivo en', // ¿Santa o Reyes magos?
    'Recibimos los regalos el día'
], 'Michael Knight', {
    medioDia: 'Comer con los amigos',
    dia: 24,
    noche: 'Cena familiar',
    destinoVacaciones: [
        'Honolulu',
        'Polo Norte',
        'Caribe',
        'Torrevieja',
        'Badajoz',
    ],
    function () {
        console.log('Mis vacaciones');
    },
}, function () {
    return 'Fin de la Historia';
}, '(cambia con tu nombre esta string)', true, undefined);