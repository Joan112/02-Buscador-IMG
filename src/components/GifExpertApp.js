import React, { useState } from 'react'
import { AddCategoria } from './AddCategoria';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

    const [categorias, setCAtegorias] = useState(['']);

    return (
        <>
            <p className="parrafo">Buscador de imagenes Gif</p>
            <AddCategoria
                setCAtegorias={setCAtegorias}
            />
            <hr />
            <ol>
                {
                    categorias.map(categorias => (
                        <GifGrid
                            key={categorias}
                            categorias={categorias}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
