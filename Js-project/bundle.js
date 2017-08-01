/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvas = document.getElementById('canvas');

var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//riser

var Riser = function () {
  function Riser(x, y, dx, dy, radius) {
    _classCallCheck(this, Riser);

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  _createClass(Riser, [{
    key: 'update',
    value: function update() {
      if (this.y + this.radius > canvas.height) {
        this.dy = -this.dy;
      } else {
        this.dy += 1;
      }
      this.y += this.dy;
      this.draw();
    }
  }, {
    key: 'draw',
    value: function draw() {
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = 'red';
      c.fill();
      c.closePath();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {

      switch (event.keyCode) {
        case 37:
          // left
          console.log("YEAH PRESSED LEFT!");

          this.x -= 20;

          break;
        case 97:
          // A (left)
          console.log("YEAH PRESSED THE A KEY!");
          if (this.x - this.dx > 0) {
            this.x -= this.dx;
          }
          break;
        case 39:
          // right
          console.log("YEAH PRESSED RIGHT!");
          if (this.x + this.dx < canvas.width) {
            this.x += this.dx;
          }
          break;
        case 100:
          // D (right)
          console.log("YEAH PRESSED THE D KEY!");
          if (this.x + this.dx < canvas.width) {
            this.x += this.dx;
          }
          break;
      }
    }
  }]);

  return Riser;
}();
//riser

var riser;
function init() {
  riser = new Riser(canvas.width / 2, canvas.height / 2, 1, 1, 30);
  riser.update();
}

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, canvas.width, canvas.height)
//   riser.update();
// }

init();
window.addEventListener('keydown', riser.onKeyDown);
// animate();

setInterval(Riser.draw, 10);

// var mouse = {
//   x: undefined,
//   y: undefined,
// }
//
// var minRadius = 10;
// var maxRadius = 40;
//
// var colorArray = [
//   `rgba(39, 146, 204, 0.3)`,
//   `rgba(75, 126, 153, 0.5)`,
//   `rgba(23, 255, 211, 0.7)`,
//   `rgba(255, 108, 204, 0.3)`,
//   `rgba(255, 108, 87, 0.5)`,
// ];
//
// canvas.addEventListener('mousemove',
//   function (event) {
//     // console.log(event);
//     mouse.x = event.x;
//     mouse.y = event.y;
// })
//
// canvas.addEventListener('resize', function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//
//   init();
// })
//
// canvas.addEventListener('keypress', function (event) {
//   var keyCode = event.keyCode;
//   if (keyCode == 37) {
//     // new Circle(1, 1, 1, 1, 60));
//     c.draw
//   }
// })
//
//
//
// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.minRadius = minRadius;
//   this.maxRadius = maxRadius;
//   this.piTime = (Math.random() * 2)
//   this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
//
//   this.draw = function() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * this.piTime, false);
//     c.strokeStyle = this.color;
//     c.stroke();
//     c.fillStyle = this.color;
//     c.fill();
//   }
//
//   this.update = function () {
//     if (this.x + this.radius > innerWidth
//     || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//
//     if (this.y + this.radius > innerWidth
//     || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }
//
//     this.x += this.dx;
//     this.y += this.dy;
//
//     if (mouse.x - this.x < 50 && mouse.x - this.x > -50
//     && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//       if (this.radius < this.maxRadius) {
//         this.radius += 1;
//
//       }
//     } else if (this.radius > this.minRadius){
//       this.radius -= 1;
//     }
//
//     this.draw();
//   }
// }
//
//
// var circleArray = [];
//
// function init() {
//
//   circleArray = [];
//
//   for (var i = 0; i < 2000; i++) {
//     var radius = Math.random() * 3 + 1;
//     var x = Math.random() * (innerWidth - radius * 2) + radius;
//     var y = Math.random() * (innerHeight - radius * 2) + radius;
//     var dx = (Math.random() - 0.5);
//     var dy = (Math.random() - 0.5);
//     circleArray.push(new Circle(x, y, dx, dy, radius));
//   }
// }
//
// var circle = new Circle(200, 200, 3, 3, 30);
//
// function animate() {
//   requestAnimationFrame(animate);
//
//   c.clearRect(0,0,innerWidth,innerHeight);
//
//   for (var i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
//
// }
//
// init();
// animate();


// c.beginPath();
// c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.strokeStyle = `#000`;
// c.stroke();

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
//
// ctx.fillStyle = 'lightblue';
// ctx.fillRect(10, 10, 100, 100);


// c.fillStyle = 'rgba(0, 0, 255, 0.5)'
// c.fillRect(0, 0, 100, 100);
//
//
// c.beginPath();
// c.moveTo(150, 150);
// c.lineTo(175, 165);
// c.lineTo(100, 185);
// c.strokeStyle = "#fa34a3";
// c.stroke();


// for (let i = 0; i < 35; i++) {
//   c.beginPath();
//   c.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//   c.fillStyle = 'rgba(0, 0, 255, 0.5)'
//   c.stroke();
// }


// for (let i = 0; i < 35; i++) {
// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5) * 10;
// var radius = 30;

// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5) * 10;
// var radius = 30;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map