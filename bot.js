const { create } = require('@wppconnect-team/wppconnect');

create({
  session: 'azturbobot',
  catchQR: (base64Qrimg, asciiQR) => {
    console.log('QR RECEIVED', asciiQR);
  },
  statusFind: (statusSession, session) => {
    console.log('Status Session: ', statusSession);
  },
  headless: true
}).then((client) => start(client));

function start(client) {
  client.onMessage(async (message) => {
    const text = message.body.toLowerCase();

    if (["1", "pix", "chave", "qual o pix"].some(t => text.includes(t))) {
      await client.sendText(message.from, "az.turbotv@gmail.com");
    } else if (["2", "copia e cola", "pix copia e cola"].some(t => text.includes(t))) {
      await client.sendText(message.from, "00020126330014br.gov.bcb.pix0111044923499105204000053039865802BR5921Gustavo G. H. Mombach6002NA62070503***63042D6B");
    } else if (["3", "link", "cartão", "cartao"].some(t => text.includes(t))) {
      await client.sendText(message.from, "Acesse o link, selecione como pagar e pronto! https://link.mercadopago.com.br/azrurbotv");
    } else if (["4", "negociar"].some(t => text.includes(t))) {
      await client.sendText(message.from, "Ok, entraremos em contato para negociar o prazo!");
    } else if (["5", "cancelar"].some(t => text.includes(t))) {
      await client.sendText(message.from, "Ficamos tristes com sua decisão, existe algo que possamos fazer para melhorar sua experiência?");
    }
  });
}
