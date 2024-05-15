const fs = require('fs');

fs.readFile('./text/text.txt', "utf-8", (err,data) => {
    if (err) {
        throw Error('this is error file');
    }
  fs.writeFile('./text/written.txt', data, 'utf-8', (err) => {

    if (err) {        
        throw Error('this is error files on written')
    }
     console.log(data,'this is custom param');

  });
});


