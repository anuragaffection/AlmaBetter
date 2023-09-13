import React from 'react';



export default function GRegister(props) {

    let btnStyle;
    btnStyle = {
        backgroundColor : 'green',
        color : 'white',
    };



    let btnText;
    let passBoxType;

    if (props.showPass === true){
        btnStyle.backgroundColor = 'red';
        btnText = 'Hide Password';
        passBoxType='text'
    }else {
        btnText = 'Show Password';
        passBoxType = 'password'
    }



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
                    <input type={passBoxType} name="password" id="password" className='form-control' required />
                </div>

                <button type="submit" className='btn btn-primary mt-3'>Register </button>

                <button type='button' className='btn mx-2 mt-3' style={btnStyle} onClick={props.click}>{btnText} </button>

                
            </form>

        </div>
    )
}
