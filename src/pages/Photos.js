import React, {useContext} from 'react';
import CapstoneContext from '../context/capstone/capstoneContext';

import Image from '../components/Image';
import {getClass} from '../utils'

function Photos() {
    const capstoneContext = useContext(CapstoneContext);
    const { allPhotos, loading } = capstoneContext;

    if (loading) return <h1>Loading...</h1>

    return (
        <main className="photos">
            {allPhotos[0].map((photo, index) => <Image key={photo.id} img={photo} className={getClass(index)} />)} 
        </main>
    )
}

export default Photos
