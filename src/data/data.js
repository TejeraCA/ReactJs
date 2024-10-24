const products = [
    {
        id:"Ca0001",
        name:"Caña Shimano",
        description:"",
        stock:20,
        price:150000,
        category:"caña",
        image:"/img/caña-shimano.jpg",

    },
    {
        id:"Ca0002",
        name:"Caña Waterdog",
        description:"",
        stock:15,
        price: 90000,
        category:"caña",
        image:"/img/caña-waterdog.jpg",

    },
    {
        id:"Re1001",
        name:"Reel Shimano",
        description:"",
        stock:20,
        price:100000,
        category:"reel",
        image:"/img/reel-shimano.jfif",

    },
    {
        id:"Re1002",
        name:"Reel AbuGarcia",
        description:"",
        stock:10,
        price:75000,
        category:"reel",
        image:"/img/reel-abugarcia.webp",

    },
    {
        id:"Bo2001",
        name:"Bolso Rapala",
        description:"",
        stock:5,
        price:250000,
        category:"bolso",
        image:"/img/bolso-rapala.webp",

    },
    {
        id:"Bo2002",
        name:"Bolso Okuma",
        description:"",
        stock:3,
        price:70000,
        category:"bolso",
        image:"/img/bolso-okuma.webp",

    },
    
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}

export { getProducts }