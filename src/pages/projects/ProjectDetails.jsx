import { useContext } from "react";
import { Context } from "../../Context";
import { useParams } from "react-router-dom"
import { FaCode } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import Button from "../../component/Button";


function ProjectDetails() {
    const { products } = useContext(Context)
    const { id } = useParams();
    const filterProduct = products.filter((product) => product.id == id)
    return (
        <section className="bg-[#D7D7D7] w-full min-h-screen">
            {
                filterProduct.map((item) => (
                    <div key={item.id} className='mx-auto w-[320px] md:w-[600px] text-center pt-[100px]'>
                        <img
                            src={item.img}
                            alt={item.name}
                            className='rounded-md w-[300px] h-[220px] md:w-[500px] md:h-[350px] mx-auto'
                        />
                        <div className='mt-5'>
                            <h3 className='font-bold text-[30px]'>{item.name}</h3>
                            <p>{item.description}</p>
                            {
                                item.type === 'MERN Stack' ?
                                    <div className="flex flex-col mdl:flex-row mdl:gap-7 items-center justify-center mt-5">
                                        <a href={item.vercelLink} target="_blank">
                                            <Button icon={<FaLocationArrow />} className={'bg-[#ff0000] hover:bg-[black] hover:text-white '}>
                                                Live Demo
                                            </Button>
                                        </a>
                                        <a href={item.frontgitHupLink} target="_blank">
                                            <Button icon={<FaCode />} className={'bg-[#008000] hover:bg-[#000000] hover:text-white  mt-2 '}>
                                                FrontEnd Code
                                            </Button>
                                        </a>
                                        <a href={item.backgitHupLink} target="_blank">
                                            <Button icon={<FaCode />} className={'bg-[#008000] hover:bg-[#000000] hover:text-white  mt-2 '}>
                                                BackEnd Code
                                            </Button>
                                        </a>
                                    </div> :
                                    <div className="flex flex-col mdl:flex-row mdl:gap-7 items-center justify-center mt-3 ">
                                        <a href={item.vercelLink} target="_blank">
                                            <Button icon={<FaLocationArrow />} className={'bg-[#ff0000] hover:bg-[black] hover:text-white '}>
                                                Live Demo
                                            </Button>
                                        </a>
                                        <a href={item.frontgitHupLink} target="_blank">
                                            <Button icon={<FaCode />} className={'bg-[#008000] hover:bg-[#000000] hover:text-white  mt-2 '}>
                                                FrontEnd Code
                                            </Button>
                                        </a>
                                    </div>
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default ProjectDetails

