const stats = {
    class: "Swamp Beast Diplomat",
    health: 100,
    level: 1
}

function statsTemplate(statKey) {
    return [
        `<tr><td><strong>Class:</strong> ${statKey.class}</td></tr>`,
        `<tr><td><strong>Health:</strong> ${statKey.health}</td></tr>`,
        `<tr><td><strong>Level:</strong> ${statKey.level}</td></tr>`
    ].join('\n');
}

function renderStats(stats) {
    const html = document.querySelector("#stats");
    html.innerHTML = statsTemplate(stats);
}

renderStats(stats);

document.querySelector("#attackButton").addEventListener("click", function() { 
    if (stats.health <= 0) {
        alert("Snortleblat has fallen in battle!");
        return;
    }
    stats.health -= 20;
    renderStats(stats);
 });

document.querySelector("#levelButton").addEventListener("click", function() { 
    stats.level += 1;
    renderStats(stats);
 });