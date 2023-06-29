import React from 'react'

const Receta = ({receta}) => {

    const {title,ingredients,instructions,category,rating,comments} = receta
    return (
        <div className='container mx-auto flex justify-center flex-wrap'>
            <div className='w-3/4 bg-orange-50 '>
                <h1 className='text-center text-lg font-bold py-2 bg-orange-500 text-gray-50' >{title}</h1>
                
                <div className='px-10 py-4'>
                    {ingredients.map(ingrediente=>(
                        <li>{ingrediente}</li>
                    ))}
                    <p className='  font-bold my-3'>Receta: <br /> <span className='text-black font-normal'>{instructions}</span></p>
                    <p className='text-center my-3 bg-red-100 font-semibold'>{category}</p>
                    <p className='text-yellow-600 font-black my-4'>{rating} Estrellas</p>
                    <p className='my-3 font-bold'>Comentarios: </p>
                    {comments.map(comment=>(
                        <>
                            <p className='text-xl font-bold'>{comment.user} :</p>
                            <p className='my-2 text-lg'>{comment.comment} </p>
                        </>
                    ))}
                </div>
                
            </div>
                            
        </div>
  )
}

export default Receta