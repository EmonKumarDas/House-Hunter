import React, { useContext, useState } from 'react';
import Slide from '../../Components/Slider';
import Card from '../../Components/Card';
import { ApiContext } from '../../Provider/ApiProvider';

const Index = () => {
    const { Houses } = useContext(ApiContext);
    const productsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index of the first and last product for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    // Get the current products to display on the page
    const currentProducts = Houses?.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Slide></Slide>
            <h1 className='font-bold font-mono text-3xl text-center my-3'>Featured Properties</h1>
          
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
                        {currentProducts.map((house) => (
                            <Card
                                key={house._id}
                                house={house}
                            />
                        ))}
                    </div>
        
            {/* Pagination */}
            <div className="flex justify-center my-4">
                {Array.from({ length: Math.ceil(Houses?.length / productsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-2 px-4 py-2 rounded ${
                            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Index;
