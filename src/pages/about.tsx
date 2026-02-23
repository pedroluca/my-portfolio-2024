import { PageTitle } from '../components/page-title/page-title'
import ProfileIcon from '../assets/images/profile.webp'
import { CareerTimeline } from '../components/about/career-timeline'

export function About({ theme }: { theme: string }) {
  const todayDate: Date = new Date()
  const myBirthday: Date = new Date('2003-01-28')
  const differenceInMilliseconds: number = todayDate.getTime() - myBirthday.getTime()
  const myAge: number = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25))

  return (
    <main className='py-4 px-6 lg:px-[25%] w-full flex flex-col gap-3 text-justify pt-24' id='about-section'>
      <PageTitle>Sobre mim</PageTitle>
      <section>
        <img src={ProfileIcon} className='h-40 mb-4 lg:mb-0 lg:h-64 mx-auto lg:float-left lg:mr-5' />
        <p>Meu nome é Pedro Luca Prates, tenho {myAge} anos e sou Desenvolvedor Web Fullstack e Técnico em Informática.</p>
        <br/>
        <p>Em 2021, conclui a minha formação como Técnico em Informática para Internet no IF Baiano - <em>Campus</em> Guanambi, e em agora em 2025 me formei em Análise e Desenvolvimento de Sistemas. Sou apaixonado pelo mundo da programação desde que iniciei meus estudos na área, em 2018, e tenho muita afinidade com Front-End, apesar de também gostar e compreender facilmente as complexidades do Back-End (Já desenvolvi alguns projetos como Dev Full-Stack).</p>
        <br />
        <p>Tenho experiência com as tecnologias: HTML, CSS, JavaScript, TypeScript, Python, Django, PHP, Laravel, SQL, Java, C e atualmente estou estudando React.JS.</p>
      </section>
      <CareerTimeline theme={theme} />
    </main>
  )
}
