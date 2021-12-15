export default (rezultati) => {
    var trazeniPojam = document.getElementById("search").value
    var redniBroj = 1
    if (rezultati[0] === undefined) {
        return `<h3>Nema rezultata za "${trazeniPojam}"</h3>`
    } else {
    return `
    <table>
        <th colspan="2">Rezultati za državu - ${trazeniPojam}</th>
        ${rezultati.slice(0, 10).map((e) => {
         return `
            <tr>
                <td>${redniBroj++}.</td>
                <td><a href="${e.web_pages}">${e.name}</a></td>
            </tr>`
        }).join("")}
    </table>
    `}
}