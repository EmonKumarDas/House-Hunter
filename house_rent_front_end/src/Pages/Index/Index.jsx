import React, { useContext } from 'react';
import Slide from '../../Components/Slider';
import Card from '../../Components/Card';
import { ApiContext } from '../../Provider/ApiProvider';

const Index = () => {
    const { Houses, loading } = useContext(ApiContext);
    return (
        <>
            <Slide></Slide>
            <h1 className='font-bold font-mono text-3xl text-center my-3'>Featured Properties</h1>
            {
                loading ? "Loading..." :
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
                        {Houses?.map((house) => (
                            <Card
                                key={house._id}
                                house={house}
                            />
                        ))}
                    </div>
            }
        </>
    );
};

export default Index;
