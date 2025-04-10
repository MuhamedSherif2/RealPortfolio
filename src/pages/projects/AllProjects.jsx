import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import { Link } from 'react-router-dom';

function AllProjects() {
    const [activeTab, setActiveTab] = useState('javaScript');
    const { products, setSelectProduct } = useContext(Context);
    const handleSelectProject = (product) => {
        setSelectProduct(product)
    }

    if (!products || !Array.isArray(products)) {
        return <div>Loading projects...</div>;
    }
    const filteredProjects = products.filter(project => project.type === activeTab);

    return (
        <section className={activeTab === 'javaScript'? 'w-full h-auto bg-[#D7D7D7] pt-5 pb-10' : 'w-full h-screen bg-[#D7D7D7] pt-5 pb-10' }>
            <div className='container mx-auto'>
                <div className='flex justify-center gap-[40px]'>
                    <button onClick={() => setActiveTab('javaScript')}
                        className={activeTab === 'javaScript' ? 'active bg-black text-white text-[20px] rounded-md py-2 px-3 transition duration-300' : 'text-black bg-white text-[20px] rounded-md py-2 px-3 transition duration-300'}
                    >
                        JavaScript
                    </button>
                    <button onClick={() => setActiveTab('react')}
                        className={activeTab === 'react' ? 'active  text-white bg-black text-[20px] rounded-md py-2 px-3' : 'text-black bg-white text-[20px] rounded-md py-2 px-3'}
                    >
                        React
                    </button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {filteredProjects.map((product) =>
                        <Link to={`/project/${product.id}`} key={product.id} onClick={() => handleSelectProject(product)} className='mx-auto' >
                            <img src={product.img} alt={product.name} className='w-[270px] h-[210px] md:w-[350px] md:h-[270px] mt-5' />
                        </Link>
                    )
                    }
                </div>
            </div>
        </section>
    )
}

export default AllProjects


