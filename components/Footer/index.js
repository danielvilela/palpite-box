import React from 'react'


const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por : Daniel Vilela /
                <a className='hover:underline' target='_blank' href='https://www.linkedin.com'> Linkedin </a>/
                 <a className='hover:underline' target='_blank' href='https://wwww.github.com'> Github</a>
                <div className='mt-4'>
                    <img className='inline p-4' src='/logo_devpleno.png' alt='DevPleno' />
                    <img className='inline p-4' src='logo_semana_fsm.png' alt='Semana FSM' />
                </div>
            </div>
        </div>
    )
}

export default Footer;