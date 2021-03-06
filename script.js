let cvs = document.getElementById("canvas1"),
    ctx = cvs.getContext("2d"),
    cvsLeft = cvs.offsetLeft,
    cvsTop = cvs.offsetTop,
    elements = [],
    cvs2 = document.getElementById("canvas"),
    ctx2 = cvs2.getContext("2d"),
    img1 = new Image(),
        minWid, minHei,
        flag = false,
        imgDone = new Image(),
        part_img = [
                      new Image(),new Image(),new Image(),
                      new Image(),new Image(),new Image(),
                      new Image(),new Image(),new Image(),
                      new Image(),new Image()
                      ];
//при загрузке второй клик не нажимается сделать обновление страницы или кода при загрузке фото и автоматом выйгриш


imgDone.src = "img/all.png";
img1.src = "img/1.png";
img1.onload = draw;

part_img[0].src = "img/image_part_001.jpg"; //путь к изображениям в случае не загрузки
part_img[0].id = 0;

part_img[1].src = "img/image_part_002.jpg";
part_img[1].id = 1;

part_img[2].src = "img/image_part_003.jpg";
part_img[2].id = 2;

part_img[3].src = "img/image_part_004.jpg";
part_img[3].id = 3;

part_img[4].src = "img/image_part_005.jpg";
part_img[4].id = 4;

part_img[5].src = "img/image_part_006.jpg";
part_img[5].id = 5;

part_img[6].src = "img/image_part_007.jpg";
part_img[6].id = 6;

part_img[7].src = "img/image_part_008.jpg";
part_img[7].id = 7;

part_img[8].src = "img/image_part_009.jpg";
part_img[8].id = 8;

part_img[9].src = "img/image_part_010.jpg";
part_img[9].id = 9;

part_img[10].src = "img/image_part_011.jpg";
part_img[10].id = 10;

function getHref() { //перезагрузка изображения

  flag = true;
  img1.src = document.getElementById("imgHref").value;

  img1.onload = draw;

  minWid = img1.width;
  minHei = img1.height;

}

function generateArrayRandomNumber (min, max) { //генератор случайных чисел неповторяющихся( готовый)
  let totalNumbers 		= max - min + 1,
  arrayTotalNumbers 	= [],
  arrayRandomNumbers 	= [],
  tempRandomNumber;

  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);
  }
  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
    arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }
  return arrayRandomNumbers;
}

let arrNum = generateArrayRandomNumber(0, 10); //фиксирванные числа от 1 до 11

function draw() { //начальное изображение картинки

  minWid = img1.width/4;
  minHei = img1.height/3;

  ctx2.drawImage(img1, 0, 0, 150, 90);
  ctx.drawImage(img1, 0, 0, 600, 360);
}

function drawRectanlges_img() {

  drawRec();

  if (flag == true) {
    Promise.all([

      createImageBitmap(img1, 0, 0, minWid, minHei),
      createImageBitmap(img1, minWid, 0, minWid, minHei),
      createImageBitmap(img1, 2*minWid, 0, minWid, minHei),
      createImageBitmap(img1, 3*minWid, 0, minWid, minHei),
      createImageBitmap(img1, 0, minHei, minWid, minHei),
      createImageBitmap(img1, minWid, minHei, minWid, minHei),
      createImageBitmap(img1, 2*minWid, minHei, minWid, minHei),
      createImageBitmap(img1, 3*minWid, minHei, minWid, minHei),
      createImageBitmap(img1, 0, 2*minHei, minWid, minHei),
      createImageBitmap(img1, minWid, 2*minHei, minWid, minHei),
      createImageBitmap(img1, 2*minWid, 2*minHei, minWid, minHei),
      createImageBitmap(img1, 3*minWid, 2*minHei, minWid, minHei),

    ]).then(function(part_imgg) {

      for(let i=0; i<12; i++) {
        elements[i].img = part_imgg[arrNum[i]];
      }

      part_img = part_imgg;
      ctx.drawImage(part_imgg[arrNum[0]], 0, 0, 150, 120);
      ctx.drawImage(part_imgg[arrNum[1]], 150, 0, 150, 120);
      ctx.drawImage(part_imgg[arrNum[2]], 300, 0, 150, 120);
      ctx.drawImage(part_imgg[arrNum[3]], 450, 0, 150, 120);
      ctx.drawImage(part_imgg[arrNum[4]], 0, 120, 150, 120);
      ctx.drawImage(part_imgg[arrNum[5]], 150, 120, 150, 120);
      ctx.drawImage(part_imgg[arrNum[6]], 300, 120, 150, 120);
      ctx.drawImage(part_imgg[arrNum[7]], 450, 120, 150, 120);
      ctx.drawImage(part_imgg[arrNum[8]], 0, 240, 150, 120);
      ctx.drawImage(part_imgg[arrNum[9]], 150, 240, 150, 120);
      ctx.drawImage(part_imgg[arrNum[10]], 300, 240, 150, 120);

    });

  } else {

    ctx.drawImage(part_img[arrNum[0]], 0, 0, 150, 120);
    ctx.drawImage(part_img[arrNum[1]], 150, 0, 150, 120);
    ctx.drawImage(part_img[arrNum[2]], 300, 0, 150, 120);
    ctx.drawImage(part_img[arrNum[3]], 450, 0, 150, 120);
    ctx.drawImage(part_img[arrNum[4]], 0, 120, 150, 120);
    ctx.drawImage(part_img[arrNum[5]], 150, 120, 150, 120);
    ctx.drawImage(part_img[arrNum[6]], 300, 120, 150, 120);
    ctx.drawImage(part_img[arrNum[7]], 450, 120, 150, 120);
    ctx.drawImage(part_img[arrNum[8]], 0, 240, 150, 120);
    ctx.drawImage(part_img[arrNum[9]], 150, 240, 150, 120);
    ctx.drawImage(part_img[arrNum[10]], 300, 240, 150, 120);
  }

}

elements = [ {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 0,
    left: 0,
    id: 0,
    flag: true,
    img: part_img[arrNum[0]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 0,
    left: 150,
    id: 1,
    flag: true,
    img: part_img[arrNum[1]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 0,
    left: 300,
    id: 2,
    flag: true,
    img: part_img[arrNum[2]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 0,
    left: 450,
    id: 3,
    flag: true,
    img: part_img[arrNum[3]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 120,
    left: 0,
    id: 4,
    flag: true,
    img: part_img[arrNum[4]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 120,
    left: 150,
    id: 5,
    flag: true,
    img: part_img[arrNum[5]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 120,
    left: 300,
    id: 6,
    flag: true,
    img: part_img[arrNum[6]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 120,
    left: 450,
    id: 7,
    flag: true,
    img: part_img[arrNum[7]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 240,
    left: 0,
    id: 8,
    flag: true,
    img: part_img[arrNum[8]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 240,
    left: 150,
    id: 9,
    flag: true,
    img:part_img[arrNum[9]]
},{
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 240,
    left: 300,
    id: 10,
    flag: true,
    img: part_img[arrNum[10]]
}, {
    colour: '#FEB836',
    width: 150,
    height: 120,
    top: 240,
    left: 450,
    id: 11,
    flag: false,
    img: 11
}];

function drawRec() {
  ctx.clearRect(0, 0, 600, 360);//очищаем канву
  elements.forEach(function(element) {//много прямоугольников для кликов
    ctx.fillStyle = element.colour;
    ctx.fillRect(element.left, element.top, element.width, element.height);
  });
}

cvs.addEventListener('click', click, false);

function click(event) {

  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[0].top && y < elements[0].top + elements[0].height && x > elements[0].left && x < elements[0].left + elements[0].width) {

      if (elements[1].flag == false) {
        ctx.clearRect(elements[0].left, elements[0].top, elements[0].width, elements[0].height);
        ctx.drawImage(elements[0].img, elements[1].left, elements[1].top, elements[1].width, elements[1].height);
        elements[1].img = elements[0].img;
        elements[0].flag = false;
        elements[1].flag = true;
      }
      if (elements[4].flag == false) {
        ctx.clearRect(elements[0].left, elements[0].top, elements[0].width, elements[0].height);
        ctx.drawImage(elements[0].img,elements[4].left, elements[4].top, elements[4].width, elements[4].height);
        elements[4].img = elements[0].img;
        elements[0].flag = false;
        elements[4].flag = true;
      }
  }
  else if (y > elements[1].top && y < elements[1].top + elements[1].height && x > elements[1].left && x < elements[1].left + elements[1].width) {

      if (elements[2].flag == false) {
        ctx.clearRect(elements[1].left, elements[1].top, elements[1].width, elements[1].height);
        ctx.drawImage(elements[1].img, elements[2].left, elements[2].top, elements[2].width, elements[2].height);
        elements[2].img = elements[1].img;
        elements[1].flag = false;
        elements[2].flag = true;
      }
      if (elements[5].flag == false) {
        ctx.clearRect(elements[1].left, elements[1].top, elements[1].width, elements[1].height);
        ctx.drawImage(elements[1].img,elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        elements[5].img = elements[1].img;
        elements[1].flag = false;
        elements[5].flag = true;
      }
      if (elements[0].flag == false) {
        ctx.clearRect(elements[1].left, elements[1].top, elements[1].width, elements[1].height);
        ctx.drawImage(elements[1].img,elements[0].left, elements[0].top, elements[0].width, elements[0].height);
        elements[0].img = elements[1].img;
        elements[1].flag = false;
        elements[0].flag = true;
      }
  }
  else if (y > elements[2].top && y < elements[2].top + elements[2].height && x > elements[2].left && x < elements[2].left + elements[2].width) {

      if (elements[1].flag == false) {
        ctx.clearRect(elements[2].left, elements[2].top, elements[2].width, elements[2].height);
        ctx.drawImage(elements[2].img, elements[1].left, elements[1].top, elements[2].width, elements[2].height);
        elements[1].img = elements[2].img;
        elements[2].flag = false;
        elements[1].flag = true;
      }
      if (elements[3].flag == false) {
        ctx.clearRect(elements[2].left, elements[2].top, elements[2].width, elements[2].height);
        ctx.drawImage(elements[2].img,elements[3].left, elements[3].top, elements[3].width, elements[3].height);
        elements[3].img = elements[2].img;
        elements[2].flag = false;
        elements[3].flag = true;
      }
      if (elements[6].flag == false) {
        ctx.clearRect(elements[2].left, elements[2].top, elements[2].width, elements[2].height);
        ctx.drawImage(elements[2].img,elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        elements[6].img = elements[2].img;
        elements[2].flag = false;
        elements[6].flag = true;
      }
  }
  else if (y > elements[3].top && y < elements[3].top + elements[3].height && x > elements[3].left && x < elements[3].left + elements[3].width) {

      if (elements[2].flag == false) {
        ctx.clearRect(elements[3].left, elements[3].top, elements[3].width, elements[3].height);
        ctx.drawImage(elements[3].img, elements[2].left, elements[2].top, elements[2].width, elements[2].height);
        elements[2].img = elements[3].img;
        elements[3].flag = false;
        elements[2].flag = true;
      }
      if (elements[7].flag == false) {
        ctx.clearRect(elements[3].left, elements[3].top, elements[3].width, elements[3].height);
        ctx.drawImage(elements[3].img,elements[7].left, elements[7].top, elements[7].width, elements[7].height);
        elements[7].img = elements[3].img;
        elements[3].flag = false;
        elements[7].flag = true;
      }
  }
  else if (y > elements[4].top && y < elements[4].top + elements[4].height && x > elements[4].left && x < elements[4].left + elements[4].width) {

      if (elements[0].flag == false) {
        ctx.clearRect(elements[4].left, elements[4].top, elements[4].width, elements[4].height);
        ctx.drawImage(elements[4].img, elements[0].left, elements[0].top, elements[0].width, elements[0].height);
        elements[0].img = elements[4].img;
        elements[4].flag = false;
        elements[0].flag = true;
      }
      if (elements[8].flag == false) {
        ctx.clearRect(elements[4].left, elements[4].top, elements[4].width, elements[4].height);
        ctx.drawImage(elements[4].img,elements[8].left, elements[8].top, elements[8].width, elements[8].height);
        elements[8].img = elements[4].img;
        elements[4].flag = false;
        elements[8].flag = true;
      }
      if (elements[5].flag == false) {
        ctx.clearRect(elements[4].left, elements[4].top, elements[4].width, elements[4].height);
        ctx.drawImage(elements[4].img,elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        elements[5].img = elements[4].img;
        elements[4].flag = false;
        elements[5].flag = true;
      }
  }
  else if (y > elements[5].top && y < elements[5].top + elements[5].height && x > elements[5].left && x < elements[5].left + elements[5].width) {

      if (elements[1].flag == false) {
        ctx.clearRect(elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        ctx.drawImage(elements[5].img, elements[1].left, elements[1].top, elements[1].width, elements[1].height);
        elements[1].img = elements[5].img;
        elements[5].flag = false;
        elements[1].flag = true;
      }
      if (elements[4].flag == false) {
        ctx.clearRect(elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        ctx.drawImage(elements[5].img,elements[4].left, elements[4].top, elements[4].width, elements[4].height);
        elements[4].img = elements[5].img;
        elements[5].flag = false;
        elements[4].flag = true;
      }
      if (elements[6].flag == false) {
        ctx.clearRect(elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        ctx.drawImage(elements[5].img,elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        elements[6].img = elements[5].img;
        elements[5].flag = false;
        elements[6].flag = true;
      }
      if (elements[9].flag == false) {
        ctx.clearRect(elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        ctx.drawImage(elements[5].img,elements[9].left, elements[9].top, elements[9].width, elements[9].height);
        elements[9].img = elements[5].img;
        elements[5].flag = false;
        elements[9].flag = true;
      }
  }
  else if (y > elements[6].top && y < elements[6].top + elements[6].height && x > elements[6].left && x < elements[6].left + elements[6].width) {

      if (elements[2].flag == false) {
        ctx.clearRect(elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        ctx.drawImage(elements[6].img, elements[2].left, elements[2].top, elements[2].width, elements[2].height);
        elements[2].img = elements[6].img;
        elements[6].flag = false;
        elements[2].flag = true;
      }
      if (elements[5].flag == false) {
        ctx.clearRect(elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        ctx.drawImage(elements[6].img,elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        elements[5].img = elements[6].img;
        elements[6].flag = false;
        elements[5].flag = true;
      }
      if (elements[7].flag == false) {
        ctx.clearRect(elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        ctx.drawImage(elements[6].img,elements[7].left, elements[7].top, elements[7].width, elements[7].height);
        elements[7].img = elements[6].img;
        elements[6].flag = false;
        elements[7].flag = true;
      }
      if (elements[10].flag == false) {
        ctx.clearRect(elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        ctx.drawImage(elements[6].img,elements[10].left, elements[10].top, elements[10].width, elements[10].height);
        elements[10].img = elements[6].img;
        elements[6].flag = false;
        elements[10].flag = true;
      }
  }
  else if (y > elements[7].top && y < elements[7].top + elements[7].height && x > elements[7].left && x < elements[7].left + elements[7].width) {

      if (elements[3].flag == false) {
        ctx.clearRect(elements[7].left, elements[7].top, elements[7].width, elements[7].height);
        ctx.drawImage(elements[7].img, elements[3].left, elements[3].top, elements[3].width, elements[3].height);
        elements[3].img = elements[7].img;
        elements[7].flag = false;
        elements[3].flag = true;
      }
      if (elements[6].flag == false) {
        ctx.clearRect(elements[7].left, elements[7].top, elements[7].width, elements[7].height);
        ctx.drawImage(elements[7].img,elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        elements[6].img = elements[7].img;
        elements[7].flag = false;
        elements[6].flag = true;
      }
      if (elements[11].flag == false) {
        ctx.clearRect(elements[7].left, elements[7].top, elements[7].width, elements[7].height);
        ctx.drawImage(elements[7].img,elements[11].left, elements[11].top, elements[11].width, elements[11].height);
        elements[11].img = elements[7].img;
        elements[7].flag = false;
        elements[11].flag = true;
      }
  }
  else if (y > elements[8].top && y < elements[8].top + elements[8].height && x > elements[8].left && x < elements[8].left + elements[8].width) {

      if (elements[4].flag == false) {
        ctx.clearRect(elements[8].left, elements[8].top, elements[8].width, elements[8].height);
        ctx.drawImage(elements[8].img, elements[4].left, elements[4].top, elements[4].width, elements[4].height);
        elements[4].img = elements[8].img;
        elements[8].flag = false;
        elements[4].flag = true;
      }
      if (elements[9].flag == false) {
        ctx.clearRect(elements[8].left, elements[8].top, elements[8].width, elements[8].height);
        ctx.drawImage(elements[8].img,elements[9].left, elements[9].top, elements[9].width, elements[9].height);
        elements[9].img = elements[8].img;
        elements[8].flag = false;
        elements[9].flag = true;
      }
  }
  else if (y > elements[9].top && y < elements[9].top + elements[9].height && x > elements[9].left && x < elements[9].left + elements[9].width) {

      if (elements[10].flag == false) {
        ctx.clearRect(elements[9].left, elements[9].top, elements[9].width, elements[9].height);
        ctx.drawImage(elements[9].img, elements[10].left, elements[10].top, elements[10].width, elements[10].height);
        elements[10].img = elements[9].img;
        elements[9].flag = false;
        elements[10].flag = true;
      }
      if (elements[5].flag == false) {
        ctx.clearRect(elements[9].left, elements[9].top, elements[9].width, elements[9].height);
        ctx.drawImage(elements[9].img,elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        elements[5].img = elements[9].img;
        elements[9].flag = false;
        elements[5].flag = true;
      }
      if (elements[8].flag == false) {
        ctx.clearRect(elements[9].left, elements[9].top, elements[9].width, elements[9].height);
        ctx.drawImage(elements[9].img,elements[8].left, elements[8].top, elements[8].width, elements[8].height);
        elements[8].img = elements[9].img;
        elements[9].flag = false;
        elements[8].flag = true;
      }
  }
  else if (y > elements[10].top && y < elements[10].top + elements[10].height && x > elements[10].left && x < elements[10].left + elements[10].width) {

      if (elements[11].flag == false) {
        ctx.clearRect(elements[10].left, elements[10].top, elements[10].width, elements[10].height);
        ctx.drawImage(elements[10].img,elements[11].left, elements[11].top, elements[11].width, elements[11].height);
        elements[11].img = elements[10].img;
        elements[10].flag = false;
        elements[11].flag = true;

      }
      if (elements[9].flag == false) {
        ctx.clearRect(elements[10].left, elements[10].top, elements[10].width, elements[10].height);
        ctx.drawImage(elements[10].img,elements[9].left, elements[9].top, elements[9].width, elements[9].height);
        elements[9].img = elements[10].img;
        elements[10].flag = false;
        elements[9].flag = true;
      }
      if (elements[6].flag == false) {
        ctx.clearRect(elements[10].left, elements[10].top, elements[10].width, elements[10].height);
        ctx.drawImage(elements[10].img,elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        elements[6].img = elements[10].img;
        elements[10].flag = false;
        elements[6].flag = true;
      }
  }
  else if (y > elements[11].top && y < elements[11].top + elements[11].height && x > elements[11].left && x < elements[11].left + elements[11].width) {

      if (elements[10].flag == false) {
        ctx.clearRect(elements[11].left, elements[11].top, elements[11].width, elements[11].height);
        ctx.drawImage(elements[11].img,elements[10].left, elements[10].top, elements[10].width, elements[10].height);
        elements[10].img = elements[11].img;
        elements[11].flag = false;
        elements[10].flag = true;

        if(elements[0].id == elements[0].img.id && elements[1].id == elements[1].img.id &&
          elements[2].id == elements[2].img.id && elements[3].id == elements[3].img.id &&
          elements[4].id == elements[4].img.id && elements[5].id == elements[5].img.id &&
          elements[6].id == elements[6].img.id && elements[7].id == elements[7].img.id &&
          elements[8].id == elements[8].img.id && elements[9].id == elements[9].img.id &&
          elements[10].id == elements[10].img.id ) {

          itDone();
        }
      }
      if (elements[7].flag == false) {
        ctx.clearRect(elements[11].left, elements[11].top, elements[11].width, elements[11].height);
        ctx.drawImage(elements[11].img, elements[7].left, elements[7].top, elements[7].width, elements[7].height);
        elements[7].img = elements[11].img;
        elements[11].flag = false;
        elements[7].flag = true;

        if(elements[0].id == elements[0].img.id && elements[1].id == elements[1].img.id &&
          elements[2].id == elements[2].img.id && elements[3].id == elements[3].img.id &&
          elements[4].id == elements[4].img.id && elements[5].id == elements[5].img.id &&
          elements[6].id == elements[6].img.id && elements[7].id == elements[7].img.id &&
          elements[8].id == elements[8].img.id && elements[9].id == elements[9].img.id &&
          elements[10].id == elements[10].img.id ) {

          itDone();
        }

      }
    }
}

function itDone() {
  ctx.clearRect(0, 0, 600, 360);
  ctx.drawImage(imgDone, 0, 0, 600, 360);
  ctx2.clearRect(0, 0, 150, 90);
}
