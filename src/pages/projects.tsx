import { PageTitle } from "../components/page-title/page-title";
import { ProjectCard } from "../components/cards/project-card";

export function Projects() {
  return (
    <section className="py-4 px-6 lg:px-64 w-full flex flex-col gap-3 text-justify pt-24 mb-16" id="projects-section">
      <PageTitle>Projetos</PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Site para I Olimpíadas Científicas do Território Sertão Produtivo"
          description="Site para divulgação de datas, inscrições, e contato dos participantes das I Olimpíadas Científicas do Território Sertão Produtivo." 
          url="https://www.olimpiadasdosertaoprodutivo.com/"
        />
        <ProjectCard
          title="Gerenciador de faturas" 
          description="Um simples site para gerenciamento de fatores e compras no cartão de crédito." 
          url="https://billing-manager.vercel.app/" 
        />
        <ProjectCard
          title="Blog Criança Alerta" 
          description="Blog educativo com o intuito de ensinar para as crianças e adolescentes sobre seus direitos." 
          url="https://www.blogcriancaalerta.epizy.com/" 
        />
        <ProjectCard
          title="Catálogo de Serviços" 
          description="Plataforma online para divulgação de empresas e pequenos comércios na região." 
        />
        <ProjectCard
          title="Repaginação do site do IF Baiano campus Guanambi" 
          description="Atividade acadêmica cujo intuito era desenvolver ou repaginar um site" 
          url="https://repage-if-baiano.vercel.app/" 
        />
        <ProjectCard
          title="Small Phones" 
          description="Sistema de solicitação de atendimentos técnicos. O cliente se cadastra e entra em contato com um técnico." 
        />
      </div>
      <p className="mt-6 text-center text-gray-400">
        Veja mais projetos no meu perfil do GitHub: 
        <a href="https://github.com/pedroluca" target="_blank" rel="noopener noreferrer" className="text-white hover:underline ml-2">
          @pedroluca
        </a>
      </p>
    </section>
  )
}