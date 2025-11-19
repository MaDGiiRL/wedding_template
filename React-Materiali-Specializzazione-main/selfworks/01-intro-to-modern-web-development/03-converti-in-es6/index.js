// Rifattorizza queste funzioni 
function getEmails (people, options) {
  options = options || {}
  var withNames = options.withNames || false
  var onlyActive = options.onlyActive || false
  if (onlyActive) {
    people = people.filter(isActive)
  }
  return people.map(function (person) {
    var result = ''
    if (withNames) {
      result = person.name + ' <' + person.email + '>'
    } else {
      result = person.email
    }
    return result
  }).join(', ')
}

function getYoungest (people) {
  people.sort(function (personA, personB) {
    return personA.age - personB.age
  })
  return {
    youngest: people[0],
    others: people.slice(1)
  }
}

function isActive (person) {
  return person.isActive
}

// aggiungi questo array in un altro file e importalo!
var people = [
  {
    id: '0',
    isActive: true,
    age: 24,
    name: 'Eva',
    address: {
      via1: '23, via toritto',
    },
    email: 'eva.sweet@beadzza.com',
    location: {
      latitude: 45.718105,
      longitude: -155.472722,
    }
  },
  {
    id: '1',
    isActive: true,
    age: 55,
    name: 'Teresa', 
    address: {
      via1: '23, via trento',
    },
    email: 'terry@magmina.com',
    location: {
      latitude: -87.04779,
      longitude: 6.978688,
    },
  },
  {
    id: '2',
    isActive: true,
    age: 53,
    name: 'Marcello',
    address: {
      via1: '23, via toscana',
    },
    email: 'Marcello@splinx.com',
    location: {
      latitude: 15.98262,
      longitude: -137.86649,
    },
  },
  {
    id: '3',
    isActive: false,
    age: 54,
    name: 'Federico',
    address: {
      via1: '181, via giardino dorato',
    },
    email: 'frederick.stokes@telpod.com',
    location: {
      latitude: -6.323152,
      longitude: 50.381855,
    },
  },
  {
    id: '4',
    isActive: false,
    age: 37,
    name: 'Davide',
    address: {
      line1: '701, via bari',
    },
    email: 'david.richmond@sulfax.com',
    location: {
      latitude: 28.723604,
      longitude: 177.048793,
    },
  }
];

// dopo il refactoring queste funzioni dovrebbero continuare a funzioare
var emails = getEmails(people, {
  withNames: true,
});
console.log(emails);

var youngest = getYoungest(people);
console.log(youngest);