export default async (trazeniPojam) => {
    let rezultatServer = await fetch(`http://universities.hipolabs.com/search?country=${trazeniPojam}`)
    let rezultatJSON = rezultatServer.json()
    return rezultatJSON
}