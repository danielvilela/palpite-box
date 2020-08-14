import React from 'react'
import Link from 'next/link'

const Index = () => {

    return (
        <div>
            <p className="mt-12 text-center">
                O restaurante Point sempre busca por atender melhor os seus clientes. <br />
                Por isso sempre estamos abertos a ouvir a sua opinião!
           </p>


            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='transition duration-500 hover:shadow hover:bg-green-800  bg-green-600 px-12 py-4 rounded-lg shadow-lg text-white font-bold'> Dar opinião ou sugestão</a>
                </Link>

                <p className='mt-12'>Mensagem do desconto</p>

            </div>

        </div>

    )
}

export default Index