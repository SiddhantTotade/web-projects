import React, { useState } from 'react'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';

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
        {
            id: 11,
            imgSrc: 'https://images.unsplash.com/photo-1611145434336-2324aa4079cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlraW5pJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 12,
            imgSrc: 'https://images.unsplash.com/photo-1605248259586-a64eb06b6970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 13,
            imgSrc: 'https://images.unsplash.com/photo-1520551149954-41255a5fa237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw0ODAzMTYwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 14,
            imgSrc: 'https://images.unsplash.com/photo-1610340274015-f0e6f372017d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlraW5pJTIwZ2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 15,
            imgSrc: 'https://images.unsplash.com/photo-1531469535976-c6fc3604014f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2luaSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 16,
            imgSrc: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGJpa2luaSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 17,
            imgSrc: 'https://images.unsplash.com/flagged/photo-1553928841-ccac95ad7e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGJpa2luaSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 18,
            imgSrc: 'https://images.unsplash.com/photo-1573718493616-eabe3b8c4adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxiaWtpbmklMjBnaXJsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 19,
            imgSrc: 'https://images.unsplash.com/photo-1628510771171-bf0c7c1bf723?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHxiaWtpbmklMjBnaXJsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            imgSrc: 'https://images.unsplash.com/photo-1526784507872-e8ffc369bb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM5fHxiaWtpbmklMjBnaXJsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        }
    ]

    const [model, setModel] = useState(false)
    const [tempImg, setTempImg] = useState("")
    const getImg = (imgSrc) => {
        setTempImg(imgSrc)
        setModel(true)
    }

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempImg} alt="" />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" style={{ width: "100%", borderRadius: '5px', border: '2px solid gray' }} />
                    </div>
                })}
            </div>
        </>
    )
}
