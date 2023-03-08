/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
/* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
datosPersona.nombre = prompt("Por favor ingrese su nombre");
const añoNacimiento = prompt("Por favor ingrese su año de nacimiento");
datosPersona.edad = 2023 - añoNacimiento;
datosPersona.ciudad = prompt("Por favor ingrese su ciudad de residencia actual");
if (confirm("¿Te interesa JavaSript?")){
  datosPersona.interesPorJs = "Si";
}
else{
  datosPersona.interesPorJs = "No";
}
}

function renderizarDatosUsuario() {
/* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
obtenerDatosDelUsuario();
/* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
const elementoNombre = document.getElementById("nombre");
const elementoEdad = document.getElementById("edad");
const elementoCiudad = document.getElementById("ciudad");
const elementoInteresJS = document.getElementById("javascript");

elementoNombre.innerHTML = `${datosPersona.nombre}`;
elementoEdad.innerHTML = `${datosPersona.edad}`;
elementoCiudad.innerHTML = `${datosPersona.ciudad}`;
elementoInteresJS.innerHTML = `${datosPersona.interesPorJs}`;
}

function recorrerListadoYRenderizarTarjetas() {
/* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
const cards = document.getElementById("fila");
cards.innerHTML = "";
  listado.forEach((asignatura)=> {
    cards.innerHTML += 
    `<div class = "caja">
    <img src ="${asignatura.imgUrl}" alt="${asignatura.lenguajes}">
    <p class="lenguajes">Lenguajes: ${asignatura.lenguajes}</p>
    <p class="bimestre">Bimestre: ${asignatura.bimestre}</p>
    </div>`
  })
}

function alternarColorTema() {
/* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
const cambiarModo = document.getElementById("sitio");
cambiarModo.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const pSobreMi = document.getElementById("sobre-mi");
document.addEventListener("keydown", (event)=>{
if (event.key === "f" || event.key === "F") {
  pSobreMi.classList.remove("oculto");
}
})