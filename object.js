users = [
    {
        id: 3,
        year: 2010,
        name: "Ahmad",
        status: "student",
        key: "test",
    },

    {
        id: 1,
        year: 2011,
        name: "Eshmat",
        status: "student",
        key: "test",
    },
    {
        id: 2,
        year: 2012,
        name: "Toshmat",
        status: "student",
        key: "test",
    },
];

sortedByName

const sortedByName2 = users.sort((x, y)=>{
    return x.name.localeCompare(y.name);
})
console.log(sortedByName2);



 sortedById

const sortedById = users.sort((x, y)=>{
    return x.id - y.id
})

console.log(sortedById);



sortedByYear

const sortedByYear = users.sort((x, y)=>{
    return x.year - y.year
})

console.log(sortedByYear);

const sortedByName = users.sort((x, y)=>{
    if (x.name < y.name) return -1;
    if (x.name > y.name) return +1;
    return 0;
})


const onDelete1 = (id) => {
    let list = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            list.push(users[i])
        }
    }
    return list;
}
console.log(onDelete1(2));

