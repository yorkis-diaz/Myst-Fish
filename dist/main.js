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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/left-fish.png":
/*!*****************************************!*\
  !*** ./src/assets/images/left-fish.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/images/right-fish.png":
/*!******************************************!*\
  !*** ./src/assets/images/right-fish.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAYAAAAmNZ4aAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAYfSURBVEgNlVbpbxR1GH5m9mi3e/SgSw/a7bEtQjFoKG25ghYkXh88id+IMQZiJEBSNEQTIjHxi1ET/wX8oCRilEagYi+6GpQEKK2l0BbY3nvvdu/dmfF9Z1pM7ZaU32Z2Zn7X877P+77Pb4A1NpfL5SwrqVUq7U7FXlitrLNVKSWWSqWmcqOyxi2WTdMve3vMiySZIgaDHlarFY0bndDpdJAVBXl5Rjz88e5jVuYeWjNwRYU1ImUl2NeX4vTnp2C12QDyNZFMIhJeUG4PDmPaMybkhlnZK67syt3T2NiYAm2rkJeSJNMlQZKz6j2TziCbyeReuErvmj3m9YqsIJNJY3pqDmZLmByWkYilkEwloTcY4XRsUQSRrQNisRjOfHEGhw8fysnCEwEXFRdRjG2Q5QykrJHA9BB1IvLz81BQkI98Uz5EgXEE8I2NXK0JH3V8ovT3uChJ8hBPxHD9pmuFha3b9ir1zlp8ePwIEvE43KOjvDead++BqNdhoOsK/F4vtra1oKTUDplCYaSk+/mnTnR39eOtg6/h1Kcdy/bVz87MY2xsjCw2IRaN5TTwzsgobFYL6p11CPj9uD88pGa00WiAnq7iYhsUKY0NGyphr6ggYAlmcwHSyRTujNyBx7Nrxb7Cu4eOKL9euIgTHUfRtrMVA/0u3LwxROUiEp0yHLVV2Ld/Lz1nkAgHoDMYkG8mIPolIhxnBSaLDQKVl9liJfoNKohAXCfiCZXue6P30dPdq7TtaD15+rNTX/MEkdJUzVRHbTW2tTyLYDCE7t+60ddzla4+zM7Morltm+qtb96DhVAIBoqlMd+EkD+AkM8PkcBMZgsUAuNsT6VSiEajKCu3Y3tbMwwUjsuXuoShwaGvllzXc6yY/KAviLF749i9Z4cqELzp5MQEaole98NJxMg7kbwSRZ26VlFkelbt5hqjZBLQef4C3O4p7DvQjk1NTyEcjiBJdNc6a/DNt18imUji3Pnv1PWPsjqeTCAQCKG+sQ5tu1rhHh/HzTzAuq6UBII2INoUtXZlAiFwCoVq8aJgMvDgrWEK0yC2bG1C09ObkUikEKd1LDotO5sxQEnMMtu+vx164ocsEBCjzcOeeQgyCQNlZTyVhs1eRrHWI8j9NK2kvEL1MuL3qpkry2SEar+gJtvuvTtR11CHakc1lRwbyIMUa1K3OUricCSiZjtLr0Y1Ff1CwAfvtEmNUXbRizJHLRaCAUyP3YXZVgjHpi1EVwxToyOQMlkqJVpOdHNjcWl/4Xl6pzjTGMeaGzORIrp93gAikagqLtyvUU0xKrBZUUwe8sJ4OExDjM6bpFFUWkrZbCTjyFMCsJWsg0y6HaW4a43nsqrlls0s7ZEhg1MxAtZoYKq5IAQUEmilswGzDybgcT9QDWAvLEWFKK9vQJIk0D0yTKVjoXkbCUdBfDSqerqIvvJGIKxkaRKdwMwU/HOzSKdTyEpZ9liLUprikCSLgoEw5uZ9KkV87JVQvAvtURKDJE1lWgXGpIsN5qb9q4//+2O2MkR5mBicmvGAZAEtrdupahq0GPNiTiyv+yH6el0YcF1Xz1uOU9PmBrxjyiMrJY0lwtHYIj1ehBXIIPVwoI2XGsc+RHvGQkHcuPUPvj/XiRdfOYDLv/8i0MUeM9GUXCSXPqpl1tgqxwY1e1lzLUSt1xukRBJhJlnl+s0QXZrbGgzHUEzp1DGtR6SaF1QRCQaCKkJ1TRXslCtLjWJM8kXW9V39G11XruLEx8fbzv5w9q+lCXwfvD2i1DgqcfDNlwk0jdmJcerlc1nLXO/kpJYTHIPFxjre3/MH/rx2A2+8/TpuDV8T6Foahl5HJWGgSRLVXSKZxrFjHywD5ZnpbBZZymKZapwTTqtRLTd4nI8/DZOBFwNAzKToA4Evg9HI05a1/1Yv68798szm7UpF2Xq8+tJz0JP+MkYmI6HzYi88Xh95ockpDyRICd878j46Th7NifFIMnNDLe/1eP3qoc8ZzRnGN35mRfL5Q5oxi0v4C4Q/DFdrOa1ZbXJ1eaPC52xl+Xot+YhOozEPl7o7n2gf3v+JPOaPugUpiuGgplgcc7PZvJqdj+3/F/5s6OYttv5uAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_right_fish_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/right-fish.png */ "./src/assets/images/right-fish.png");
/* harmony import */ var _assets_images_left_fish_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/left-fish.png */ "./src/assets/images/left-fish.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var StandardFish =
/*#__PURE__*/
function () {
  function StandardFish() {
    _classCallCheck(this, StandardFish);

    this.x = 10 + Math.random() * 940;
    this.y = 330 + Math.random() * 120;
    this.width = 30;
    this.height = 25;
    this.score = 20;
    this.type = "standard";
    this.direction = Math.floor(Math.random() * 2);
    this.dx = 1 + Math.floor(Math.random() * 2);
    this.fishImage = new Image();
    debugger;

    if (this.direction === 0) {
      this.fishImage.src = _assets_images_right_fish_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    } else {
      this.fishImage.src = _assets_images_left_fish_png__WEBPACK_IMPORTED_MODULE_1__["default"];
    }

    debugger;
    this.id = Math.random() * 10000;
  }

  _createClass(StandardFish, [{
    key: "moveFish",
    value: function moveFish() {
      if (this.direction === 0) {
        this.x = this.x + this.dx;

        if (this.x >= 950) {
          this.direction = 1;
          this.fishImage.src = _assets_images_left_fish_png__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
      } else {
        this.x = this.x - this.dx;

        if (this.x <= 10) {
          this.direction = 0;
          this.fishImage.src = _assets_images_right_fish_png__WEBPACK_IMPORTED_MODULE_0__["default"];
        }
      }
    }
  }, {
    key: "detectCollision",
    value: function detectCollision(rod) {
      var collision = false;
      var fishTotalLength = this.x + this.width;
      var fishTotalHeight = this.y + this.height;

      if (rod.x >= this.x && rod.x <= fishTotalLength && rod.y >= this.y + 10 && rod.y <= fishTotalHeight) {
        collision = true;
      }

      return collision;
    }
  }]);

  return StandardFish;
}();

var MediumFish =
/*#__PURE__*/
function () {
  function MediumFish() {
    _classCallCheck(this, MediumFish);

    this.x = 10 + Math.random() * 940;
    this.y = 330 + Math.random() * 120;
    this.width = 80;
    this.height = 39;
    this.score = 100;
    this.type = "medium";
    this.direction = Math.floor(Math.random() * 2);
    this.dx = 1 + Math.floor(Math.random() * 2);
    this.fishImage = new Image();

    if (this.direction === 0) {
      this.fishImage.src = "/src/assets/images/right-medium-fish.png";
    } else {
      this.fishImage.src = "/src/assets/images/left-medium-fish.png";
    }

    this.id = Math.random() * 10000;
  }

  _createClass(MediumFish, [{
    key: "moveFish",
    value: function moveFish() {
      if (this.direction === 0) {
        this.x = this.x + this.dx;

        if (this.x + 40 >= 950) {
          this.direction = 1;
          this.fishImage.src = "/src/assets/images/left-medium-fish.png";
        }
      } else {
        this.x = this.x - this.dx;

        if (this.x <= 10) {
          this.direction = 0;
          this.fishImage.src = "/src/assets/images/right-medium-fish.png";
        }
      }
    }
  }, {
    key: "detectCollision",
    value: function detectCollision(rod) {
      var collision = false;
      var fishTotalLength = this.x + this.width;
      var fishTotalHeight = this.y + this.height;

      if (rod.x >= this.x && rod.x <= fishTotalLength && rod.y >= this.y + 10 && rod.y <= fishTotalHeight) {
        collision = true;
      }

      return collision;
    }
  }]);

  return MediumFish;
}();

var MystFish =
/*#__PURE__*/
function () {
  function MystFish() {
    _classCallCheck(this, MystFish);

    this.x = 10 + Math.random() * 940;
    this.y = 330 + Math.random() * 120;
    this.width = 150;
    this.height = 40;
    this.score = 500;
    this.type = "myst";
    this.direction = Math.floor(Math.random() * 2);
    this.dx = 1 + Math.floor(Math.random() * 2);
    this.fishImage = new Image();

    if (this.direction === 0) {
      this.fishImage.src = "/src/assets/images/right-myst-fish.png";
    } else {
      this.fishImage.src = "/src/assets/images/left-myst-fish.png";
    }

    this.id = Math.random() * 10000;
  }

  _createClass(MystFish, [{
    key: "moveFish",
    value: function moveFish() {
      if (this.direction === 0) {
        this.x = this.x + this.dx;

        if (this.x + 95 >= 950) {
          this.direction = 1;
          this.fishImage.src = "/src/assets/images/left-myst-fish.png";
        }
      } else {
        this.x = this.x - this.dx;

        if (this.x <= 10) {
          this.direction = 0;
          this.fishImage.src = "/src/assets/images/right-myst-fish.png";
        }
      }
    }
  }, {
    key: "detectCollision",
    value: function detectCollision(rod) {
      var collision = false;
      var fishTotalLength = this.x + this.width;
      var fishTotalHeight = this.y + this.height;

      if (rod.x >= this.x && rod.x <= fishTotalLength && rod.y >= this.y + 10 && rod.y <= fishTotalHeight) {
        collision = true;
      }

      return collision;
    }
  }]);

  return MystFish;
}();

var FishArray = {};

for (var i = 0; i < 10; ++i) {
  var standardFish = new StandardFish();
  FishArray[standardFish.id] = standardFish;
} // const mystFish = new MystFish
// FishArray[mystFish.id] = mystFish
// firstMedium = new MediumFish
// secondMedium = new MediumFish
// FishArray[firstMedium.id] = firstMedium;
// FishArray[secondMedium.id] = secondMedium;


function DrawFish(ctx, spacePressed, rod) {
  Object.values(FishArray).forEach(function (fish) {
    debugger;
    ctx.beginPath();
    ctx.drawImage(fish.fishImage, fish.x, fish.y);
    ctx.closePath();
    fish.moveFish();

    if (spacePressed) {
      var collided = fish.detectCollision({
        x: rod.x,
        y: rod.y
      });

      if (collided && fish.type === "standard" && rod.score < 500) {
        rod.score = rod.score + fish.score;
        delete FishArray[fish.id];
        var respawn1 = new StandardFish();
        var respawn2 = new StandardFish();
        FishArray[respawn1.id] = respawn1;
        FishArray[respawn2.id] = respawn2;
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DrawFish);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish */ "./src/fish.js");


var Rod = __webpack_require__(/*! ./rod */ "./src/rod.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("myCanvas");
  var score = document.getElementById("user-score");
  var ctx = canvas.getContext("2d");
  var x = 250;
  var y = 300;
  var rod = new Rod(x, y);
  var spacePressed = false;

  function draw() {
    score.innerText = "Score: ".concat(rod.score);
    rod.drawRod(ctx);
    Object(_fish__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx, spacePressed, rod);

    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 32:
          spacePressed = true;
          break;

        case 37:
          rod.x = e.shiftKey === true ? rod.x - 10 : rod.x - 5;
          if (rod.x < 10) rod.x = 10;
          rod.drawRod(ctx);
          break;

        case 38:
          rod.y = e.shiftKey === true ? rod.y - 10 : rod.y - 5;
          if (rod.y < 285) rod.y = 285;
          rod.drawRod(ctx);
          break;

        case 39:
          rod.x = e.shiftKey === true ? rod.x + 10 : rod.x + 5;
          if (rod.x > 950) rod.x = 950;
          rod.drawRod(ctx);
          break;

        case 40:
          rod.y = e.shiftKey === true ? rod.y + 10 : rod.y + 5;
          if (rod.y > 470) rod.y = 470;
          rod.drawRod(ctx);
          break;
      }
    };

    document.onkeyup = function (e) {
      switch (e.keyCode) {
        case 32:
          spacePressed = false;
          break;
      }
    };

    requestAnimationFrame(draw);
  }

  draw();
});

/***/ }),

/***/ "./src/rod.js":
/*!********************!*\
  !*** ./src/rod.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rod =
/*#__PURE__*/
function () {
  function Rod(x, y) {
    _classCallCheck(this, Rod);

    this.x = x;
    this.y = y;
    this.score = 0;
  }

  _createClass(Rod, [{
    key: "drawRod",
    value: function drawRod(ctx) {
      ctx.clearRect(0, 0, 1000, 500);
      ctx.beginPath();
      ctx.moveTo(0, 250);
      ctx.lineTo(this.x, 250);
      ctx.lineTo(this.x, this.y);
      ctx.lineWidth = "2";
      ctx.strokeStyle = "yellow";
      ctx.stroke();
      ctx.closePath();
    }
  }]);

  return Rod;
}();

module.exports = Rod;

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGVmdC1maXNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9yaWdodC1maXNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlzaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJTdGFuZGFyZEZpc2giLCJ4IiwiTWF0aCIsInJhbmRvbSIsInkiLCJ3aWR0aCIsImhlaWdodCIsInNjb3JlIiwidHlwZSIsImRpcmVjdGlvbiIsImZsb29yIiwiZHgiLCJmaXNoSW1hZ2UiLCJJbWFnZSIsInNyYyIsInJpZ2h0RmlzaCIsImxlZnRGaXNoIiwiaWQiLCJyb2QiLCJjb2xsaXNpb24iLCJmaXNoVG90YWxMZW5ndGgiLCJmaXNoVG90YWxIZWlnaHQiLCJNZWRpdW1GaXNoIiwiTXlzdEZpc2giLCJGaXNoQXJyYXkiLCJpIiwic3RhbmRhcmRGaXNoIiwiRHJhd0Zpc2giLCJjdHgiLCJzcGFjZVByZXNzZWQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiZmlzaCIsImJlZ2luUGF0aCIsImRyYXdJbWFnZSIsImNsb3NlUGF0aCIsIm1vdmVGaXNoIiwiY29sbGlkZWQiLCJkZXRlY3RDb2xsaXNpb24iLCJyZXNwYXduMSIsInJlc3Bhd24yIiwiUm9kIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImRyYXciLCJpbm5lclRleHQiLCJkcmF3Um9kIiwib25rZXlkb3duIiwiZSIsImtleUNvZGUiLCJzaGlmdEtleSIsIm9ua2V5dXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSwrRUFBZ0IsZ2pHOzs7Ozs7Ozs7Ozs7QUNBL0I7QUFBZSwrRUFBZ0IsZ2tHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0I7QUFDQTs7SUFFTUEsWTs7O0FBQ0YsMEJBQWU7QUFBQTs7QUFDWCxTQUFLQyxDQUFMLEdBQVMsS0FBS0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQTlCO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLE1BQU1GLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUEvQjtBQUNBLFNBQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLElBQUwsR0FB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RyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7OzRCQUVPcUIsRyxFQUFLO0FBQ1RBLFNBQUcsQ0FBQzhCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLElBQXBCLEVBQTBCLEdBQTFCO0FBQ0E5QixTQUFHLENBQUNNLFNBQUo7QUFDQU4sU0FBRyxDQUFDK0IsTUFBSixDQUFXLENBQVgsRUFBYyxHQUFkO0FBQ0EvQixTQUFHLENBQUNnQyxNQUFKLENBQVcsS0FBSzNELENBQWhCLEVBQW1CLEdBQW5CO0FBQ0EyQixTQUFHLENBQUNnQyxNQUFKLENBQVcsS0FBSzNELENBQWhCLEVBQW1CLEtBQUtHLENBQXhCO0FBQ0F3QixTQUFHLENBQUNpQyxTQUFKLEdBQWdCLEdBQWhCO0FBQ0FqQyxTQUFHLENBQUNrQyxXQUFKLEdBQWtCLFFBQWxCO0FBQ0FsQyxTQUFHLENBQUNtQyxNQUFKO0FBQ0FuQyxTQUFHLENBQUNRLFNBQUo7QUFDSDs7Ozs7O0FBS0w0QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QixHQUFqQixDOzs7Ozs7Ozs7OztBQ3RCQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBWkNBWUFBQUFtTlo0YUFBQUJZV2xEUTFCclEwZERiMnh2Y2xOd1lXTmxSR2x6Y0d4aGVWQXpBQUFva1dOZ1lGSkpMQ2pJWVdGZ1lNak5LeWtLY25kU2lJaU1VbUIveU1BT2hMd01ZZ3dLaWNuRkJZNEJBVDVBSlF3d0doVjh1OGJBQ0tJdjY0TE1PaVUxdFVtMVhzRFhZcWJ3MVl1dlJKc3cxYU1BcnBUVTRtUWcvUWVJVTVNTGlrb1lHQmhUZ0d6bDhwSUNFTHNEeUJZcEFqb0t5SjREWXFkRDJCdEE3Q1FJK3doWVRVaVFNNUI5QThoV1NNNUlCSnJCK0FQSTFrbENFazlIWWtQdEJRRnVsOHppZ3B6RVNvVUFZd0t1SlFPVXBGYVVnR2puL0lMS29zejBqQklGUjJBb3BTcDQ1aVhyNlNnWUdSaWFNekNBd2h5aStuTWdPQ3daeGM0Z3hKcnZNekRZN3YvLy8vOXVoSmpYZmdhR2pVQ2RYRHNSWWhvV0RBeUMzQXdNSjNZV0pCWWxnb1dZZ1pncExZMkI0ZE55QmdiZVNBWUc0UXRBUGRIRmFjWkdZSGxHSGljR0J0WjcvLzkvVm1OZ1lKL013UEIzd3YvL3Z4ZjkvLzkzTVZEekhRYUdBM2tBRlNGbDdqWEgwZnNBQUFGWmFWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKWVRWQWdRMjl5WlNBMUxqUXVNQ0krQ2lBZ0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStDaUFnSUNBZ0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPblJwWm1ZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZkR2xtWmk4eExqQXZJajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZUM0pwWlc1MFlYUnBiMjQrTVR3dmRHbG1aanBQY21sbGJuUmhkR2x2Ymo0S0lDQWdJQ0FnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2lBZ0lEd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2t6Q0oxa0FBQVlUU1VSQlZFZ050VlpiYkZSVkZGMXo1OTJaYVR2VFRrdUhUa3VuTFUwRjVVMkRSU3lORXRFU0lFUkR3b2YrK2lFZmZKaklEMnBpUkVNVE5LaUJHRDdVSDJNMDhVTUNFb3VBamJZK0VnaVBBbTNsVWFjejArbDBYcmZ6dW5PdmU1L2JxUzFZVWt6Y21abDc1dDV6OWpwN3I3WDN1Y0Ivc0ViZmNzM2o5R2xWNWZXYXQ4S3YrYnpOV3Exbm1kYmYzOSs4V0hlbXhVNmNPNjlqMDBia2NubElCZ09LeFNKdTNSeEJLcFdpc1QwNWQ5N0R4bzhFdkxTbVJYdjhpUlU0ZU9oMTJHMDJ3QUNra2trY2VPME54S2ZpcUt0ei9UL0FTcUdBUXI0Z29peXFDZ1hFRWF2UU5FMXNvclcxTmZld0tPYytXekRpRXljKzB3NGRQQVNId3lHY2FxcUdiRGFQYkM2THU3ZnZ3ZTZ3RXF3RU9aMUJvWkFIUDM4VVd4Q1luVG1kRHBTVkVUQTBxQlNWSkVtdzJheVFqQkx4YTRSU1VLQ3FCYmhjNWFoMFZ5SVVXencwc1RUZkRyL1RxMzM5MWJmbzNyWUZPM2YzSU04aUlxQllkQUtYQjM1RmxkZUx6ZHVlZ2FvVThYdi9UN3duTkxTMXdWNVdobzgrT0k3Umtkc1kvT1BDQTM3WHIrN1V5dXdPRW1VT1c3WjI0b0dJSTVFSkRGMGZ3dVl0SFdodWFZSXNUeE93RVhhckdXT2VDcmpkNVNKcWhiZ3U1SFZsMS9tV3dGTlZoV2drU210dnpJOWs1dC9vOENnY2xNSHA2UXhhMjFwWWw3cTkvZWJoQXdPL0RCN1oydDFsYUcxcmd0bHNvU2pzdW5Cb0NndExUcWVnVWZsazBrbGFhSUM5dkVKY3MzSVNSWHB1ci9EQWFES2o3NGNMcElNeEdrdENmS3ZYcktSQU9qSHc4eUNPOWg3RDh6dTJrenBtN01ybEs3MW5Ubjl2TUp1TVdOK3hEclZMdkVpbjB5STFYS3NhMWF6ZDRZUmtOaU1lblVSOE1nYUx6UTZ6M1laVVBJNW9PSUpBY3hQV2RhekZlSEFjNTgrZHArOUY5SjN0d3hTVjJ0b05xOUd3eks4SFFucVpUZlVHQW51cXF4TU5qWDdjSHIwakFDMFdDNGF1M2FERjU5RFFVSThlNHB4V0NwRVpEQklOVmZCVmtveUNqb21KQ0thSnc3V3IydUZ4MnVBUEJGQlo1VUZOalJmRHQwWXdGWjNTVTB4NWx2YnMzQ2ZhWHlQdFpzL2VYZkRXVklzZFpqSTVBUkFPaC9GajMwVmN2blNWUUdhWkVTVm1NSnJvbmhGRmxXcVpzaUxMR1NRVFNXb2tYcXhzRCtEcHJpZXhZOWNMQ0xRMklSYUxZenFiS1NVWUpyUFpCSXZWZ2dSMW9GQXdqRXcyS3dBWVF5V0gvZ1kvZHIrNEV6NFNFSmVVUUtSZmZwYUlSSVRpbmNSMW1kT0ZySndpL2xQazFJcHlieTFGbjBjb0ZCYTBKS0pSeUxRcHZTa1labEpOL3BMSk5LSVRNU2hLWVRZeTVqWVFXQ1pVeUExQ29SSXFtVWJBazBFU0VHMjh2cTBkTmlxVnUwTlhJU2NUV05xeUhDNjNCd3F0ajBaanRNRXdZcUcva0lwRllaQW9JdnJvSEZONE9UbU5UQ29PQTZuU1JJb3VHYWV4U0R0bjAxT3RkeWdlVjFSVlF5SXg1bVFaaGN3MGJOVGx6Qll6aWxSbXFSaDNFejFERE9hbURKUk54SVZHMkpkSktTckk1M09ZREkwajdMVEM0NnVIeFczVDB5cFN5OVB1TjJxVzFGU3E2LzI4R3dSSGJsS0swMmhvWHlIQXczK09JRDBlRk5GeHB0eTFOZkExdDJDTWdEVU9sMVhkdXJ5RlRwZ1VGQlVZQzBaZ2RMaGdwcE9IbXdiWDVMK2JKaHd3NTF6UEluZWs3bnlHeEVQM0ppZW5xTlBGeExFcERoRGkzTzFOSTAvNjBZMDRmdmU5dDNnbGRaNVh0TSsvK0FaN1grckJtbFdQd1ZIcGhxZk9SODJmZGpSam5ESXVIellCUjlIU1IyU1VyOHk1aVRaODZsUWZybDBmaHBIR3JKUE5uZXZoc3BPQWlXdDljb2xqK3V1dHJvYS9zVjVFRW90TlFhTm95K21nVUl2TWt3N09vQXJkRTBhM0ZhS0lrYm1lZVNzSkVxaEtxWE02bmFqM0x4VjBzUHE1YXFKVXc2bTBQSk9oT1Eza3c0K1BpTWlmM2RhdG5UajVKVFoxckVIM1ZwWDRMK2hBN0pwQmlETjJ4cHNaSnk0WlVLV29PTG96WnkvaXp0MGdSdTVkRTc1S0MvZTkvTW5Hbys5L01HQzFFb1Ywd3JIbVpqdFhhWktadWxXT3dQaWJweTZrQTgva2svZExRN0dZRmhTcHZBU0h6RFhSd09XV1YvZ0ZZYjd0My8vcVlGMTFRRlFMcTk1b29zWXpmOG8vLzNxUEhOTk9IditVWG5Ic2RKUFRUYW1seUdxODFlaloza1dIaUZIY1pyRHZUcC9IT1BYcVM5ZC9XOUNmY0REbjU0R0lTODljTGhjaUU1UDZHOGpNVFFheEVsOGNwYWJwMGZONEtwRVFjMHRyRjNOZDlBN25PbnV1dTBmajJwZEliTXgzTUJRUjUvYTkwSzFGKzFzdzRybEE5NCtIYmd3VGtDeE9KWDdHSmNSbDh5ajJOdzBQdHU0MEZiVmRBQUFBQUVsRlRrU3VRbUNDXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBWkNBWUFBQUFtTlo0YUFBQUJZV2xEUTFCclEwZERiMnh2Y2xOd1lXTmxSR2x6Y0d4aGVWQXpBQUFva1dOZ1lGSkpMQ2pJWVdGZ1lNak5LeWtLY25kU2lJaU1VbUIveU1BT2hMd01ZZ3dLaWNuRkJZNEJBVDVBSlF3d0doVjh1OGJBQ0tJdjY0TE1PaVUxdFVtMVhzRFhZcWJ3MVl1dlJKc3cxYU1BcnBUVTRtUWcvUWVJVTVNTGlrb1lHQmhUZ0d6bDhwSUNFTHNEeUJZcEFqb0t5SjREWXFkRDJCdEE3Q1FJK3doWVRVaVFNNUI5QThoV1NNNUlCSnJCK0FQSTFrbENFazlIWWtQdEJRRnVsOHppZ3B6RVNvVUFZd0t1SlFPVXBGYVVnR2puL0lMS29zejBqQklGUjJBb3BTcDQ1aVhyNlNnWUdSaWFNekNBd2h5aStuTWdPQ3daeGM0Z3hKcnZNekRZN3YvLy8vOXVoSmpYZmdhR2pVQ2RYRHNSWWhvV0RBeUMzQXdNSjNZV0pCWWxnb1dZZ1pncExZMkI0ZE55QmdiZVNBWUc0UXRBUGRIRmFjWkdZSGxHSGljR0J0WjcvLzkvVm1OZ1lKL013UEIzd3YvL3Z4ZjkvLzkzTVZEekhRYUdBM2tBRlNGbDdqWEgwZnNBQUFGWmFWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKWVRWQWdRMjl5WlNBMUxqUXVNQ0krQ2lBZ0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStDaUFnSUNBZ0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPblJwWm1ZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZkR2xtWmk4eExqQXZJajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZUM0pwWlc1MFlYUnBiMjQrTVR3dmRHbG1aanBQY21sbGJuUmhkR2x2Ymo0S0lDQWdJQ0FnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2lBZ0lEd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2t6Q0oxa0FBQVlmU1VSQlZFZ05sVmJwYnhSMUdINW05bWkzZS9TZ1N3L2E3YkV0UWpGb0tHMjVnaFlrWGg4OGlkK0lNUVppSkVCU05FUVRJakh4aTFFVC93WDhvQ1JpbEVhZ1lpKzZHcFFFS0sybDBCYlkzbnZ2ZHUvZG1mRjlaMXBNN1phVTMyWjJabjdYODc3UCs3N1BiNEExTnBmTDVTd3JxVlVxN1U3RlhsaXRyTE5WS1NXV1NxV21jcU95eGkyV1RkTXZlM3ZNaXlTWklnYURIbGFyRlkwYm5kRHBkSkFWQlhsNVJqejg4ZTVqVnVZZVdqTndSWVUxSW1VbDJOZVg0dlRucDJDMTJRRHlOWkZNSWhKZVVHNFBEbVBhTXlia2hsblpLNjdzeXQzVDJOaVlBbTJya0plU0pOTWxRWkt6NmoyVHppQ2J5ZVJldUVydm1qM205WXFzSUpOSlkzcHFEbVpMbUJ5V2tZaWxrRXdsb1RjWTRYUnNVUVNSclFOaXNSak9mSEVHaHc4ZnlzbkNFd0VYRlJkUmpHMlE1UXlrckpIQTlCQjFJdkx6ODFCUWtJOThVejVFZ1hFRThJMk5YSzBKSDNWOG92VDN1Q2hKOGhCUHhIRDlwbXVGaGEzYjlpcjF6bHA4ZVB3SUV2RTQzS09qdkRlYWQrK0JxTmRob09zSy9GNHZ0cmExb0tUVURwbENZYVNrKy9tblRuUjM5ZU90ZzYvaDFLY2R5L2JWejg3TVkyeHNqQ3cySVJhTjVUVHd6c2dvYkZZTDZwMTFDUGo5dUQ4OHBHYTAwV2lBbnE3aVloc1VLWTBOR3lwaHI2Z2dZQWxtY3dIU3lSVHVqTnlCeDdOcnhiN0N1NGVPS0w5ZXVJZ1RIVWZSdHJNVkEvMHUzTHd4Uk9VaUVwMHlITFZWMkxkL0x6MW5rQWdIb0RNWWtHOG1JUG9sSWh4bkJTYUxEUUtWbDlsaUpmb05Lb2hBWENmaUNaWHVlNlAzMGRQZHE3VHRhRDE1K3JOVFgvTUVrZEpVelZSSGJUVzJ0VHlMWURDRTd0KzYwZGR6bGE0K3pNN01vcmx0bStxdGI5NkRoVkFJQm9xbE1kK0VrRCtBa004UGtjQk1aZ3NVQXVOc1Q2VlNpRWFqS0N1M1kzdGJNd3dVanN1WHVvU2h3YUd2bGx6WGM2eVkvS0F2aUxGNzQ5aTlaNGNxRUx6cDVNUUVhb2xlOThOSnhNZzdrYndTUloyNlZsRmtlbGJ0NWhxalpCTFFlZjRDM080cDdEdlFqazFOVHlFY2ppQkpkTmM2YS9ETnQxOGltVWppM1BudjFQV1BzanFlVENBUUNLRytzUTV0dTFyaEhoL0h6VHpBdXE2VUJJSTJJTm9VdFhabEFpRndDb1ZxOGFKZ012RGdyV0VLMHlDMmJHMUMwOU9ia1Vpa0VLZDFMRG90TzVzeFFFbk1NdHUrdngxNjRvY3NFQkNqemNPZWVRZ3lDUU5sWlR5VmhzMWVSckhXSThqOU5LMmt2RUwxTXVMM3Fwa3J5MlNFYXIrZ0p0dnV2VHRSMTFDSGFrYzFsUndieUlNVWExSzNPVXJpY0NTaVpqdExyMFkxRmYxQ3dBZnZ0RW1OVVhiUml6SkhMUmFDQVV5UDNZWFpWZ2pIcGkxRVZ3eFRveU9RTWxrcUpWcE9kSE5qY1dsLzRYbDZwempUR01lYUd6T1JJcnA5M2dBaWthZ3FMdHl2VVUweEtyQlpVVXdlOHNKNE9FeERqTTZicEZGVVdrclpiQ1RqeUZNQ3NKV3NnMHk2SGFXNGE0M25zcXJsbHMwczdaRWhnMU14QXRab1lLcTVJQVFVRW1pbHN3R3pEeWJnY1Q5UURXQXZMRVdGS0s5dlFKSWswRDB5VEtWam9Ya2JDVWRCZkRTcWVycUl2dkpHSUt4a2FSS2R3TXdVL0hPelNLZFR5RXBaOWxpTFVwcmlrQ1NMZ29FdzV1WjlLa1Y4N0pWUXZBdnRVUktESkUxbFdnWEdwSXNONXFiOXE0Ly8rMk8yTWtSNW1CaWNtdkdBWkFFdHJkdXBhaHEwR1BOaVRpeXYreUg2ZWwwWWNGMVh6MXVPVTlQbUJyeGp5aU1ySlkwbHd0SFlJajFlaEJYSUlQVndvSTJYR3NjK1JIdkdRa0hjdVBVUHZqL1hpUmRmT1lETHYvOGkwTVVlTTlHVVhDU1hQcXBsMXRncXh3WTFlMWx6TFVTdDF4dWtSQkpoSmxubCtzMFFYWnJiR2d6SFVFenAxREd0UjZTYUYxUVJDUWFDS2tKMVRSWHNsQ3RMaldKTThrWFc5VjM5RzExWHJ1TEV4OGZienY1dzlxK2xDWHdmdkQyaTFEZ3FjZkRObHdrMGpkbUpjZXJsYzFuTFhPL2twSllUSElQRnhqcmUzL01IL3J4MkEyKzgvVHB1RFY4VDZGb2FobDVISldHZ1NSTFZYU0taeHJGakh5d0Q1Wm5wYkJaWnltS1phcHdUVHF0UkxUZDRuSTgvRFpPQkZ3TkF6S1RvQTRFdmc5SEkwNWExLzFZdjY4Nzk4c3ptN1VwRjJYcTgrdEp6MEpQK01rWW1JNkh6WWk4OFhoOTVvY2twRHlSSUNkODc4ajQ2VGg3TmlmRklNbk5ETGUvMWVQM3FvYzhaelJuR04zNW1SZkw1UTVveGkwdjRDNFEvREZkck9hMVpiWEoxZWFQQzUyeGwrWG90K1loT296RVBsN283bjJnZjN2K0pQT2FQdWdVcGl1R2dwbGdjYzdQWnZKcWRqKzMvRi81czZPWXR0djV1QUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IHJpZ2h0RmlzaCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JpZ2h0LWZpc2gucG5nXCI7XG5pbXBvcnQgbGVmdEZpc2ggZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9sZWZ0LWZpc2gucG5nXCI7XG5cbmNsYXNzIFN0YW5kYXJkRmlzaCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnggPSAxMCArIE1hdGgucmFuZG9tKCkgKiA5NDA7XG4gICAgICAgIHRoaXMueSA9IDMzMCArIE1hdGgucmFuZG9tKCkgKiAxMjA7XG4gICAgICAgIHRoaXMud2lkdGggPSAzMFxuICAgICAgICB0aGlzLmhlaWdodCA9IDI1XG4gICAgICAgIHRoaXMuc2NvcmUgPSAyMFxuICAgICAgICB0aGlzLnR5cGUgPSBcInN0YW5kYXJkXCJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgICAgICB0aGlzLmR4ID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICB0aGlzLmZpc2hJbWFnZSA9IG5ldyBJbWFnZVxuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IHJpZ2h0RmlzaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IGxlZnRGaXNoO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwMDtcbiAgICB9XG5cbiAgICBtb3ZlRmlzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLmR4XG4gICAgICAgICAgICBpZiAodGhpcy54ID49IDk1MCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMVxuICAgICAgICAgICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IGxlZnRGaXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy54IC0gdGhpcy5keFxuICAgICAgICAgICAgaWYgKHRoaXMueCA8PSAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IHJpZ2h0RmlzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdENvbGxpc2lvbihyb2QpIHtcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlXG4gICAgICAgIGNvbnN0IGZpc2hUb3RhbExlbmd0aCA9IHRoaXMueCArIHRoaXMud2lkdGhcbiAgICAgICAgY29uc3QgZmlzaFRvdGFsSGVpZ2h0ID0gdGhpcy55ICsgdGhpcy5oZWlnaHRcbiAgICAgICAgaWYgKHJvZC54ID49IHRoaXMueCAmJlxuICAgICAgICAgICAgcm9kLnggPD0gZmlzaFRvdGFsTGVuZ3RoICYmXG4gICAgICAgICAgICByb2QueSA+PSAodGhpcy55ICsgMTApICYmXG4gICAgICAgICAgICByb2QueSA8PSBmaXNoVG90YWxIZWlnaHRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxufVxuXG5jbGFzcyBNZWRpdW1GaXNoIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gMTAgKyBNYXRoLnJhbmRvbSgpICogOTQwO1xuICAgIHRoaXMueSA9IDMzMCArIE1hdGgucmFuZG9tKCkgKiAxMjA7XG4gICAgdGhpcy53aWR0aCA9IDgwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzk7XG4gICAgdGhpcy5zY29yZSA9IDEwMDtcbiAgICB0aGlzLnR5cGUgPSBcIm1lZGl1bVwiO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgdGhpcy5keCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICB0aGlzLmZpc2hJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvcmlnaHQtbWVkaXVtLWZpc2gucG5nXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL2xlZnQtbWVkaXVtLWZpc2gucG5nXCI7XG4gICAgfVxuICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpICogMTAwMDA7XG4gIH1cblxuICBtb3ZlRmlzaCgpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IDApIHtcbiAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuZHg7XG4gICAgICBpZiAodGhpcy54ICsgNDAgPj0gOTUwKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbGVmdC1tZWRpdW0tZmlzaC5wbmdcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy54ID0gdGhpcy54IC0gdGhpcy5keDtcbiAgICAgIGlmICh0aGlzLnggPD0gMTApIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yaWdodC1tZWRpdW0tZmlzaC5wbmdcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb24ocm9kKSB7XG4gICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgIGNvbnN0IGZpc2hUb3RhbExlbmd0aCA9IHRoaXMueCArIHRoaXMud2lkdGg7XG4gICAgY29uc3QgZmlzaFRvdGFsSGVpZ2h0ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG4gICAgaWYgKFxuICAgICAgcm9kLnggPj0gdGhpcy54ICYmXG4gICAgICByb2QueCA8PSBmaXNoVG90YWxMZW5ndGggJiZcbiAgICAgIHJvZC55ID49IHRoaXMueSArIDEwICYmXG4gICAgICByb2QueSA8PSBmaXNoVG90YWxIZWlnaHRcbiAgICApIHtcbiAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjb2xsaXNpb247XG4gIH1cbn1cblxuY2xhc3MgTXlzdEZpc2gge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSAxMCArIE1hdGgucmFuZG9tKCkgKiA5NDA7XG4gICAgdGhpcy55ID0gMzMwICsgTWF0aC5yYW5kb20oKSAqIDEyMDtcbiAgICB0aGlzLndpZHRoID0gMTUwO1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy5zY29yZSA9IDUwMDtcbiAgICB0aGlzLnR5cGUgPSBcIm15c3RcIjtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIHRoaXMuZHggPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgdGhpcy5maXNoSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IDApIHtcbiAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL3JpZ2h0LW15c3QtZmlzaC5wbmdcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbGVmdC1teXN0LWZpc2gucG5nXCI7XG4gICAgfVxuICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpICogMTAwMDA7XG4gIH1cbiAgbW92ZUZpc2goKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLmR4O1xuICAgICAgaWYgKHRoaXMueCArIDk1ID49IDk1MCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL2xlZnQtbXlzdC1maXNoLnBuZ1wiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnggPSB0aGlzLnggLSB0aGlzLmR4O1xuICAgICAgaWYgKHRoaXMueCA8PSAxMCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL3JpZ2h0LW15c3QtZmlzaC5wbmdcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb24ocm9kKSB7XG4gICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgIGNvbnN0IGZpc2hUb3RhbExlbmd0aCA9IHRoaXMueCArIHRoaXMud2lkdGg7XG4gICAgY29uc3QgZmlzaFRvdGFsSGVpZ2h0ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG4gICAgaWYgKFxuICAgICAgcm9kLnggPj0gdGhpcy54ICYmXG4gICAgICByb2QueCA8PSBmaXNoVG90YWxMZW5ndGggJiZcbiAgICAgIHJvZC55ID49IHRoaXMueSArIDEwICYmXG4gICAgICByb2QueSA8PSBmaXNoVG90YWxIZWlnaHRcbiAgICApIHtcbiAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjb2xsaXNpb25cbiAgfVxufVxuXG5cblxuY29uc3QgRmlzaEFycmF5ID0ge31cblxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgY29uc3Qgc3RhbmRhcmRGaXNoID0gbmV3IFN0YW5kYXJkRmlzaDtcbiAgICBGaXNoQXJyYXlbc3RhbmRhcmRGaXNoLmlkXSA9IHN0YW5kYXJkRmlzaFxufVxuXG4vLyBjb25zdCBteXN0RmlzaCA9IG5ldyBNeXN0RmlzaFxuLy8gRmlzaEFycmF5W215c3RGaXNoLmlkXSA9IG15c3RGaXNoXG4vLyBmaXJzdE1lZGl1bSA9IG5ldyBNZWRpdW1GaXNoXG4vLyBzZWNvbmRNZWRpdW0gPSBuZXcgTWVkaXVtRmlzaFxuLy8gRmlzaEFycmF5W2ZpcnN0TWVkaXVtLmlkXSA9IGZpcnN0TWVkaXVtO1xuLy8gRmlzaEFycmF5W3NlY29uZE1lZGl1bS5pZF0gPSBzZWNvbmRNZWRpdW07XG5cblxuXG5mdW5jdGlvbiBEcmF3RmlzaChjdHgsIHNwYWNlUHJlc3NlZCwgcm9kKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhGaXNoQXJyYXkpLmZvckVhY2goZmlzaCA9PiB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlzaC5maXNoSW1hZ2UsIGZpc2gueCwgZmlzaC55KVxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGZpc2gubW92ZUZpc2goKTtcbiAgICAgICAgaWYgKHNwYWNlUHJlc3NlZCkge1xuICAgICAgICAgICAgY29uc3QgY29sbGlkZWQgPSBmaXNoLmRldGVjdENvbGxpc2lvbih7eDogcm9kLngsIHk6IHJvZC55fSlcbiAgICAgICAgICAgIGlmIChjb2xsaWRlZCAmJiBmaXNoLnR5cGUgPT09IFwic3RhbmRhcmRcIiAmJiByb2Quc2NvcmUgPCA1MDApIHtcbiAgICAgICAgICAgICAgICByb2Quc2NvcmUgPSByb2Quc2NvcmUgKyBmaXNoLnNjb3JlXG4gICAgICAgICAgICAgICAgZGVsZXRlIEZpc2hBcnJheVtmaXNoLmlkXVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3Bhd24xID0gbmV3IFN0YW5kYXJkRmlzaFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3Bhd24yID0gbmV3IFN0YW5kYXJkRmlzaFxuICAgICAgICAgICAgICAgIEZpc2hBcnJheVtyZXNwYXduMS5pZF0gPSByZXNwYXduMVxuICAgICAgICAgICAgICAgIEZpc2hBcnJheVtyZXNwYXduMi5pZF0gPSByZXNwYXduMlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd0Zpc2g7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmNvbnN0IFJvZCA9IHJlcXVpcmUoXCIuL3JvZFwiKTtcbmltcG9ydCBEcmF3RmlzaCBmcm9tIFwiLi9maXNoXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItc2NvcmVcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgeCA9IDI1MDtcbiAgICBsZXQgeSA9IDMwMDtcbiAgICBjb25zdCByb2QgPSBuZXcgUm9kKHgsIHkpO1xuICAgIFxuICAgIGxldCBzcGFjZVByZXNzZWQgPSBmYWxzZVxuICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgIHNjb3JlLmlubmVyVGV4dCA9IGBTY29yZTogJHtyb2Quc2NvcmV9YFxuICAgICAgICByb2QuZHJhd1JvZChjdHgpIFxuICAgICAgICBEcmF3RmlzaChjdHgsIHNwYWNlUHJlc3NlZCwgcm9kKVxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgc3BhY2VQcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHJvZC54ID0gZS5zaGlmdEtleSA9PT0gdHJ1ZSA/IHJvZC54IC0gMTAgOiByb2QueCAtIDU7XG4gICAgICAgICAgICAgICAgaWYgKHJvZC54IDwgMTApIHJvZC54ID0gMTA7XG4gICAgICAgICAgICAgICAgcm9kLmRyYXdSb2QoY3R4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICByb2QueSA9IGUuc2hpZnRLZXkgPT09IHRydWUgPyByb2QueSAtIDEwIDogcm9kLnkgLSA1O1xuICAgICAgICAgICAgICAgIGlmIChyb2QueSA8IDI4NSkgcm9kLnkgPSAyODU7XG4gICAgICAgICAgICAgICAgcm9kLmRyYXdSb2QoY3R4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICByb2QueCA9IGUuc2hpZnRLZXkgPT09IHRydWUgPyByb2QueCArIDEwIDogcm9kLnggKyA1O1xuICAgICAgICAgICAgICAgIGlmIChyb2QueCA+IDk1MCkgcm9kLnggPSA5NTA7XG4gICAgICAgICAgICAgICAgcm9kLmRyYXdSb2QoY3R4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICByb2QueSA9IGUuc2hpZnRLZXkgPT09IHRydWUgPyByb2QueSArIDEwIDogcm9kLnkgKyA1O1xuICAgICAgICAgICAgICAgIGlmIChyb2QueSA+IDQ3MCkgcm9kLnkgPSA0NzA7XG4gICAgICAgICAgICAgICAgcm9kLmRyYXdSb2QoY3R4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQub25rZXl1cCA9IGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICBzcGFjZVByZXNzZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KVxuICAgIH1cbiAgICBkcmF3KClcblxuXG5cblxuXG59KSIsImNsYXNzIFJvZCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gMFxuICAgIH1cblxuICAgIGRyYXdSb2QoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMTAwMCwgNTAwKVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgMjUwKVxuICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgMjUwKVxuICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IFwiMlwiXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwieWVsbG93XCJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSb2Q7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==