import React, { useState} from 'react'


export const UserContext = React.createContext()

function UserContextComponent({children}) {
    const [products, setProducts] = useState([
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "data:image/jpeg;base64,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",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://media.istockphoto.com/id/1219045199/photo/iphone-xs-max-front-view-and-iphone-11-pro-back-view-on-black.jpg?s=612x612&w=0&k=20&c=qBi1S7LY5edEtRn9YJnhVYrTZaSAu6gXMNqlLMvJsLc=",
            "images": [
                "https://i.dummyjson.com/data/products/2/1.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://www.cnet.com/a/img/resize/eecdbaece1be6f8cac93340478fb07150ee3b911/hub/2018/07/24/2dfd642c-600a-43d6-adbb-ccc3cf3acb0e/note-9-concept-creator-render-11.png?auto=webp&width=1200",
            "images": [
                "https://i.dummyjson.com/data/products/3/1.jpg"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://media.istockphoto.com/id/1339751747/photo/honor-magic-3-pro.jpg?s=612x612&w=0&k=20&c=jdG6PhhZiaKtnsYKjJKze9jfFIeXkp4OLlPsTqciaRE=",
            "images": [
                "https://i.dummyjson.com/data/products/4/1.jpg",
                "https://i.dummyjson.com/data/products/4/2.jpg",
                "https://i.dummyjson.com/data/products/4/3.jpg",
                "https://i.dummyjson.com/data/products/4/4.jpg",
                "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://media.istockphoto.com/id/1139635279/photo/new-huawei-p30-pro-smartphone.jpg?s=612x612&w=0&k=20&c=NlEwGpblADgiuhc8oy-7Ubg4VIQop4eF7Sfx6QHfUv4=",
            "images": [
                "https://i.dummyjson.com/data/products/5/1.jpg",
                "https://i.dummyjson.com/data/products/5/2.jpg",
                "https://i.dummyjson.com/data/products/5/3.jpg"
            ]
        }
    ])
    return <>
         <UserContext.Provider value={{products,setProducts}}> 
         {children} 
         </UserContext.Provider>
    </>
}

export default UserContextComponent