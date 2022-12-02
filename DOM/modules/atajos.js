const d = document;
export default function atajos(e) {
    if (e.key === "a" && e.altKey) {
        alert("Comando creado")
    }
    if (e.key === "p" && e.altKey) {
        prompt("Comando creado")
    }
    if (e.key === "c" && e.altKey) {
        confirm("Comando creado")
    }
}