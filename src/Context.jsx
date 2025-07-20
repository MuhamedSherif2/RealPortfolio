import { createContext, useEffect, useState } from "react";
import calculatorJS from './assets/img/projectIMG/JS-calc.png'
import fristEco from './assets/img/projectIMG/JS-ecommrce2.png'
import randomName from './assets/img/projectIMG/JS-random.png'
import todoJS from './assets/img/projectIMG/JS-todo.png'
import alburak from './assets/img/projectIMG/alburak.png'
import calculatorReact from './assets/img/projectIMG/react calc.png'
import todoReact from './assets/img/projectIMG/React todo.png'
import watchIt from './assets/img/projectIMG/watchIt.png'
import CRUD from './assets/img/projectIMG/crud.png'
import TaskMern from './assets/img/projectIMG/Mern task.png'

export const Context = createContext();
export const ContextProvider = ({ children }) => {


    const projects = [
        {
            id: 1,
            type: 'JavaScript',
            name: 'Calculator JavaScript',
            img: calculatorJS,
            description: 'Simple Calculator Build by HTML, CSS & JavaScript to do some Methods in Math ex: Addition, Subtraction, Multiplication and Division.',
            vercelLink: 'https://calculator-js-delta-eight.vercel.app/',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/Calculator-JS',
        },
        {
            id: 2,
            type: 'JavaScript',
            name: 'Dream E-commerce',
            img: fristEco,
            description: "Market Website to Sell Apple Phone's Build by HTML, CSS & JavaScript.",
            vercelLink: 'https://apple-markt.vercel.app/',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/Apple-markt',
        },
        {
            id: 3,
            type: 'JavaScript',
            name: 'Random Name',
            img: randomName,
            description: "Simple Website to Choose Your baby's name Boy or Girl Build by HTML, CSS & JavaScript.",
            vercelLink: 'https://randomname-lilac.vercel.app/',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/To-Do-App',
        },
        {
            id: 4,
            type: 'JavaScript',
            name: 'Todo JavaScript',
            img: todoJS,
            description: 'Todo App Build by HTML, CSS & JavaScript.',
            vercelLink: 'https://to-do-list-app-two-vert.vercel.app/',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/To-Do-List-App',
        },
        {
            id: 5,
            type: 'JavaScript',
            name: 'Al-Burak Website',
            img: alburak,
            description: 'Portfolio to Al-Burak Company to show here Services Build by HTML, CSS & JavaScript.',
            vercelLink: 'https://al-buraq-coral.vercel.app/',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/Al-Buraq',
        },
        {
            id: 6,
            type: 'React',
            name: 'Calculator React-JS',
            img: calculatorReact,
            description: 'Simple Calculator Build by HTML, CSS & React-JS to do some Methods in Math ex: Addition, Subtraction, Multiplication and Division.',
            vercelLink: 'https://calculator-wheat-one-95.vercel.app/',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/colculator-React-JS',
        },
        {
            id: 7,
            type: 'React',
            name: 'Todo React-JS',
            img: todoReact,
            description: 'Todo App Build by HTML, CSS & React-JS.',
            vercelLink: 'https://to-do-list-eosin-nine-35.vercel.app',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/To-Do-React-JS',
        },
        {
            id: 8,
            type: 'React',
            name: 'WATCH IT',
            img: watchIt,
            description: 'WATCH IT Clone Build by JSX, Tailwind-CSS, React-js and some Libraries ex:Firebase and react-icons with Fetching Data by API and wrap it in Context-API File.',
            vercelLink: 'https://egybest-clone-alpha.vercel.app/',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/WATCH-IT-Clone',
        },
        {
            id: 9,
            type: 'React',
            name: 'CRUD',
            img: CRUD,
            description: 'CRUD-ts is a modern React.js application built with TypeScript for robust Create, Read, Update, Delete (CRUD) operations on products. It features a clean, responsive UI using Tailwind CSS and Headless UI, showcasing efficient data management and modern frontend development practices.',
            vercelLink: 'https://crud-ts-psi.vercel.app/',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/CRUD-ts',
        },
        {
            id: 10,
            type: 'MERN Stack',
            name: 'Task Management Application',
            img: TaskMern,
            description: 'This MERN stack Task Management Application is a robust solution for corporate task organization and team collaboration. It features secure user authentication with JWT, role-based access control (User/Admin), and comprehensive task management with status tracking (Complete, In Progress, Pending).Built with React.js and Tailwind CSS for an intuitive frontend, and Node.js/Express.js for a secure backend (CORS, JWT, middleware), it utilizes MongoDB for efficient data management. I developed this application end-to-end, showcasing my full-stack MERN proficiency.',
            vercelLink: 'https://task-front-end-beta.vercel.app/',
            frontgitHupLink: 'https://github.com/MuhamedSherif2/Task-frontEnd',
            backgitHupLink: 'https://github.com/MuhamedSherif2/Task-backEnd',
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
    const [products, setProducts] = useState(projects);
    const [selectProduct, setSelectProduct] = useState(null);

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