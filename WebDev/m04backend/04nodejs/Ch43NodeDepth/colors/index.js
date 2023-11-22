class Color {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

const allColors = [
    new Color('fieryorange', '#FFA07A'),
    new Color('coolcyan', '#00CED1'),
    new Color('lavender', '#E6E6FA'),
    new Color('vibrantgreen', '#00FF7F'),
    new Color('boldblue', '#0000FF'),
    new Color('gentlegold', '#FFD700'),
];


exports.getRandomColor = () => {
    return allColors[Math.floor(Math.random() * allColors.length)];
}

exports.allColors = allColors;