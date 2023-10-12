import React from 'react'

export default function FDetails(props) {

    return (

        <div>

            <div className='container-fluid'>

                <div className='col-md-5 m-auto'>

                    <div className='mt-3'>

                        <div className='card text-start'>

                            <div className='card-body'>

                                <form onSubmit={props.submit}>


                                    <div className='form-group mb-4'>

                                        <label htmlFor="yourName">
                                            {''}
                                            <b>1. </b> Name
                                        </label>

                                        <input
                                            type="text"
                                            name="yourName"
                                            id="yourName"
                                            className='form-control'
                                            placeholder='Please Enter Your Name'
                                            autoComplete='off'
                                            required
                                        />

                                    </div>




                                    <div className='form-group mb-4'>

                                        <label htmlFor="emailAddress">
                                            {''}
                                            <b>2. </b> Email
                                        </label>

                                        <input
                                            type="email"
                                            name="emailAddress"
                                            id="emailAddress"
                                            className='form-control'
                                            placeholder='Please Enter Your Email'
                                            autoComplete='off'
                                            required
                                        />

                                    </div>


                                    <button
                                        type="submit"
                                        className='btn btn-primary'>
                                        Next
                                    </button>


                                </form>

                                <center>

                                    <span className='badge badge-pill bg-primary'>
                                        1
                                    </span>

                                    <span className='badge badge-pill text-primary'>
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
