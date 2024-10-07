import { SetupCard } from "../components/cards/setup-card"
import { PageTitle } from "../components/page-title/page-title"
import { ScrollToTopButton } from "../components/scroll-to-top"

export function Setup() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SetupCard src="laptop" itemType="Laptop" itemName="Samsung Galaxy Book3 360 13.3'" url="https://www.amazon.com.br/dp/B0C5RY1WG9?psc=1&ref=ppx_yo2ov_dt_b_product_details" />
            <SetupCard src="headset" itemType="Headset" itemName="Razer Kraken Lite" url="https://www.amazon.com.br/gp/product/B07XC936P8/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1" />
            <SetupCard src="headphone" itemType="Headphone" itemName="Philips UH202 BT" url="https://www.amazon.com.br/gp/product/B07YNG2L67/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&th=1" />
            <SetupCard src="earphone1" itemType="Earpods principal" itemName="QCY HT05" url="https://pt.aliexpress.com/item/1005004786288333.html?spm=a2g0o.order_list.order_list_main.73.13fbcaa4fnapqA&gatewayAdapt=glo2bra" />
            <SetupCard src="earphone2" itemType="Earpods" itemName="Baseus Encok W04" url="https://www.amazon.com.br/gp/product/B01LYIY2HG/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1" />
            <SetupCard src="mouse1" itemType="Mouse principal" itemName="Baseus F01B Wireless" url="https://pt.aliexpress.com/item/1005005847298347.html?spm=a2g0o.order_list.order_list_main.6.649ecaa4iWc5Ig&gatewayAdapt=glo2bra" />
            <SetupCard src="mousepad" itemType="Mousepad" itemName="Fortrek G Speed Medium" url="https://www.amazon.com.br/gp/product/B0765YY6TM/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&th=1" />
            <SetupCard src="smartphone" itemType="Smartphone" itemName="Redmi Note 11 Pro" url="https://www.mi.com/br/product/redmi-note-11-pro/" />
            <SetupCard src="smartwatch" itemType="Smartwatch" itemName="Infinix Watch S3" url="https://www.mercadolivre.com.br/smartwatch-infinix-s3-full-touch-169-polegadas-preto/p/MLB26769125" />
            <SetupCard src="alexa" itemType="Assistente" itemName="Alexa Echo Dot 4ª gen c/ relógio" url="https://www.amazon.com.br/Echo-Dot-com-Rel%C3%B3gio-Cor-Branca/dp/B084J4WP6J" />
            <SetupCard src="hub" itemType="Hub" itemName="Hub 1x USB-C p/ 4x USB-A" url="https://pt.aliexpress.com/item/1005005445851704.html?spm=a2g0o.order_list.order_list_main.30.21efcaa40xX5Os&gatewayAdapt=glo2bra" />
            <SetupCard src="suporte" itemType="Suporte p/ Laptop" url="https://pt.aliexpress.com/item/1005005217800671.html?spm=a2g0o.order_list.order_list_main.4.76eecaa4wvymvg&gatewayAdapt=glo2bra" />
            <SetupCard src="suportecabos" itemType="Suporte p/ 7 cabos" url="https://pt.aliexpress.com/item/1005005446446422.html?spm=a2g0o.order_list.order_list_main.15.21efcaa40xX5Os&gatewayAdapt=glo2bra" />
          </div>
        </div>
        <div className="pt-20" id="coding-section">
          <h3 className="mb-3 text-2xl">Coding</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SetupCard src="vscode" itemType="IDE" itemName="VS Code" url="https://code.visualstudio.com/" />
            <SetupCard src="vesperpptheme" itemType="Tema" itemName="Vesper++" url="https://marketplace.visualstudio.com/items?itemName=Obstinate.vesper-pp" />
            <SetupCard src="jetbrains" itemType="Fonte" itemName="JetBrains Mono" url="https://www.jetbrains.com/pt-br/lp/mono/" />
            <SetupCard src="gitbash" itemType="Terminal" itemName="Git Bash for Windows" url="https://git-scm.com/" />
            <SetupCard src="ohmyzsh" itemType="Customização de terminal" itemName="Oh-my-zsh!" url="https://ohmyz.sh/" />
          </div>
        </div>
        <div className="pt-20" id="books-section">
          <h3 className="mb-3 text-2xl">Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 tooltip-container">
            <SetupCard src="codigo" itemType="Código Limpo" url="https://www.amazon.com.br/gp/product/8576082675/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1" />
            <SetupCard src="arquitetura" itemType="Arquitetura Limpa" url="https://www.amazon.com.br/gp/product/8550804606/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1" />
            <SetupCard src="php4" itemType="PHP4 e MySQL" url="/setup" />
            <SetupCard src="estrutura" itemType="Estrutura de Dados" url="/setup" />
            <SetupCard src="android" itemType="Aplicativos para o Android" url="/setup" />
          </div>
        </div>
        <div className="pt-20" id="newsletter-section">
          <h3 className="mb-3 text-2xl">Newsletter</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SetupCard src="deschamps" itemType="Filipe Deschamps" url="https://filipedeschamps.com.br/newsletter" />
            <SetupCard src="thenews" itemType="The News" url="https://thenewscc.beehiiv.com/subscribe?ref=huLORfHEBz" />
            <SetupCard src="codecon" itemType="Codecon" url="https://codecon.substack.com" />
            <SetupCard src="biro" itemType="Birobirobiro" url="https://birobirobiro.substack.com" />
            <SetupCard src="designdev" itemType="Design Dev" url="https://design.dev/" />
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </section>
  ) 
}