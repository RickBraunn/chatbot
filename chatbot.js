const browser = await puppeteer.launch({
    headless: "new",       // Required for servers
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'  // Prevents memory issues
    ]
  });

// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

  //  if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {
      if (msg.body.match(/(Olá! Tenho interesse e queria mais informações, por favor.)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] +  ' Sou o assistente virtual da BesciakGan Advogados. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n*1 - Contas Bloqueadas*\n*2 - Já sou cliente*\n*3 - Outros assuntos*\n\nPeço que responde apenas com o número, exemplo: "1"'); //Primeira mensagem de texto
        //await delay(3000); //delay de 3 segundos
       // await chat.sendStateTyping(); // Simulando Digitação
        //await delay(5000); //Delay de 5 segundos
    
        
    }


    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) { //Contas bloqueadas
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Certo, para saber como melhor te ajudar, preciso que respondas as seguintes perguntas: \n\n*1ª Qual o valor bloqueado?* \n\n*2ª Qual o valor da dívida?* \n\n*3ª Informe o número do processo ou CPF para que possamos analisar o seu caso com mais precisão.* \n\nEssas informações são fundamentais para que nossa equipe de advogados especializados possa analisar a viabilidade do seu caso e definir os próximos passos.');
       
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Após a análise, entraremos em contato para solicitar alguns documentos necessários para desbloquear suas contas e recuperar o valor bloqueado.');
       
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Ficou com alguma dúvida? Estamos à disposição para esclarecimentos.');

        /* client.on('message', async msg => {
            if (msg.body !== null && msg.from.endsWith('@c.us')) {{
                const chat = await msg.getChat();
                await chat.sendStateTyping(); // Simulando Digitação
                await client.sendMessage(msg.from, 'Certo, seu caso já foi encaminhado para nossa equipe de advogados especializados!\n\nO primeiro passo é a analise da viabilidade, nessa etapa, nosso time irá solicitar alguns documentos para que possamos desbloquear com sucesso suas contas e receber o dinheiro bloqueado de volta.');
                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Ficou com alguma dúvida?');
            }}}); */
    

        }
        //await delay(3000); //delay de 3 segundos
       // await chat.sendStateTyping(); // Simulando Digitação
       // await delay(3000);
        //await client.sendMessage(msg.from, 'COMO FUNCIONA?\nÉ muito simples.\n\nSomos um escritório especialista em casos como esse, contamos com mais de 10 anos de experiência na área e temos mais de 500 clientes satisfeitos só no ano de 2024! \n\n O primeiro passo é a analise da viabilidade, nessa é etapa, nosso time irá solicitar alguns documentos para que possamos desbloquear com sucesso suas contas e receber o dinheiro bloqueado de volta. \n\n Após, seu caso será encaminhado para o nosso time de advogados para que então seja feito o pedido de desbloqueio junto ao juíz. \n\nSimples, né?');

       // await delay(3000); //delay de 3 segundos
       // await chat.sendStateTyping(); // Simulando Digitação
       // await delay(3000);
       // await client.sendMessage(msg.from, 'Ficou com alguma dúvida?');


    

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) { //já sou cliente
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Que bom receber você novamente! Para agilizar seu atendimento, por favor, informe o número do seu CPF ou CNPJ para que eu possa encaminhá-lo para o setor correto.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Assim que localizarmos seu caso em nosso sistema, já o encaminharemos para o setor competente e retornaremos o seu contato em instantes.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Enquanto aguarda, aproveite para conferir nossas últimas postagens no Instagram: \n\nhttps://www.instagram.com/besciakgan_adv/');


      /*  client.on('message', async msg => {
            if (msg.body !== null && msg.from.endsWith('@c.us')) {{
                const chat = await msg.getChat();
                await chat.sendStateTyping(); // Simulando Digitação
                await client.sendMessage(msg.from, 'Certo, localizei seu caso em nosso sistema e já encaminhei para o setor competente. \n\nEm instântes iremos retornar seu contato.');
                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Aproveitanto, enquanto aguarda, que tal conferir nossas ultimas postagens no instagram: https://www.instagram.com/besciakgan_adv/');
            }}}); */
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) { //outros assuntos
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Olá! Agradeçemos o seu contato.\n\nDescreva sua solicitação e em breve retornaremos o contato.');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se o assunto for referente a algum processo específico, peço que informe o número do processo.');

    }

   /* if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Hmmm... Ainda não conheço essa. Que tal voltarmos do inicio.'); 
        
       // await delay(3000); //delay de 3 segundos
       // await chat.sendStateTyping(); // Simulando Digitação
       // await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
       // const contact = await msg.getContact(); //Pegando o contato
        //const name = contact.pushname; //Pegando o nome do contato
        //await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] +  ' Sou o assistente virtual da BesciakGan Advogados. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Contas Bloqueadas\n2 - Já sou cliente\n3 - Outros assuntos\n\nPeço que responde apenas com o número, exemplo: "1"'); //Primeira mensagem de texto
        //await delay(3000); //delay de 3 segundos

        //await delay(3000); //delay de 3 segundos
        //await chat.sendStateTyping(); // Simulando Digitação
        //await delay(3000);
        //await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');


    } */

   // if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
     //   const chat = await msg.getChat();

       // await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
       // await chat.sendStateTyping(); // Simulando Digitação
       // await delay(3000);
       // await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://site.com ');


    //}








});