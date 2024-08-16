//import as bibliotecas instaladas
import fs, { appendFile } from 'fs';
import mqtt from 'mqtt';

// pega  as informações para login
const host = 'maqiatto.com'
const porta = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
const connectUrl = `mqtt://${host}:${porta}`

//inicia o login com o broker mqtt
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: '',
  password: '',
  reconnectPeriod: 1000,
})

//inicia o login no tópico
const topic = 'gustavo.oliveira07022000@gmail.com/T1';  
//função que cria um arquivo .txt, na  direita temos o nome do arquivo, e na esquuerda o que será escrito nele
fs.appendFile('dadosmqtt.txt','ETEC TAKASHI MORITA \nCURSO: 3 MTEC AUTOMAÇÃO\nGRUPO: TARDE	TURMA:A\nDISCIPLINA: SSRI\nNOMES: Henrique Viana,Gustavo de Souza\nDADOS SOBRE A CARGA/DESCARGA DO CAPACITOR\nITEM;TEMPO; TENSÃO NO CAPACITOR \n' ,(err)=>{
  if (err) {
      console.log(err);
  }
  else {
      // Get the file contents after the append operation 
      console.log("\nFile Contents of file after append:",)
  }
})

//inicia conexão ao tópico
client.on('connect', () => {
    client.subscribe(topic, (err) => {
      if (!err) {
        console.log(`${topic}`);
      }
      
    });
  });
//inicia o contador para os itens
let contador = 0

//função que loga no tópico do mqtt e exibe as menagens no terminal do vs code
client.on('message', (topic, message) => {

  //pegando as horas para atualiza-las
  const dataHoraBrasil = new Date();
  const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset()*60000))   

  //variaveis que pegam o tempo do computador
  let hora = dataHoraBrasil.getHours(dataHoraUtc)
  let minito = dataHoraBrasil.getMinutes(dataHoraUtc);
  let segundo = dataHoraBrasil.getSeconds(dataHoraUtc);
  if (message = '.'){
    const msgString = message.toString();
  }

  
  //função que atualiza as informações no arquivo continuamente
    fs.appendFile('dadosmqtt.txt',contador.toString()+' '+hora + ':' + minito + ':' + segundo + ' ' + msgString + '\n', (err) =>{
      
        if(err){
            console.log('arquivo falhou');
        }
        if(message == 'p'){
            client.end
        }
    })
    contador++
});
