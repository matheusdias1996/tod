module.exports = Object.freeze({
    'Alphabetically': function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    },
    'Reversed Alphabetically': function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    },
})