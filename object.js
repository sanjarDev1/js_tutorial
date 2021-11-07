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
