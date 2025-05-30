import { useState } from 'react'
import { SetupCard, SetupCardSkeleton } from "../components/cards/setup-card"
import { PageTitle } from "../components/page-title/page-title"
import { ScrollToTopButton } from "../components/scroll-to-top"

export function Setup() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 1000)

  return (
    <section className="py-4 px-6 lg:px-64 w-full flex flex-col gap-3 text-justify pt-24 mb-16">
      <PageTitle>Setup</PageTitle>
      <nav className="flex gap-4 mb-8">
        <a href="#workstation-section" className="text-blue-500 hover:underline">Workstation</a>
        <a href="#coding-section" className="text-blue-500 hover:underline">Coding</a>
        <a href="#books-section" className="text-blue-500 hover:underline">Books</a>
        <a href="#newsletter-section" className="text-blue-500 hover:underline">Newsletter</a>
      </nav>
      <section className="flex flex-col">
        <div className="" id="workstation-section">
          <h3 className="mb-3 text-2xl">Workstation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {loading ? (
              <>
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
              </>
            ) : (
              <>
                <SetupCard src="laptop" itemType="Laptop" itemName="Samsung Galaxy Book3 360 13.3'" url="https://www.amazon.com.br/dp/B0C5RY1WG9?psc=1&ref=ppx_yo2ov_dt_b_product_details" />
                <SetupCard src="earpods" itemType="Earpods" itemName="QCY HT08 / Melobuds Pro" url="https://www.amazon.com.br/dp/B0D4QRHDZ9?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" />
                <SetupCard src="monitor" itemType="Monitor" itemName='LG Flatron E1941 18.5"' url="https://www.artsolutioninformatica.com.br/monitor-lg-flatron-e1941c-185-polegadas" />
                <SetupCard src="headset" itemType="Headset" itemName="Razer Kraken Lite" url="https://www.amazon.com.br/gp/product/B07XC936P8/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1" />
                <SetupCard src="headphone" itemType="Headphone" itemName="Philips UH202 BT" url="https://www.amazon.com.br/gp/product/B07YNG2L67/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&th=1" />
                <SetupCard src="mouse1" itemType="Mouse" itemName="Baseus F01B Wireless" url="https://pt.aliexpress.com/item/1005005847298347.html?spm=a2g0o.order_list.order_list_main.6.649ecaa4iWc5Ig&gatewayAdapt=glo2bra" />
                <SetupCard src="mousepad" itemType="Mousepad" itemName="Fortrek G Speed Medium" url="https://www.amazon.com.br/gp/product/B0765YY6TM/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&th=1" />
                <SetupCard src="smartphone" itemType="Smartphone" itemName="Redmi Note 11 Pro" url="https://www.mi.com/br/product/redmi-note-11-pro/" />
                <SetupCard src="smartwatch" itemType="Smartwatch" itemName="Infinix Watch S3" url="https://www.mercadolivre.com.br/smartwatch-infinix-s3-full-touch-169-polegadas-preto/p/MLB26769125" />
                <SetupCard src="alexa" itemType="Assistente" itemName="Alexa Echo Dot 4ª gen c/ relógio" url="https://www.amazon.com.br/Echo-Dot-com-Rel%C3%B3gio-Cor-Branca/dp/B084J4WP6J" />
                <SetupCard src="hub" itemType="Hub" itemName="Hub 1x USB-C -> 4x USB-A" url="https://pt.aliexpress.com/item/1005005445851704.html?spm=a2g0o.order_list.order_list_main.30.21efcaa40xX5Os&gatewayAdapt=glo2bra" />
                <SetupCard src="suporte" itemType="Suporte p/ Laptop" url="https://pt.aliexpress.com/item/1005005217800671.html?spm=a2g0o.order_list.order_list_main.4.76eecaa4wvymvg&gatewayAdapt=glo2bra" />
                <SetupCard src="moleskine" itemType="Moleskine" url="https://www.desenherabisque.com.br/" />
                <SetupCard src="abajur" itemType="Abajur de mesa" url="https://shopee.com.br/product/944725778/23497326856?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMlBGanBrbzA0SWMvZGJjcUNvcmR1em4vb3FHYnA2NmRTa2grM2FXeW9aZU9VOG9aWmREY01VWjhuYjZpR0FmOFZOTEtkMVZ6Y2wwU3lPQktJSXpOSU41WXVldEhvUnVucWVoWTFjd0NYS0tBPT0&gad_source=1&gad_campaignid=20824904867&gbraid=0AAAAACoEtRlfmnd2F-X9AZLLOOBpxEBoV&gclid=Cj0KCQjw8cHABhC-ARIsAJnY12wMjNJVn0bgmOXeJZyGuGo0iG6qWALLpZfrgutOmLLTGNQ9XTmfTmwaAtYjEALw_wcB" />
                <SetupCard src="suportecabos" itemType="Suporte de mesa p/ cabos" url="https://pt.aliexpress.com/item/1005005446446422.html?spm=a2g0o.order_list.order_list_main.15.21efcaa40xX5Os&gatewayAdapt=glo2bra" />
              </>
            )}
          </div>
        </div>
        <div className="pt-20" id="coding-section">
          <h3 className="mb-3 text-2xl">Coding</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {loading ? (
              <>
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
              </>
            ) : (
              <>
                <SetupCard src="vscode" itemType="IDE" itemName="VS Code" url="https://code.visualstudio.com/" />
                <SetupCard src="vesperpptheme" itemType="Tema" itemName="Vesper++" url="https://marketplace.visualstudio.com/items?itemName=Obstinate.vesper-pp" />
                <SetupCard src="jetbrains" itemType="Fonte" itemName="JetBrains Mono" url="https://www.jetbrains.com/pt-br/lp/mono/" />
                <SetupCard src="hyper" itemType="Terminal" itemName="Hyper" url="https://hyper.is/" />
                <SetupCard src="gitbash" itemType="Secondary Terminal" itemName="Git Bash for Windows" url="https://git-scm.com/" />
              </>
            )}
          </div>
        </div>
        <div className="pt-20" id="books-section">
          <h3 className="mb-3 text-2xl">Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 tooltip-container">
            {loading ? (
              <>
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
              </>
            ) : (
              <>
                <SetupCard src="codigo" itemType="Código Limpo" url="https://www.amazon.com.br/gp/product/8576082675/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1" />
                <SetupCard src="arquitetura" itemType="Arquitetura Limpa" url="https://www.amazon.com.br/gp/product/8550804606/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1" />
                <SetupCard src="php4" itemType="PHP4 e MySQL" url="/setup" />
                <SetupCard src="estrutura" itemType="Estrutura de Dados" url="/setup" />
                <SetupCard src="android" itemType="Aplicativos para o Android" url="/setup" />
                <SetupCard src="lotrBox" itemType='Box - O Senhor dos Anéis' url='https://www.amazon.com.br/dp/8595086354?ref=ppx_yo2ov_dt_b_fed_asin_title' />
                <SetupCard src="solasterion" itemType='Solasterion' url='https://solasterion.com' />
              </>
            )}
          </div>
        </div>
        <div className="pt-20" id="newsletter-section">
          <h3 className="mb-3 text-2xl">Newsletter</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {loading ? (
              <>
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
                <SetupCardSkeleton />
              </>
            ) : (
              <>
                <SetupCard src="pinho" itemType="Pinho" url="https://pinhoco.substack.com/about" />
                <SetupCard src="deschamps" itemType="Filipe Deschamps" url="https://filipedeschamps.com.br/newsletter" />
                <SetupCard src="codecon" itemType="Codecon" url="https://codecon.substack.com" />
                <SetupCard src="designdev" itemType="Design Dev" url="https://design.dev/" />
                <SetupCard src="biro" itemType="Birobirobiro" url="https://birobirobiro.substack.com" />
                <SetupCard src="thenews" itemType="The News" url="https://thenewscc.beehiiv.com/subscribe?ref=huLORfHEBz" />
              </>
            )}
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </section>
  )
}