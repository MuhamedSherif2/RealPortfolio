import { createContext, useEffect, useState } from "react";
import calculatorJS from './assets/img/projectIMG/JS-calc.png'
import fristEco from './assets/img/projectIMG/JS-ecommrce2.png'
import randomName from './assets/img/projectIMG/JS-random.png'
import todoJS from './assets/img/projectIMG/JS-todo.png'
import alburak from './assets/img/projectIMG/alburak.png'
import calculatorReact from './assets/img/projectIMG/react calc.png'
import todoReact from './assets/img/projectIMG/React todo.png'
import watchIt from './assets/img/projectIMG/watchIt.png'

export const Context = createContext();
export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState('')
    const [selectProduct, setSelectProduct] = useState(null);
    const projects = [
        {
            id: 1,
            type: 'javaScript',
            name: 'Calculator JavaScript',
            img: calculatorJS,
            description: 'Simple Calculator Build by HTML, CSS & JavaScript to do some Methods in Math ex: Addition, Subtraction, Multiplication and Division.',
            vercelLink: 'https://calculator-js-delta-eight.vercel.app/',
            gitHupLink: 'https://github.com/MuhamedSherif2/Calculator-JS',
        },
        {
            id: 2,
            type: 'javaScript',
            name: 'Dream E-commerce',
            img: fristEco,
            description: "Market Website to Sell Apple Phone's Build by HTML, CSS & JavaScript.",
            vercelLink: 'https://apple-markt.vercel.app/',
            gitHupLink: 'https://github.com/MuhamedSherif2/Apple-markt',
        },
        {
            id: 3,
            type: 'javaScript',
            name: 'Random Name',
            img: randomName,
            description: "Simple Website to Choose Your baby's name Boy or Girl Build by HTML, CSS & JavaScript.",
            vercelLink: 'https://randomname-lilac.vercel.app/',
            gitHupLink: 'https://github.com/MuhamedSherif2/To-Do-App',
        },
        {
            id: 4,
            type: 'javaScript',
            name: 'Todo JavaScript',
            img: todoJS,
            description: 'Todo App Build by HTML, CSS & JavaScript.',
            vercelLink: 'https://to-do-list-app-two-vert.vercel.app/',
            gitHupLink: 'https://github.com/MuhamedSherif2/To-Do-List-App',
        },
        {
            id: 5,
            type: 'javaScript',
            name: 'Al-Burak Website',
            img: alburak,
            description: 'Portfolio to Al-Burak Company to show here Services Build by HTML, CSS & JavaScript.',
            vercelLink: 'https://al-buraq-coral.vercel.app/',
            gitHupLink: 'https://github.com/MuhamedSherif2/Al-Buraq',
        },
        {
            id: 6,
            type: 'react',
            name: 'Calculator React-JS',
            img: calculatorReact,
            description: 'Simple Calculator Build by HTML, CSS & React-JS to do some Methods in Math ex: Addition, Subtraction, Multiplication and Division.',
            vercelLink: 'https://calculator-wheat-one-95.vercel.app/',
            gitHupLink: 'https://github.com/MuhamedSherif2/colculator-React-JS',
        },
        {
            id: 7,
            type: 'react',
            name: 'Todo React-JS',
            img: todoReact,
            description: 'Todo App Build by HTML, CSS & React-JS.',
            vercelLink: 'https://to-do-list-eosin-nine-35.vercel.app',
            gitHupLink: 'https://github.com/MuhamedSherif2/To-Do-React-JS',
        },
        {
            id: 8,
            type: 'react',
            name: 'WATCH IT',
            img: watchIt,
            description: 'WATCH IT Clone Build by JSX, Tailwind-CSS, React-js and some Libraries ex:Firebase and react-icons with Fetching Data by API and wrap it in Context-API File.',
            vercelLink: 'https://egybest-clone-alpha.vercel.app/',
            gitHupLink: 'https://github.com/MuhamedSherif2/WATCH-IT-Clone',
        },
    ]
    useEffect(() => {
        const AddProduct = () => {
            try {
                setProducts(projects)
            } catch (error) {
                console.log('error in AddProduct' + error)
            }
        };
        AddProduct();
    }, [])


    return (
        <Context.Provider value={{
            products,
            setProducts,
            selectProduct,
            setSelectProduct,
        }}>
            {children}
        </Context.Provider>
    )
}