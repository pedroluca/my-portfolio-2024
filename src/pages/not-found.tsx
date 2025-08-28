import NotFoundImg from '../../src/assets/images/dev.gif'
import { useNavigate } from 'react-router-dom'

export function NotFound({ theme }: { theme: string }) {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className='flex flex-col items-center justify-center p-4' style={{ height: 'calc(100vh - 4rem)'}}>
      <h1 className='text-4xl font-bold mb-4 animate-bounce'>Oops...</h1>
      <img className='h-64 mb-4' src={NotFoundImg} alt='Animated guy with dark blue hood coding in a laptop' />
      <p className={`text-lg  mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Erro 404: Página não encontrada</p>
      <p className={`text-md mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Parece que você se perdeu. Vamos te levar de volta para a página inicial.</p>
      <button 
        onClick={handleGoHome} 
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300'
      >
        Voltar para a Página Inicial
      </button>
    </div>
  )
}