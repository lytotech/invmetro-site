import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ServicosComponent} from "./servicos/servicos.component";
import {SobreComponent} from "./sobre/sobre.component";
import {FaqComponent} from "./faq/faq.component";
import {ContatoComponent} from "./contato/contato.component";

const homeSeo = {
  title: 'Invmetro — Inspeção Veicular em Curitiba e Campo Largo',
  description: 'Instituição técnica acreditada pela CGCRE e licenciada pela SENATRAN. Inspeção de Segurança Veicular (ISV) em Curitiba e Campo Largo desde 2009.'
};

const routes: Routes = [
  {path: '', component: HomeComponent, data: homeSeo},
  {path: 'inicio', component: HomeComponent, data: {...homeSeo, canonicalPath: '/'}},
  {
    path: 'servicos', component: ServicosComponent, data: {
      title: 'Serviços de Inspeção Veicular | Invmetro',
      description: 'Alteração de potência, veículo modificado, GNV, sinistro, inspeção especial e CITV Mercosul. Conheça todos os serviços de inspeção veicular da Invmetro.'
    }
  },
  {
    path: 'sobre', component: SobreComponent, data: {
      title: 'Sobre a Invmetro — Tradição desde 2009',
      description: 'Conheça a história da Invmetro: instituição técnica licenciada pela SENATRAN e acreditada pela CGCRE, com unidades em Curitiba e Campo Largo.'
    }
  },
  {
    path: 'contato', component: ContatoComponent, data: {
      title: 'Contato | Invmetro Curitiba e Campo Largo',
      description: 'Fale com a Invmetro pelo WhatsApp, e-mail ou visite uma de nossas unidades em Curitiba e Campo Largo. Agendamento com hora marcada.'
    }
  },
  {
    path: 'duvidas', component: FaqComponent, data: {
      title: 'Perguntas Frequentes | Invmetro',
      description: 'Tire suas dúvidas sobre agendamento, pagamento, documentos necessários e o processo de inspeção veicular na Invmetro.'
    }
  },
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
