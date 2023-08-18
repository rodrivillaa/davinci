import React,{createContext,useContext} from 'react'


const Context=createContext()

const ContextProvider = ({children}) => {
   const products=[
        {
            nombre: "Fuerzas de seguridad Nacional",
            img: "https://www.argentina.gob.ar/sites/default/files/el_presidente_de_la_nacion_entrego_equipamiento_a_las_fuerzas_de_seguridad_y_anuncio_que_el_desplazamiento_de_efectivos_al_amba_5.jpeg",
            id:1
        },

            {nombre: "Organismos Publicos/Nacionales",
            img:"https://www.argentina.gob.ar/sites/default/files/argentina-fb.png",
            id:2
        },

            {nombre: "Fuerzas Armadas",
            img: "https://www.infobae.com/new-resizer/3KH61QZ1y5ybkSiwerk2J-kfzfo=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YMPFNWE7CRHTBKAZ72KPCZLALE.jpg",
            id:3
        },

        


        
        ]

        const getProductById = (id) => {
            return products.find(producto => producto.id == id)
        }


return (
    <Context.Provider value={{products,getProductById}}> 
    {children}   
    </Context.Provider>
)
} 


export const useCustomContext =() => useContext(Context)

export default ContextProvider 