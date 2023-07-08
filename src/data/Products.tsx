export type Product = {
    title: String,
    img: String,
    price: number,
    category: String,
    id: number,
    images: String[],
    quantity: Number
}


export const Products: Product[] = [
    {
        title: "frappe",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf646a788f7a5e1603fc_1.png",
        price: 85.41,
        quantity: 0,
        category: "hot",
        id: 1,
        images: [
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf746a788f26fd160486_1.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe40b8f92de4437a64_2.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd5e6b48da8b3d22e6e5_4.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd5e7dace74a513e55e9_5.jpg"
        ]
    },
    {
        title: "black",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd4fe024b168d5698340_2.png",
        price: 25.41,
        quantity: 0,
        category: "hot",
        id: 0,
        images: [
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe40b8f92de4437a64_2.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbef3e5b63ec89bda7c_1.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe40b8f92de4437a64_2.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe8bd66bd8596a5f6e_3.jpg"
        ]
    },
    {
        title: "nitro",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf9b515652bef9924cc2_3.png",
        price: 24.1,
        quantity: 0,
        category: "black",
        id: 2,
        images: [
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cfc92d200235137f49cb_3.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd5e6b48da8b3d22e6e5_4.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd5e7dace74a513e55e9_5.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440de0e5081900b577affba_6.jpg"
        ]
    },
    {
        title: "moca",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440ddc171a6693e48366a07_4.png",
        price: 93.2,
        quantity: 0,
        category: "black",
        id: 3,
        images: [
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440de0e5081900b577affba_6.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbef3e5b63ec89bda7c_1.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe40b8f92de4437a64_2.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe8bd66bd8596a5f6e_3.jpg"
        ]
    },
    {
        title: "cortando",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf646a788f7a5e1603fc_1.png",
        price: 35.5,
        quantity: 0,
        category: "cold",
        id: 4,
        images: [
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd5e7dace74a513e55e9_5.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd5e7dace74a513e55e9_5.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe40b8f92de4437a64_2.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd5e6b48da8b3d22e6e5_4.jpg"
        ]
    },
    {
        title: "breve",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd4fe024b168d5698340_2.png",
        price: 5,
        quantity: 0,
        category: "hot",
        id: 5,
        images: [
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd5e6b48da8b3d22e6e5_4.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbef3e5b63ec89bda7c_1.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe40b8f92de4437a64_2.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe8bd66bd8596a5f6e_3.jpg"
        ]
    },
    {
        title: "sugar",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf9b515652bef9924cc2_3.png",
        price: 6,
        quantity: 0,
        category: "hot",
        id: 6,
        images: [
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe40b8f92de4437a64_2.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbef3e5b63ec89bda7c_1.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe40b8f92de4437a64_2.jpg",
            "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dcbe8bd66bd8596a5f6e_3.jpg"
        ]
    },
]