export interface UnitInfo {
  key: string;
  name: string;
  subtitle: string;
  streetAddress: string;
  neighborhood: string;
  addressLine: string;
  city: string;
  hours: string[];
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  mapEmbedUrl: string;
}

export const UNITS: UnitInfo[] = [
  {
    key: 'curitiba',
    name: 'Invmetro Curitiba',
    subtitle: 'Unidade Matriz',
    streetAddress: 'Estrada da Ribeira, 970 A',
    neighborhood: 'Bairro Atuba',
    addressLine: 'próximo ao trevo da antiga Penha',
    city: 'Curitiba - PR',
    hours: ['Segunda a sexta: 08h às 12h', 'das 13h30min às 17h30min'],
    whatsappNumber: '(41) 3357-3939',
    whatsappLink: 'https://api.whatsapp.com/send?phone=554133573939',
    email: 'invmetrocuritiba@gmail.com',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.6884839280515!2d-49.19952741930228!3d-25.38175486272223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce8a966b32019%3A0x5059d9ecc7c315c9!2sInvmetro%20inspe%C3%A7%C3%A3o%20de%20seguran%C3%A7a%20veicular%20de%20Curitiba.%20Agendamentos%20e%20informa%C3%A7%C3%B5es%20por%20WhatsApp%3A%20(41)%203357-3939.!5e0!3m2!1sen!2sus!4v1705613215022!5m2!1sen!2sus'
  },
  {
    key: 'campo-largo',
    name: 'Invmetro Campo Largo',
    subtitle: 'Unidade Filial',
    streetAddress: 'BR 277 Km 114, 25 A',
    neighborhood: 'Bairro Rondinha',
    addressLine: 'em frente à Igreja da Rondinha',
    city: 'Campo Largo - PR',
    hours: ['Segunda a sexta: 08h30min às 12h', 'das 13h às 17h30min'],
    whatsappNumber: '(41) 3555-1300',
    whatsappLink: 'https://api.whatsapp.com/send?phone=554135551300',
    email: 'invmetrocampolargo@gmail.com',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.807439536187!2d-49.50102282386473!3d-25.444700533474887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd184d78709bf1%3A0x994060d231a4297e!2sInvmetro%20inspe%C3%A7%C3%A3o%20de%20seguran%C3%A7a%20veicular%20de%20Campo%20Largo.%20Contato%20via%20WhatsApp%3A%20(41)%203555-1300.!5e0!3m2!1sen!2sus!4v1705613074501!5m2!1sen!2sus'
  }
];
