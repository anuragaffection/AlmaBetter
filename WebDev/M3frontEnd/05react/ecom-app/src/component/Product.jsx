import React, { useState } from 'react'

export default function Product() {

    const [count, setCount] = useState(0);

    const info = {
        'id': 3,
        'title': "Mens Cotton Jacket",
        'price': 55.99,
        'description': "Great outerwear jackets for Spring",
        'category': "Men's Clothing",
        'image': "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        'rating': {
            'rate': 4.7,
            'count': 500,
        }
    }


    const handleClickAdd = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const handleClickSubstract = () => {
        setCount((prevCount) => prevCount - 1)
    }


    return (

        <div>

            <div className='container card my-3 p-3 bg-light'>

                <div className="col-md-6">

                    <img
                        src={info.image}
                        alt={info.title}
                        height={'100px'}
                        width={''}
                    />
                </div>


                <div className="col-md-6">

                    <h4 className="text-uppercase text-black-50">
                        {
                            info.category
                        }
                    </h4>

                    <h1 className="display-5">
                        {
                            info.title
                        }
                    </h1>

                    <p className="lead fw-bolder">
                        {/* is here , conditional rendering */}
                        Rating {info.rating && info.rating.rate}
                    </p>

                    <h3 className="display-6 fw-bold my-4">
                        ${info.price}
                    </h3>

                    <p className="lead">
                        {
                            info.description
                        }
                    </p>

                    <div
                        className="container d-flex justify-content-evenly p-2">

                        <button
                            onClick={handleClickAdd}
                            className='btn btn-primary px-3'
                        >
                            +
                        </button>

                        <div>
                            {
                                count * info.price
                            }
                            $
                            {
                                count === 0 ? true : (
                                    <div>
                                        for {count} items
                                    </div>

                                )
                            }
                        </div>

                        <button
                            onClick={handleClickSubstract} className='btn btn-primary px-3'>
                            -
                        </button>

                    </div>

                </div>

            </div>


        </div>
    )
}
