// Set Icons 
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// Colors
const colors = [
    '#121629',
    '#b8c1ec',
    '#eebbc3'
];

// Icon Container
const container = document.querySelector('.icons');

// Print icons
const coloredIcons = colorIcons(icons, colors);
printIcons(coloredIcons, container);

// Gen options on type
const select = document.querySelector('#type');
const types = getTypes(coloredIcons);
generateOptions(types, select);

// Filter on change
select.addEventListener('change', () => {
    const selected = select.value;

    const filteredIcons = filterIcons(coloredIcons, selected);
    printIcons(filteredIcons, container);
});



/**********
FUNCTIONS
**********/

// Generate markup

function printIcons(icons, container) {

    // Gen markup
    let screen = '';

    // Loop icons set
    icons.forEach((icon) => {

        // Destructuring
        const { family, prefix, name, color } = icon;

        // Markup
        screen += `
        <div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>
        `;
    });

    container.innerHTML = screen;
}

// Return color icons collection by type

function colorIcons(icons, colors) {
    // Get color by type
    const types = getTypes(icons);

    // Add colors
    const coloredIcons = icons.map((icon) => {
        const indexType = types.indexOf(icon.type);
        return {
            ...icon,
            color: colors[indexType],
        }
    })

    return coloredIcons;
}

// Get icons type

function getTypes(icons) {
    const types = [];

    icons.forEach((icon) => {
        if (!types.includes(icon.type)) {
            types.push(icon.type)
        }
    });

    return types;
}

// Generate options

function generateOptions(types, select) {

    // Gen options
    let options = '';

    types.forEach((type) => {
        options += `<option value="${type}">${type}</option>`;
    })

    select.innerHTML += options;
}

//Filter icon set

function filterIcons(coloredIcons, selected) {
    if (selected === 'all') {
        return coloredIcons;
    }

    // Filter by type
    const filtered = coloredIcons.filter((icon) => {
        return icon.type === selected;
    })

    return filtered;
}


