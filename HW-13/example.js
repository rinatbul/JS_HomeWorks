const fs = require('fs');

  fs.readdir('.', (err, files)=>{
    console.log(files);
    
   
  
        files.forEach(file=>{
          let size = 0;
          fs.stat(file, (err, stats)=>{
                // size += stats.size;
                console.log(stats.size);
            });
           
           
        })
       
  })



//СИнхронно
// let size = 0;
// files = fs.readDirSync(".");
// for (let i = 0; i < files.length; i++){
//  size += fs.statSync(files[i]).size;
// }
// console.log(size)

