// Creating The Editor

  // getting editor div from id
let editor = document.getElementById('editor');



  //getting place to show language name
let languagetext = document.getElementById('languagetext');

  // getting text display before selecting language
let selecttext = document.getElementById('selecttext');

  //Creating function for javascript language
function javascript() {
    // setting up text
  languagetext.innerHTML = 'JavaScript';
    //getting editor
  ace.edit(editor, {
    theme: 'ace/theme/twilight',
    mode: 'ace/mode/javascript',
  });
    // removing select language text
  selecttext.style.display = 'none';
  
}

  // creating function for html
function html() {
  languagetext.innerHTML = 'HTML';
  ace.edit(editor, {
    theme: 'ace/theme/twilight',
    mode: 'ace/mode/html',
  });
  selecttext.style.display = 'none';
}


  // creating function for css
function css() {
  languagetext.innerHTML = 'CSS';
  ace.edit(editor, {
    theme: 'ace/theme/twilight',
    mode: 'ace/mode/css',
  });
  selecttext.style.display = 'none';
}



// Creating Download Image 


  // get div which we want to download
let display = document.getElementById('input');

  // get download btn
let dowbtn = document.getElementById('dowbtn');

  // creating download image using dom-to-image
dowbtn.addEventListener('click', function() {
  domtoimage.toPng(display).then((data) => {

    let link = document.createElement('a');
    link.download = 'CodeSaveShare1.Png';
    link.href = data;
    link.click();
  });


});


// creating color changing

let body = document.getElementsByTagName('body');

let div = document.getElementById('input');

let c = document.getElementsByClassName('c');

function colorchange2() {
  $(body).removeClass('color1 color3');
  $(div).removeClass('color1 color3');
  $(body).addClass('color2');
  $(div).addClass('color2');
  $(c).addClass('color2');
  $(c).removeClass('color1 color3');
}

function colorchange1() {
  $(body).removeClass('color2 color3');
  $(div).removeClass('color2 color3');
  $(body).addClass('color1');
  $(div).addClass('color1');
   $(c).addClass('color1');
  $(c).removeClass('color2 color3');
}

function colorchange3() {
  $(body).removeClass('color1 color2');
  $(div).removeClass('color1 color2');
  $(body).addClass('color3');
  $(div).addClass('color3');
   $(c).addClass('color3');
  $(c).removeClass('color1 color2');
}
