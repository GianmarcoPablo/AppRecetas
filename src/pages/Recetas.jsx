import { obtenerRecetas } from "../db"
import { useLoaderData } from "react-router-dom"
import Receta from "../components/Receta"

export function loader(){
    const recetas = obtenerRecetas()
    return recetas
}

const Recetas = () => {

    const recetas = useLoaderData()
    return (
        <>
            <div>
                <h1 className="mt-14 text-4xl font-black ml-10 underline">Aprende a cocinar Dev</h1>
                <p className="ml-10 text-lg mt-4 text-orange-800 font-semibold">Por que recuerda porgramador sin panza no es de confianza</p>
            </div>
            {recetas.length > 0 ? (
                <div className="mt-14 flex ">
                    { recetas.map(receta=>(
                        <Receta key={receta.id} receta={receta}/>
                    ))}
                </div>
            ):(
                <p>Aun no hay recetas</p>
            )}
        </>
    )
}

export default Recetas