import fs, { appendFile } from 'fs';

import mqtt from 'mqtt';

const host = 'maqiatto.com'
const porta = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${porta}`

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'gustavo.oliveira07022000@gmail.com',
  password: 'Simone123',
  reconnectPeriod: 1000,
})
const topic = 'gustavo.oliveira07022000@gmail.com/T1';
const dataHoraBrasil = new Date();
const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset()*60000))   

fs.appendFile('dadosmqtt.txt','ETEC TAKASHI MORITA \nCURSO: 3 MTEC AUTOMAÇÃO\n GRUPO: TARDE	TURMA:A\nDISCIPLINA: SSRI\nNOMES: Henrique Viana,Gustavo de Souza\nDADOS SOBRE A CARGA/DESCARGA DO CAPACITOR\nITEM;TEMPO; TENSÃO NO CAPACITOR \n' ,(err)=>{
  if (err) {
      console.log(err);
  }
  else {
      // Get the file contents after the append operation 
      console.log("\nFile Contents of file after append:",)
  }
})
client.on('connect', () => {
    client.subscribe(topic, (err) => {
      if (!err) {
        console.log(`${topic}`);
      }
      
    });
  });


let contador = 0
client.on('message', (topic, message) => {
  const dataHoraBrasil = new Date();
  const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset()*60000))   

  let hora = dataHoraBrasil.getHours(dataHoraUtc)
  let minito = dataHoraBrasil.getMinutes(dataHoraUtc);
  let segundo = dataHoraBrasil.getSeconds(dataHoraUtc);
  contador =contador;
  const msgString = message.toString();

    
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
