users = [
    {
        id: 3,
        year: 2010,
        name: "Toshma",
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
        year: 2001,
        name: "Ahmad",
        status: "student",
        key: "test",
    },
];

const sortedById = users.sort((x, y)=>{
    return x.id - y.id

})

const sortedByYear = users.sort((x, y)=>{
    return x.year - y.year
})

// const sortedByName = users.sort((x, y)=>{
//     if (x.name < y.name) return -1;
//     if (x.name > y.name) return +1;
//     return 0;
// })

// const sortedByName2 = users.sort((x, y)=>{
//     return x.name.localeCompare(y.name);
// })

const onDelete1 = (arr, id) => {
    let list = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id !== id) {
            list.push(arr[i])
        }
    }
    return list;
}

const onDelete2 = (arr, id) => {
    let list = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            list.push(arr[i])
        }
    }
    return list;
}



console.log(onDelete1(users, 3))
