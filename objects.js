// create objects
// add items to obect
// change item in object
// access/ print item in object
// remove item in object
// nest objects
// destructure

// items inside the objects have key and value

let person = {
    name: "ziyaad",
    age: 29,
    married: false,
    rich: false,
    bald: 'almost',
    location: 'bellville',
    job: 'Software Engineer',
    images: {
        myPhotos:{
            image1:{
                id: '23e4234324324324',
                name: 'ciid',
                createdAt: '2020-12-12',
                location: '1234:3q435643',
                deleted: true,
            },
            image2:{
                id: '23e4234324324324',
                name: 'ciid',
                createdAt: '2020-12-12',
                location: '1234:3q435643',
                deleted: true,
            }
        },
    }
}

person['address'] = '30 middle Street, Kempenville'
person['married'] = true;
person.age = 30
delete person.job
// console.log(person);
// console.log(person.images.myPhotos);

let user = {
    firstName: 'ziyaad',
    lastName: 'gurhan',
    password: '324322234',
    username: 'gurhanpro',
}

// let firstName = user.firstName
// let { firstName } = user 

// let lastName = user.lastName
// let username = user.username

// now using object destructuring

let { asfdasfdsf, lastName, username } = user

// console.log(asfdasfdsf, lastName, username );
// console.log(lastName);
// console.log(username);

let country = {
    name: 'southafrica',
    population: '59m',
    caronavirus:{
        totalcases:9889,
        death: 9,
        recovered: 450
    }
}
console.log(country)

// add currency : 'ZAR'
country['curency'] = 'ZAR'
console.log(country)
country.population = '60m'
console.log(country)
delete country.population
console.log(country)
// add an object called corona and insdie that object
// have totalCases: 1800, death: 9, recovered: 450
console.log(country)
// change total cases into an object of normal: 332, veryCritical: 222
// country.totalcases['normal'] = 332,
// country['critical'] = 222
country.caronavirus.totalcases = {
    normal: 3434,
    critical: 33,
    alomostReovered: 233,
}
console.log(country)
console.log(country.caronavirus.totalcases.alomostReovered)

