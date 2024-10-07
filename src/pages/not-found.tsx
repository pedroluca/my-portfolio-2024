import NotFoundImg from '../../src/assets/images/dev.gif'
// import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center justify-center p-4" style={{ height: 'calc(100vh - 4rem)'}}>
      {/* <Helmet>
        <title>Página não encontrada</title>
      </Helmet> */}
      <h1 className="text-4xl font-bold mb-4 animate-bounce">Oops...</h1>
      <img className="h-64 mb-4" src={NotFoundImg} alt="Animated guy with dark blue hood coding in a laptop" />
      <p className="text-lg text-gray-100 mb-4">Erro 404: Página não encontrada</p>
      <p className="text-md text-gray-500 mb-8">Parece que você se perdeu. Vamos te levar de volta para a página inicial.</p>
      <button 
        onClick={handleGoHome} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Voltar para a Página Inicial
      </button>
    </div>
  )
}