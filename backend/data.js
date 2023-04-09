import { ulid } from 'ulid'
import bcrypt from 'bcryptjs'

export const products =  [ 
    {
        productId:ulid(), 
        productName: 'Keyboard', 
        modelYear: "2020", 
        price: 1000,
        description:"keyboard description"
    },
    {
        productId:ulid(), 
        productName: 'Laptop', 
        modelYear: "2021", 
        price: 25000,
        description:"Laptop description"
    },
    {
        productId:ulid(), 
        productName: 'Inverter', 
        modelYear: "2022", 
        price: 10000,
        description:"Inverter description"
    },
    {
        productId:ulid(), 
        productName: 'Desktop', 
        modelYear: "2018", 
        price: 15000,
        description:"Desktop description"
    },
    {
        productId:ulid(), 
        productName: 'Keyboard', 
        modelYear: "2020", 
        price: 1000,
        description:"keyboard description"
    },
    {
        productId:ulid(), 
        productName: 'Laptop', 
        modelYear: "2021", 
        price: 25000,
        description:"Laptop description"
    },
    {
        productId:ulid(), 
        productName: 'Inverter', 
        modelYear: "2022", 
        price: 10000,
        description:"Inverter description"
    },
    {
        productId:ulid(), 
        productName: 'Desktop', 
        modelYear: "2018", 
        price: 15000,
        description:"Desktop description"
    },
]

export const users = [
    {
        name: 'Aditya', 
        email: "aditya@gmail.com", 
        password: bcrypt.hashSync("123456789",10),
        isAdmin:true
    },
    {
        name: 'Arpita', 
        email: "arpita@gmail.com", 
        password: bcrypt.hashSync("123456789",10),
    },
    {
        name: 'Pranav', 
        email: "pranav@gmail.com", 
        password: bcrypt.hashSync("123456789",10),
    }
]