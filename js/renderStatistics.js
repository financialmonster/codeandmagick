function renderStatistics(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

    const maxTime = getMaxElement(times);

    for (let i = 0; i < players.length; i++) {
        ctx.fillStyle = 'black';
        ctx.fillText(
            Math.round(times[i]),
            CLOUD_X + COLUMN_GAP + i * (2 * BAR_WIDTH + GAP),
            CLOUD_Y + GAP + FONT_GAP * 3
        );
        ctx.fillStyle = players[i] == 'Вы' ? 'rgba(255, 0, 0, 1)' : createRandomBlue();
        const barHeight = (Math.round(times[i]) * MAX_BAR_HEIGHT) / maxTime;
        ctx.fillText(
            players[i],
            CLOUD_X + COLUMN_GAP + i * (2 * BAR_WIDTH + GAP),
            CLOUD_Y + GAP * 4 + FONT_GAP * 3 + MAX_BAR_HEIGHT
        );
        ctx.fillRect(
            CLOUD_X + COLUMN_GAP + i * (2 * BAR_WIDTH + GAP),
            CLOUD_Y + GAP * 3 + FONT_GAP * 3 + MAX_BAR_HEIGHT - barHeight,
            BAR_WIDTH,
            barHeight
        );
    }
}

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 20;
const COLUMN_GAP = 50;
const BAR_WIDTH = 40;
const MAX_BAR_HEIGHT = 150;

function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + CLOUD_WIDTH, y);
    ctx.lineTo(x + CLOUD_WIDTH + FONT_GAP, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
    ctx.lineTo(x + (CLOUD_WIDTH / 4) * 3, y + CLOUD_HEIGHT + FONT_GAP + GAP);
    ctx.lineTo(x + (CLOUD_WIDTH / 4) * 2, y + CLOUD_HEIGHT + GAP);
    ctx.lineTo(x + (CLOUD_WIDTH / 4) * 1, y + CLOUD_HEIGHT + FONT_GAP + GAP);
    ctx.lineTo(x, y + CLOUD_HEIGHT);
    ctx.lineTo(x - FONT_GAP - GAP, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x, y);
    ctx.fill();
}

function getMaxElement(arr) {
    return Math.max(...arr);
}

function createRandomBlue() {
    return `rgba(0, 0, 255, ${Math.random()})`;
}

export default renderStatistics;
