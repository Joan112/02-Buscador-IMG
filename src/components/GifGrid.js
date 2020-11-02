import React, { useState, useEffect } from 'react'
import { getGisf } from '../helpers/GetGisf';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ categorias }) => {

    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        getGisf(categorias)
            .then(setImagenes)
    }, [categorias])

    
    return (
        <>
            <div>
                <h3>{categorias}</h3>
            </div>
            <div className="card-grid">  
                {
                    imagenes.map(img => (
                        <GifGridItems 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
