const cars = [
    {
        id: 1,
        mark:'Nissan',
        model:'Altima SR',
        color:'Rojo',
        year:'2020',
        price:'$478,800',
        image:'https://img.automexico.com/2020/05/19/J6j0rGhV/altima20-1-8c66-dee0.jpg'
    },
    {
        id: 2,
        mark:'Chevrolet',
        model:'Aveo',
        color:'Azul',
        year:'2017',
        price:'$113,500',
        image: 'https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/cars/2020-aveo/colorizer/01-images/azul-pacifico.jpg?imwidth=960'
    },
    {
        id: 3,
        mark:'Dodge',
        model:'Charger',
        color:'Negro',
        year:'2020',
        price:'$1,425,000',
        image: 'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/60421/dodge-charger-srt-hellcat-octane-edition-port.jpg'
    },
    {
        id: 4,
        mark:'Honda',
        model:'HR-V',
        color:'Naranja',
        year:'2021',
        price:'$365,900',
        image:'https://i.ytimg.com/vi/z-mB3P7mU9Q/maxresdefault.jpg'
    },
    {
        id: 5,
        mark:'Mazda',
        model:'CX-9',
        color:'Gris',
        year:'2021',
        price:'$700,000',
        image:'https://www.mazdausa.com/siteassets/vehicles/2021/cx-9/trims/carbon-edition/2021-mazda-cx-9-trims-carbon-edition.jpg'
    }
];
function printCars() {
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((car) => {
        html += `
        <div class="car-img">
        <img src="${car.image}" alt="${car.mark} ${car.model}" title="${car.mark} ${car.model}" />
        <tr>
        <td>${car.mark}</td>
        <td>${car.model}</td>
        <td>${car.color}</td>
        <td>${car.year}</td>
        <td>${car.price}</td>
            <button onclick="deleteCar(${car.id})" class="btn btn-danger">
                Eliminar
            </button>
    </tr>
    </div>`;
    });
    container.innerHTML = html;
}

function deleteCar(id) {
    const index = cars.findIndex((car) => car.id == id);
    cars.splice(index, 1);
    printCars();
}

function addCars() {
    const inputMark = document.getElementById('mark');
    const mark = inputMark.value;
    const inputModel = document.getElementById('model');
    const model = inputModel.value;
    const inptuColor = document.getElementById('color');
    const color = inptuColor.value;
    const inputYear = document.getElementById('year');
    const year = inputYear.value;
    const inputPrice = document.getElementById('price');
    const price = inputPrice.value;
    const id = cars[cars.length -1].id + 1;
    const newCar = {
        mark,
        model,
        color,
        year,
        price,
        id
    }
    cars.push(newCar);
    printCars();
    document.getElementById('form-car').reset();
}
printCars();