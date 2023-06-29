export async function obtenerRecetas(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const recetas = await respuesta.json();
    return recetas;
}