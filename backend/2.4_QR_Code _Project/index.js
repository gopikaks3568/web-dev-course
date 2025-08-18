// dummy change to trigger a commit
// This file is part of the QR Code Project


import inquirer from 'inquirer';
import fs from "fs";
import qr from 'qr-image';


inquirer
  .prompt([
    /* Pass your questions in here */
    {message:"Enter the link: ",name:"URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const data = answers.URL;
    var qr_svg = qr.image(data);
    const qrStream = fs.createWriteStream('qr__img.png');
    qr_svg.pipe(qrStream);
    qrStream.on('finish', () => {
      console.log('QR code image has been saved!');
    });
    fs.writeFile('link.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
