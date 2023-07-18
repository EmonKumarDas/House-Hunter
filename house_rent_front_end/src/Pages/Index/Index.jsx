import React from 'react';
import Slide from '../../Components/Slider';
import Card from '../../Components/Card';

const Index = () => {
    return (
        <>
            <Slide></Slide>
            <h1 className='font-bold font-mono text-3xl text-center my-3'>Fetured Properties</h1>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};

export default Index;