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
    'By creation date': function(a, b) {
        var dateA = Date.parse(a.creation_date);
        var dateB = Date.parse(b.creation_date);
        return (dateA > dateB) ? -1 : (dateA < dateB) ? 1 : 0;
    },
})