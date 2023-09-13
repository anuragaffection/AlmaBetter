import React from 'react';


export default function FQuestions(props) {

    return (
        <div>

            <div className="container-fluid">

                <div className='col-md-5 m-auto'>

                    <div className='mt-3'>

                        <div className='card text-start'>

                            <div className='card-body'>

                                <form onSubmit={props.submit}>


                                    <div className='form-group mb-4 mt-2'>

                                        <label htmlFor="" className='mb-2'>
                                            {''}
                                            <b>3.</b> What are you currently doing ?
                                        </label>
                                        <br />



                                        <input
                                            type="radio"
                                            name="q3"
                                            id="teacher"
                                            value='teaching'
                                            autoComplete='off'
                                        />
                                        <label
                                            htmlFor="teacher"
                                            className='me-3 ms-1'>
                                            Teaching
                                        </label>



                                        <input
                                            type="radio"
                                            name="q3"
                                            id="student"
                                            value="Studying"
                                            autoComplete='off'
                                        />
                                        <label
                                            htmlFor="student"
                                            className='ms-1 me-3'>
                                            Studying
                                        </label>



                                        <input
                                            type="radio"
                                            name="q3"
                                            id="jobs"
                                            value='Programming'
                                            autoComplete='off'
                                        />
                                        <label
                                            htmlFor="jobs"
                                            className='ms-1 me-3'>
                                            Programming
                                        </label>



                                        <input
                                            type="radio"
                                            name="q3"
                                            id="others"
                                            value='Others'
                                            autoComplete='off'
                                        />
                                        <label
                                            htmlFor="others"
                                            className='ms-1 me-3'>
                                            Others
                                        </label>



                                        <input
                                            type="text"
                                            className='form-control my-2 bg-light'
                                            name="other"
                                            placeholder='Type here if not listed'
                                        />

                                    </div>






                                    <div className='form-group mb-4'>

                                        <label htmlFor="" className='mb-2'>
                                            {''}
                                            <b>4.</b> Rate Our Courses  ?
                                        </label>
                                        <br />



                                        <input
                                            type="radio"
                                            name="q4"
                                            id="poor"
                                            value="Poor"
                                            autoComplete='off'
                                        />
                                        <label
                                            htmlFor="poor"
                                            className='me-3 ms-1'>
                                            Poor
                                        </label>



                                        <input
                                            type="radio"
                                            name="q4"
                                            id="average"
                                            value='Average'
                                            autoComplete='off'
                                        />
                                        <label
                                            htmlFor="average"
                                            className='ms-1 me-3'>
                                            Average
                                        </label>



                                        <input
                                            type="radio"
                                            name="q4"
                                            id="excellent"
                                            value='Excellent'
                                            autoComplete='off'
                                        />
                                        <label
                                            htmlFor="excellent"
                                            className='ms-1 me-3'>
                                            Excellent
                                        </label>


                                    </div>



                                    <div className='form-group mb-4'>

                                        <label htmlFor="review" className='mb-1'>
                                            <b>5.</b> Write Your Review Here !
                                        </label>
                                        <br />

                                        <textarea
                                            name="q5"
                                            className='form-control'
                                            id="review"
                                            cols=''
                                            rows="2">
                                        </textarea>

                                    </div>





                                    <button
                                        type="submit"
                                        className='btn btn-primary'>
                                        Next
                                    </button>





                                </form>


                                <center>
                                    <span className='badge badge-pill text-primary'>
                                        1
                                    </span>

                                    <span className='badge badge-pill bg-primary'>
                                        2
                                    </span>
                                </center>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
