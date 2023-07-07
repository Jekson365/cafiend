export type Product = {
    title: String,
    img: String,
    price: number,
    category: String,
    id:number,
}


export const Products: Product[] = [
    {
        title: "frappe",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf646a788f7a5e1603fc_1.png",
        price: 85.41,
        category: "hot",
        id:1,
    },
    {
        title: "black",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd4fe024b168d5698340_2.png",
        price: 25.41,
        category: "hot",
        id:0,
    },
    {
        title: "nitro",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf9b515652bef9924cc2_3.png",
        price: 24.1,
        category: "black",
        id:2,
    },
    {
        title: "moca",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440ddc171a6693e48366a07_4.png",
        price: 93.2,
        category: "black",
        id:3,
    },
    {
        title: "cortando",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf646a788f7a5e1603fc_1.png",
        price: 35.5,
        category: "cold",
        id:4,
    },
    {
        title: "breve",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6440dd4fe024b168d5698340_2.png",
        price: 5,
        category: "hot",
        id:0,
    },
    {
        title: "sugar",
        img: "https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443cf9b515652bef9924cc2_3.png",
        price: 6,
        category: "hot",
        id:0,
    },
]