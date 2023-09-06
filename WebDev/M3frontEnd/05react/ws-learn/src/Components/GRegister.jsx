import React from 'react';



export default function GRegister(props) {

    return (
        <div className='container card p-4 my-4 mx-3 text-start'>

            <form onSubmit={props.submit}>

                <h2 className='text-center'>Registration Form </h2>

                <div className='form-group mt-4'>
                    <label htmlFor="name" className=''> Name : </label>
                    <input type="text" name="name" id="name" className='form-control' required />
                </div>

                <div className='form-group mt-4'>
                    <label htmlFor="email"> Email  : </label>
                    <input type="email" name="email" id="email" className='form-control' required/>
                </div>

                <div className='form-group mt-4'>
                    <label htmlFor="password"> Password  : </label>
                    <input type="password" name="password" id="password" className='form-control' required />
                </div>

                <button type="submit" className='btn btn-primary mt-3'>Register </button>

                
            </form>

        </div>
    )
}
