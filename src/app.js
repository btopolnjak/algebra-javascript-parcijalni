import Layout from "../view/layout.js"
import dohvatiRezultate from "./dohvatiRezultate.js"
import rezultatiView from "../view/rezultati.js"

export default () => {
    let timer
    let spinnerAktivan = false
    document.getElementById("app").innerHTML = Layout()
    document.getElementById("search").addEventListener("keyup", () => {
        clearTimeout(timer)
        if (!spinnerAktivan) {
            document.getElementById("spinner").style.display = "block"
            document.getElementById("rezultati").style.display = "none"
        }
        timer = setTimeout(() => {
            pretrazi()
            document.getElementById("spinner").style.display = "none"
            document.getElementById("rezultati").style.display = "block"
        }, 500) 
    })
    async function pretrazi() {
        let rez = await dohvatiRezultate(document.getElementById("search").value)
        document.getElementById("rezultati").innerHTML = rezultatiView(rez)
    }
}