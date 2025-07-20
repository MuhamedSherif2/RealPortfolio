import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import { Link } from 'react-router-dom';
import Button from '../../component/Button';

function AllProjects() {
    const { products, setSelectProduct } = useContext(Context);
    const productTypes = [...new Set(products.map(p => p.type))];
    const [activeTab, setActiveTab] = useState(productTypes[0] || 'javaScript');
    const handleSelectProject = (product) => {
        setSelectProduct(product)
    }

    if (!products || !Array.isArray(products)) {
        return <div>Loading projects...</div>;
    }
    const filteredProjects = products.filter(project => project.type === activeTab);

    return (
        <section className='py-10 min-h-screen w-full bg-[#D7D7D7]'>
            <div className='container mx-auto pt-[100px]'>
                <div className='flex justify-center'>
                    {
                        productTypes.map((type) => (
                            <Button key={type} onClick={() => setActiveTab(type)} className={activeTab === type ? ' bg-black text-white' : 'text-black bg-white'} >
                                {type}
                            </Button>
                        ))
                    }

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
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

