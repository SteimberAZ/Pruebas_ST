const botonExpulsar = document.getElementById("bexpulsar");
const botonConfirmar = document.getElementById("expulsar");
const botonCancelar = document.getElementById("noexpulsar");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const expul = document.getElementById("expul");
botonExpulsar.addEventListener("click", () => {
    modal.classList.remove("hidden");
    setTimeout(() => {
    modalContent.classList.remove("scale-95", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100");
    }, 100);
});

function cerrarModal() {
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
    modal.classList.add("hidden");
    }, 300);
}
function cerrarModalex() {
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-95", "opacity-0");
    expul.style.display ="none";
    setTimeout(() => {
    modal.classList.add("hidden");
    }, 300);
}
botonCancelar.addEventListener("click", cerrarModal);
botonConfirmar.addEventListener("click", cerrarModalex);

modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
});
//----------------------------------------------------------------------------------------------------

const botonExpulsar2 = document.getElementById("bpagar");
const botonConfirmar2 = document.getElementById("pagar");
const botonCancelar2 = document.getElementById("nopagar");
const modal2 = document.getElementById("modal2");
const modalContent2 = document.getElementById("modalContent2");
const pag = document.getElementById("pag");

botonExpulsar2.addEventListener("click", () => {
    modal2.classList.remove("hidden");
    setTimeout(() => {
    modalContent2.classList.remove("scale-95", "opacity-0");
    modalContent2.classList.add("scale-100", "opacity-100");
    }, 100);
});

function cerrarModal2() {
    modalContent2.classList.remove("scale-100", "opacity-100");
    modalContent2.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
    modal2.classList.add("hidden");
    }, 300);
}
function cerrarModal2pg() {
    modalContent2.classList.remove("scale-100", "opacity-100");
    modalContent2.classList.add("scale-95", "opacity-0");
    pag.style.display="none";
    setTimeout(() => {
    modal2.classList.add("hidden");
    }, 300);
}
botonCancelar2.addEventListener("click", cerrarModal2);
botonConfirmar2.addEventListener("click", cerrarModal2pg);

modal2.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
});