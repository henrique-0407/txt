
import fs from 'fs';


fs.appendFile('dadosMqtt.txt','ETEC TAKASHI MORITA \nCURSO: 3 MTEC AUTOMAÇÃO\n GRUPO: TARDE	TURMA:A\nDISCIPLINA: SSRI\nNOMES: Henrique Viana,Gustavo de Souza\nDADOS SOBRE A CARGA/DESCARGA DO CAPACITOR\nITEM;TEMPO; TENSÃO NO CAPACITOR;' ,(err)=>{
        if (err) {
            console.log(err);
        }
        else {
            // Get the file contents after the append operation 
            console.log("\nFile Contents of file after append:",)
        }
    }
)

false.appendFile('')




