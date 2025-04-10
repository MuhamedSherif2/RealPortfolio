import { useContext } from "react";
import { Context } from "../../Context";
import { useParams } from "react-router-dom"
import { FaCode } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";


function ProjectDetails() {
    const { products } = useContext(Context)
    const { id } = useParams();
    const filterProduct = products.filter((product) => product.id == id)
    console.log(filterProduct)

    return (
        <section className="bg-[#D7D7D7] w-full h-screen">
            {
                filterProduct.map((item) => (
                    <div key={item.id} className='mx-auto w-[320px] md:w-[600px] text-center pt-5'>
                        <img
                            src={item.img}
                            alt={item.name}
                            className='rounded-md w-[300px] h-[220px] md:w-[500px] md:h-[350px] mx-auto'
                        />
                        <div className='mt-5'>
                            <h3 className='font-bold text-[30px]'>{item.name}</h3>
                            <p>{item.description}</p>
                            <div className="flex flex-col mdl:flex-row gap-7 items-center justify-center mt-3">
                                <a href={item.vercelLink} target="_blank">
                                    <button className="flex items-center gap-1 text-20px font-semibold py-[6px] px-2 bg-[#ff0000] rounded transition duration-300 hover:text-white hover:bg-[black]">
                                        Live Demo<FaLocationArrow />
                                    </button>
                                </a>
                                <a href={item.gitHupLink} target="_blank">
                                    <button className="flex items-center gap-1 text-20px font-semibold py-[6px] px-3 bg-[#008000] rounded transition duration-300  hover:text-white hover:bg-[#000000]">
                                        Code<FaCode />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default ProjectDetails

