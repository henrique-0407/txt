const dataHoraBrasil = new Date();
const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset()*60000))   

 let hora =dataHoraBrasil.getHours(dataHoraUtc)
 let minito = dataHoraBrasil.getMinutes(dataHoraUtc);
 let segundo = dataHoraBrasil.getSeconds(dataHoraUtc);
console.log(dataHoraUtc);
console.log(hora + ':' + minito + ':' + segundo);