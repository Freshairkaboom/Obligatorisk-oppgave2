// view
show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${chosenBar || "Ingen"}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onclick="addBar()">Legg til stolpe</button>
        <button ${disabled} onclick="editBar()">Endre valgt stolpe</button><br />
        <button ${disabled} onclick="removeBar()">Fjerne valgt stolpe</button>
        `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    let stroke = chosenBar == barNo ? "black" : "";

    return `<rect id="${barNo}" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" stroke="${stroke}" onclick="selectBar(this.id)"></rect>`;
}

function calcColor(min, max, val) {
    let minHue = 240, maxHue = 0;
    let curPercent = (val - min) / (max - min);
    let colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}
