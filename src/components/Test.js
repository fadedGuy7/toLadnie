import React from 'react'
import { Select, InputText, InputFile } from './sideComponents/form/Form'


const Test = () => {
    let values = {
        'default': 'wybierz opcje',
        0: 'zero',
        1: 'jeden'
    }
    return(
            <form className='browser-default blueGrey text'>
                <h2>Login</h2>

                <InputText label='Test' />
                <InputText label='Name' />
                <InputText label='Email' />

                <InputFile />

                <button className='customButton'>Zaloguj</button>

                <Select values={values}/>

            </form>

    )
}

export default Test