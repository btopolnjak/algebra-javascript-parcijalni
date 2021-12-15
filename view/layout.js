export default () => {
    return `
        <article>
            <p><strong>Unesite ime države:</strong></p>
            <input type="text" id="search">
        </article>
        <article>
            <div id="rezultati"></div>
            <div id="spinner" style="display: none"></div>
        </article>
        `
}