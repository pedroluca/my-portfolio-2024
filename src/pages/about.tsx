import { PageTitle } from "../components/page-title/page-title"
import ProfileIcon from '../assets/images/profile.png'

export function About() {
  const todayDate: Date = new Date();
  const myBirthday: Date = new Date('2003-01-28')
  const differenceInMilliseconds: number = todayDate.getTime() - myBirthday.getTime()
  const myAge: number = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25))

  return (
    <main className="py-4 px-6 lg:px-64 w-full flex flex-col gap-3 text-justify pt-24" id="about-section">
      <PageTitle>Sobre mim</PageTitle>
      <section>
        <img src={ProfileIcon} className="h-40 mb-4 lg:mb-0 lg:h-64 mx-auto lg:float-left lg:mr-5" />
        <p>Meu nome é Pedro Luca Prates, tenho {myAge} anos e sou Técnico em Informática e Desenvolvedor Web Fullstack.</p>
        <br/>
        <p>Em 2021, conclui a minha formação como Técnico em Informática para Internet no IF Baiano - <em>Campus</em> Guanambi, mesma instituição onde atualmente estou cursando Análise e Desenvolvimento de Sistemas. Sou apaixonado pelo mundo da programação desde que iniciei meus estudos na área, em 2018, e tenho muita afinidade com Front-End, apesar de também gostar e compreender facilmente as complexidades do Back-End (Já desenvolvi alguns projetos como Dev Full-Stack).</p>
        <br/>
        <p>Tenho experiência com as tecnologias: HTML, CSS, JavaScript, TypeScript, PHP, Laravel, Python, Django, SQL, Java, C e atualmente estou estudando React.JS.</p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-3xl mt-6">Carreira Acadêmica</h2>
        <div>
          <h4 className="text-xl text-white">Técnologo em Análise e Desenvolvimento de Sistemas</h4>
          <p>IF Baiano - <em>Campus</em> Guanambi • Guanambi,BA</p>
          <p>Ago. 2022 -- Presente</p>
        </div>
        <div>
          <h4 className="text-xl text-white">Ensino Médio Integrado ao Curso Técnico em Informática para Internet</h4>
          <p>IF Baiano - <em>Campus</em> Guanambi • Guanambi, BA</p>
          <p>Jan. 2018 -- Ago. 2021</p>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-3xl mt-6">Carreira Profissional</h2>
        <div>
          <h4 className="text-xl text-white">Desenvolvedor Web Fullstack</h4>
          <p>Freelancer • Brasil</p>
          <p>Ago. 2021 -- Presente</p>
        </div>
        <div>
          <h4 className="text-xl text-white">Estagiário em Desenvolvimento</h4>
          <p>VISDOM • Guanambi, BA</p>
          <p>Abr. 2024 -- Jun. 2024</p>
        </div>
        <div>
          <h4 className="text-xl text-white">Técnico de TI</h4>
          <p>Hospital Geral de Guanambi • Guanambi, BA</p>
          <p>Dez. 2021 -- Ago. 2022</p>
        </div>
        <div>
          <h4 className="text-xl text-white">Estagiário em Suporte Técnico</h4>
          <p>VISDOM • Guanambi, BA</p>
          <p>Jun. 2019 -- Fev. 2020</p>
        </div>
      </section>
    </main>
  )
}