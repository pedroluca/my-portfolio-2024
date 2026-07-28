import { useState } from 'react'
import { SetupCard, SetupCardSkeleton } from '../components/cards/setup-card'
import { PageTitle } from '../components/page-title/page-title'
import { ScrollToTopButton } from '../components/scroll-to-top'

export function Setup({ theme }: { theme: string }) {
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 1000)

  return (
    <section className='py-4 px-6 lg:px-[25%] w-full flex flex-col gap-3 text-justify pt-24 mb-16'>
      <PageTitle>Setup</PageTitle>
      <nav className='flex gap-3 mb-8 overflow-x-auto pb-2' style={{ scrollbarWidth: 'none' }}>
        <a href='#workstation-section' className='whitespace-nowrap px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors'>Workstation</a>
        <a href='#coding-section' className='whitespace-nowrap px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors'>Coding</a>
        <a href='#web-tools-section' className='whitespace-nowrap px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors'>Web Tools</a>
        <a href='#books-section' className='whitespace-nowrap px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors'>Books</a>
        <a href='#newsletter-section' className='whitespace-nowrap px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors'>Newsletter</a>
      </nav>
      <section className='flex flex-col'>
        <div className='' id='workstation-section'>
          <h3 className='mb-3 text-2xl'>Workstation</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6'>
            {loading ? (
              <>
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
              </>
            ) : (
              <>
                <SetupCard theme={theme} src='laptop' itemType='Samsung Galaxy Book3 360 13.3"' itemName='Laptop' url='https://www.amazon.com.br/dp/B0C5RY1WG9?psc=1&ref=ppx_yo2ov_dt_b_product_details' />
                <SetupCard theme={theme} src='monitor' itemType='LG Ultrawide 25UM58G-P 25"' itemName='Monitor' url='https://www.lg.com/br/monitores/monitores-ultrawide/25um58g-p/' />
                <SetupCard theme={theme} src='monitor2' itemType='Samsung S3 24"' itemName='Monitor' url='https://www.mercadolivre.com.br/monitor-gamer-samsung-24-fhd100-hz-hdmi-vgapreto-s3/p/MLB46560669#polycard_client=recommendations_cart_list_history&reco_backend=user_navigation_cart&reco_client=cart_list_history&reco_item_pos=2&reco_backend_type=function&reco_id=f7137fde-c7aa-4626-9bf9-6642a0a9be2d&wid=MLB5398777122&sid=recos' />
                {/* <SetupCard theme={theme} src='monitor2' itemType='Samsung S3 24"' itemName='Monitor' url='https://www.artsolutioninformatica.com.br/monitor-lg-flatron-e1941c-185-polegadas' /> */}
                <SetupCard theme={theme} src='earpods' itemType='QCY HT08 Pro' itemName='Earpods' url='https://www.amazon.com.br/dp/B0D4QRHDZ9?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1' />
                <SetupCard theme={theme} src='headphone' itemType='QCY H3' itemName='Headphone' url='https://www.amazon.com.br/QCY-ANC-Cancelamento-Certifica%C3%A7%C3%A3o-Multipontos/dp/B0CFFD7K4F/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-2' />
                {/* <SetupCard theme={theme} src='headset' itemType='Headset' itemName='Razer Kraken Lite' url='https://www.amazon.com.br/gp/product/B07XC936P8/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1' /> */}
                <SetupCard theme={theme} src='mouse1' itemType='App-Tech MWR560' itemName='Mouse' url='https://www.kalunga.com.br/prod/mouse-sem-fio-ergonomico-recarregavel-1600dpi-preto-mwr560-app-tech-cx-1-un/436344' />
                <SetupCard theme={theme} src='mousepad' itemType='Eddias Deskpad Office' itemName='Mousepad' url='https://www.eddias.com.br/products/mousepad-deskpad-office?variant=44281336103229' />
                <SetupCard theme={theme} src='smartphone2' itemType='Samsung Galaxy S25 5G' itemName='Smartphone' url='https://www.mercadolivre.com.br/samsung-galaxy-s25-5g-256gb-12gb-camera-tripla-azul-marinho/p/MLB45502223?pdp_filters=item_id:MLB4646112803' />
                <SetupCard theme={theme} src='smartphone' itemType='Redmi Note 11 Pro' itemName='Smartphone' url='https://www.mi.com/br/product/redmi-note-11-pro/' />
                <SetupCard theme={theme} src='smartwatch' itemType='Samsung Galaxy Fit3' itemName='Smartband' url='https://www.mercadolivre.com.br/samsung-smartwatch-galaxy-fit3-grafite/p/MLB34163245?pdp_filters=item_id:MLB3956720093' />
                <SetupCard theme={theme} src='alexa' itemType='Alexa Echo Dot 4ª gen' itemName='Assistente' url='https://www.amazon.com.br/Echo-Dot-com-Rel%C3%B3gio-Cor-Branca/dp/B084J4WP6J' />
                <SetupCard theme={theme} src='hub' itemType='Hub USB-C -> USB-A' itemName='Acessório' url='https://pt.aliexpress.com/item/1005005445851704.html?spm=a2g0o.order_list.order_list_main.30.21efcaa40xX5Os&gatewayAdapt=glo2bra' />
                <SetupCard theme={theme} src='moleskine' itemType='Moleskine' itemName='Acessório' url='https://www.desenherabisque.com.br/' />
              </>
            )}
          </div>
        </div>
        <div className='pt-20' id='coding-section'>
          <h3 className='mb-3 text-2xl'>Coding</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6'>
            {loading ? (
              <>
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
              </>
            ) : (
              <>
                <SetupCard theme={theme} src='antigravity' itemType='Antigravity' itemName='IDE' url='https://antigravity.google/' />
                <SetupCard theme={theme} src='vscode' itemType='VS Code' itemName='IDE' url='https://code.visualstudio.com/' />
                <SetupCard theme={theme} roundImg src='vesperpptheme' itemType='Vesper++' itemName='Tema' url='https://marketplace.visualstudio.com/items?itemName=Obstinate.vesper-pp' />
                <SetupCard theme={theme} roundImg src='vesperpptheme' itemType='Vesper Extended Cursor' itemName='Tema' url='https://open-vsx.org/extension/oreofreakshake/vesper-extended-cursor' />
                <SetupCard theme={theme} src='jetbrains' itemType='JetBrains Mono' itemName='Fonte' url='https://www.jetbrains.com/pt-br/lp/mono/' />
                <SetupCard theme={theme} src='hyper' itemType='Hyper' itemName='Terminal' url='https://hyper.is/' />
                <SetupCard theme={theme} src='gitbash' itemType='Git Bash for Windows' itemName='Shell' url='https://git-scm.com/' />
              </>
            )}
          </div>
        </div>
        <div className='pt-20' id='web-tools-section'>
          <h3 className='mb-3 text-2xl'>Web Tools</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 tooltip-container'>
            {loading ? (
              <>
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
              </>
            ) : (
              <>
                <SetupCard theme={theme} roundImg src='brave' itemType='Brave Browser' itemName='Navegador' url='https://brave.com' />
                <SetupCard theme={theme} roundImg src='arc' itemType='Arc Browser for Windows' itemName='Navegador' url='https://arc.net' />
                <SetupCard theme={theme} src='chrome' itemType='Google Chrome' itemName='Navegador' url='https://www.google.com/intl/pt-BR/chrome' />
                <SetupCard theme={theme} roundImg src='helium' itemType='Helium' itemName='Navegador' url='https://helium.computer' />
                <SetupCard theme={theme} src='notion' itemType='Notion' itemName='Anotações' url='https://notion.com' />
                <SetupCard theme={theme} src='spotify' itemType='Spotify' itemName='Música' url='https://spotify.com' />
                <SetupCard theme={theme} src='googleDrive' itemType='Google Drive' itemName='Cloud' url='https://drive.google.com' />
                <SetupCard theme={theme} src='github' itemType='GitHub' itemName='Controle de Versão' url='https://github.com' />
              </>
            )}
          </div>
        </div>
        <div className='pt-20' id='books-section'>
          <h3 className='mb-3 text-2xl'>Books</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 tooltip-container'>
            {loading ? (
              <>
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
              </>
            ) : (
              <>
                <SetupCard theme={theme} src='codigo' itemType='Código Limpo' itemName='Livro' url='https://www.amazon.com.br/gp/product/8576082675/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1' />
                <SetupCard theme={theme} src='arquitetura' itemType='Arquitetura Limpa' itemName='Livro' url='https://www.amazon.com.br/gp/product/8550804606/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1' />
                <SetupCard theme={theme} src='php4' itemType='PHP4 e MySQL' itemName='Livro' url='/setup' />
                <SetupCard theme={theme} src='estrutura' itemType='Estrutura de Dados' itemName='Livro' url='/setup' />
                <SetupCard theme={theme} src='android' itemType='Aplicativos para o Android' itemName='Livro' url='/setup' />
                <SetupCard theme={theme} src='lotrBox' itemType='O Senhor dos Anéis' itemName='Box de livros' url='https://www.amazon.com.br/dp/8595086354?ref=ppx_yo2ov_dt_b_fed_asin_title' />
                <SetupCard theme={theme} src='solasterion' itemType='Solasterion' itemName='Livro' url='https://solasterion.com' />
              </>
            )}
          </div>
        </div>
        <div className='pt-20' id='newsletter-section'>
          <h3 className='mb-3 text-2xl'>Newsletter</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6'>
            {loading ? (
              <>
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
                <SetupCardSkeleton theme={theme} />
              </>
            ) : (
              <>
                <SetupCard theme={theme} roundImg src='pinho' itemType='Pinho' itemName='Newsletter' url='https://pinhoco.substack.com/about' />
                <SetupCard theme={theme} roundImg src='deschamps' itemType='Filipe Deschamps' itemName='Newsletter' url='https://filipedeschamps.com.br/newsletter' />
                <SetupCard theme={theme} src='codecon' itemType='Codecon' itemName='Newsletter' url='https://codecon.substack.com' />
                <SetupCard theme={theme} src='designdev' itemType='Design Dev' itemName='Newsletter' url='https://design.dev/' />
                <SetupCard theme={theme} roundImg src='biro' itemType='Birobirobiro' itemName='Newsletter' url='https://birobirobiro.substack.com' />
                <SetupCard theme={theme} src='thenews' itemType='The News' itemName='Newsletter' url='https://thenewscc.beehiiv.com/subscribe?ref=huLORfHEBz' />
              </>
            )}
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </section>
  )
}