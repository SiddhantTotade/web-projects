import React from 'react'
import './gallery.css'

export const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: 'https://images.unsplash.com/photo-1485463598028-44d6c47bf23f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFkaWVzJTIwb24lMjB0aGUlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            imgSrc: 'https://plus.unsplash.com/premium_photo-1658506850882-0975288a6129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhZGllcyUyMG9uJTIwdGhlJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 3,
            imgSrc: 'https://images.unsplash.com/photo-1491154664016-3a6107d463ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhZGllcyUyMG9uJTIwdGhlJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 4,
            imgSrc: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 5,
            imgSrc: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 6,
            imgSrc: 'https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 7,
            imgSrc: 'https://images.unsplash.com/photo-1515161318750-781d6122e367?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlraW5pJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 8,
            imgSrc: 'https://images.unsplash.com/photo-1568819317551-31051b37f69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2luaSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 9,
            imgSrc: 'https://images.unsplash.com/photo-1592657231448-1007f74b1fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpa2luaSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 10,
            imgSrc: 'https://images.unsplash.com/photo-1596448594144-c11efc8c98d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJpa2luaSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
    ]
    return (
        <>
            <div className='gallery'>
                {data.map((item, index) => {
                    return <div className='pics' key={index}>
                        <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
                    </div>
                })}
            </div>
        </>
    )
}
