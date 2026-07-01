import { Component } from '@angular/core';

@Component({
    selector: 'app-table-curitiba',
    templateUrl: './table-curitiba.component.html',
    styleUrls: ['./table-curitiba.component.css'],
    standalone: false 
})
export class TableCuritibaComponent {
  veiculosData = [
    { veiculo: "Automóvel", gnv: "R$ 450,00", sinistro: "R$ 630,00", artesanal: "R$ 2.500,00", antt: "X" },
    { veiculo: "Automóvel Rebaixado", gnv: "R$ 450,00", sinistro: "R$ 630,00", artesanal: "X", antt: "X" },
    { veiculo: "Veículo Blindado", gnv: "R$ 450,00", sinistro: "R$ 1.000,00", artesanal: "X", antt: "X" },
    { veiculo: "Utilitário/camioneta/caminhonete", gnv: "R$ 450,00", sinistro: "R$ 700,00", artesanal: "R$ 2.500,00", antt: "X" },
    { veiculo: "Microônibus", gnv: "R$ 500,00", sinistro: "R$ 770,00", artesanal: "X", antt: "R$ 600,00" },
    { veiculo: "Ônibus", gnv: "R$ 1.100,00", sinistro: "R$ 1.100,00", artesanal: "X", antt: "R$ 650,00" },
    { veiculo: "Caminhão", gnv: "R$ 1.100,00", sinistro: "R$ 1.100,00", artesanal: "X", antt: "X" },
    { veiculo: "Motocicleta/motoneta/ciclomotor até 300 cc", gnv: "X", sinistro: "R$ 550,00", artesanal: "R$ 2.500,00", antt: "X" },
    { veiculo: "Motocicleta/motoneta/ciclomotor acima de 300 cc", gnv: "X", sinistro: "R$ 700,00", artesanal: "R$ 2.500,00", antt: "X" },
    { veiculo: "Triciclo/quadriciclo", gnv: "X", sinistro: "R$ 1.300,00", artesanal: "R$ 2.500,00", antt: "X" }
  ];

  servicosData = [
    { servico: "Alteração de Potência/Cilindrada - Automóvel, Camioneta, Caminhonete e Utilitário", valor: "R$ 1.100,00" },
    { servico: "Basculante (Periódico - Res 859/21 Contran)", valor: "R$ 550,00" },
    { servico: "Laudo Escolar", valor: "R$ 500,00" },
    { servico: "Laudo Seguradora/URBS (Taxi)", valor: "Preço Sinistro" },
    { servico: "Laudo Opacidade + Ruído", valor: "R$ 200,00" },
    { servico: "Ensaio de Torção", valor: "R$ 600,00" },
    { servico: "Teste de Carga Caminhão", valor: "R$ 980,00" },
    { servico: "Laudo Ônibus COMEC", valor: "R$ 550,00" },
    { servico: "Motor-Casa", valor: "R$ 2.000,00" },
    { servico: "CITV Mercosul", valor: "R$ 550,00" },
    { servico: "Retirada de GNV", valor: "R$ 750,00" },
    { servico: 'Volumétrica (Incluso Art)', valor: 'R$ 650,00' },
    { servico: 'Teste de Carga (Caminhão)', valor: 'R$ 980,00' },
    { servico: 'Teste de Carga (Guindaste)', valor: 'R$ 1890,00' },
    { servico: 'Laudo Quinta Roda', valor: 'R$ 600,00' },
    { servico: 'Ensaio Torção', valor: 'R$ 600,00' },
  ];
}
