import React, { useEffect, useState } from 'react'
import Images from './IMG.json';
import './Index.css'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const Index = () => {
    const [current, setCurrent] = useState(1)

    const btnPrev = () => {
        console.log(current ? current - 1 : 1);
        setCurrent(current == 1 ? 3 : current - 1);
    }
    const btnFor = () => {
        setCurrent(current == 3 ? 1 : current + 1)
        console.log(current);
    }

//    useEffect(()=>{
//        setInterval(() => {
//            console.log("ih")
//            setCurrent(current + 1)
//        }, 6000)
//    })
    

    return (
        <>
            <div className="container container-img ">
                {
                    Images.map((item) => {

                        return (
                            current === item.id &&
                            <div key={item.id} className='each-img-div'>
                                <img src={item.img} className='img'
                                />
                                <FaLongArrowAltLeft onClick={btnPrev} className='arrowleft' />
                                <FaLongArrowAltRight onClick={btnFor} className='arrowright' />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
// d - flex justify - content - center align - items - center
export default Index