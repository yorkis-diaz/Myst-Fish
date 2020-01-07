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


var Rod = __webpack_require__(/*! ./scripts/rod */ "./src/scripts/rod.js");

var DrawFish = __webpack_require__(/*! ./scripts/fish */ "./src/scripts/fish.js");

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
    DrawFish(ctx, spacePressed, rod);

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

/***/ "./src/scripts/fish.js":
/*!*****************************!*\
  !*** ./src/scripts/fish.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

    if (this.direction === 0) {
      this.fishImage.src = "/src/assets/images/right-fish.png";
    } else {
      this.fishImage.src = "/src/assets/images/left-fish.png";
    }

    this.id = Math.random() * 10000;
  }

  _createClass(StandardFish, [{
    key: "moveFish",
    value: function moveFish() {
      if (this.direction === 0) {
        this.x = this.x + this.dx;

        if (this.x >= 950) {
          this.direction = 1;
          this.fishImage.src = "/src/assets/images/left-fish.png";
        }
      } else {
        this.x = this.x - this.dx;

        if (this.x <= 10) {
          this.direction = 0;
          this.fishImage.src = "/src/assets/images/right-fish.png";
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

module.exports = DrawFish;

/***/ }),

/***/ "./src/scripts/rod.js":
/*!****************************!*\
  !*** ./src/scripts/rod.js ***!
  \****************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcm9kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIl0sIm5hbWVzIjpbIlJvZCIsInJlcXVpcmUiLCJEcmF3RmlzaCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwic2NvcmUiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsInkiLCJyb2QiLCJzcGFjZVByZXNzZWQiLCJkcmF3IiwiaW5uZXJUZXh0IiwiZHJhd1JvZCIsIm9ua2V5ZG93biIsImUiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJvbmtleXVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiU3RhbmRhcmRGaXNoIiwiTWF0aCIsInJhbmRvbSIsIndpZHRoIiwiaGVpZ2h0IiwidHlwZSIsImRpcmVjdGlvbiIsImZsb29yIiwiZHgiLCJmaXNoSW1hZ2UiLCJJbWFnZSIsInNyYyIsImlkIiwiY29sbGlzaW9uIiwiZmlzaFRvdGFsTGVuZ3RoIiwiZmlzaFRvdGFsSGVpZ2h0IiwiTWVkaXVtRmlzaCIsIk15c3RGaXNoIiwiRmlzaEFycmF5IiwiaSIsInN0YW5kYXJkRmlzaCIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJmaXNoIiwiYmVnaW5QYXRoIiwiZHJhd0ltYWdlIiwiY2xvc2VQYXRoIiwibW92ZUZpc2giLCJjb2xsaWRlZCIsImRldGVjdENvbGxpc2lvbiIsInJlc3Bhd24xIiwicmVzcGF3bjIiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xlYXJSZWN0IiwibW92ZVRvIiwibGluZVRvIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztR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QXhDLFNBQUcsQ0FBQ21ELE1BQUosQ0FBVyxDQUFYLEVBQWMsR0FBZDtBQUNBbkQsU0FBRyxDQUFDb0QsTUFBSixDQUFXLEtBQUtsRCxDQUFoQixFQUFtQixHQUFuQjtBQUNBRixTQUFHLENBQUNvRCxNQUFKLENBQVcsS0FBS2xELENBQWhCLEVBQW1CLEtBQUtDLENBQXhCO0FBQ0FILFNBQUcsQ0FBQ3FELFNBQUosR0FBZ0IsR0FBaEI7QUFDQXJELFNBQUcsQ0FBQ3NELFdBQUosR0FBa0IsUUFBbEI7QUFDQXRELFNBQUcsQ0FBQ3VELE1BQUo7QUFDQXZELFNBQUcsQ0FBQzBDLFNBQUo7QUFDSDs7Ozs7O0FBS0xNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpELEdBQWpCLEM7Ozs7Ozs7Ozs7O0FDdEJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5jb25zdCBSb2QgPSByZXF1aXJlKFwiLi9zY3JpcHRzL3JvZFwiKTtcbmNvbnN0IERyYXdGaXNoID0gcmVxdWlyZShcIi4vc2NyaXB0cy9maXNoXCIpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLXNjb3JlXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IHggPSAyNTA7XG4gICAgbGV0IHkgPSAzMDA7XG4gICAgY29uc3Qgcm9kID0gbmV3IFJvZCh4LCB5KTtcbiAgICBcbiAgICBsZXQgc3BhY2VQcmVzc2VkID0gZmFsc2VcbiAgICBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICBzY29yZS5pbm5lclRleHQgPSBgU2NvcmU6ICR7cm9kLnNjb3JlfWBcbiAgICAgICAgcm9kLmRyYXdSb2QoY3R4KSBcbiAgICAgICAgRHJhd0Zpc2goY3R4LCBzcGFjZVByZXNzZWQsIHJvZClcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIHNwYWNlUHJlc3NlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICByb2QueCA9IGUuc2hpZnRLZXkgPT09IHRydWUgPyByb2QueCAtIDEwIDogcm9kLnggLSA1O1xuICAgICAgICAgICAgICAgIGlmIChyb2QueCA8IDEwKSByb2QueCA9IDEwO1xuICAgICAgICAgICAgICAgIHJvZC5kcmF3Um9kKGN0eCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgcm9kLnkgPSBlLnNoaWZ0S2V5ID09PSB0cnVlID8gcm9kLnkgLSAxMCA6IHJvZC55IC0gNTtcbiAgICAgICAgICAgICAgICBpZiAocm9kLnkgPCAyODUpIHJvZC55ID0gMjg1O1xuICAgICAgICAgICAgICAgIHJvZC5kcmF3Um9kKGN0eCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgcm9kLnggPSBlLnNoaWZ0S2V5ID09PSB0cnVlID8gcm9kLnggKyAxMCA6IHJvZC54ICsgNTtcbiAgICAgICAgICAgICAgICBpZiAocm9kLnggPiA5NTApIHJvZC54ID0gOTUwO1xuICAgICAgICAgICAgICAgIHJvZC5kcmF3Um9kKGN0eCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgcm9kLnkgPSBlLnNoaWZ0S2V5ID09PSB0cnVlID8gcm9kLnkgKyAxMCA6IHJvZC55ICsgNTtcbiAgICAgICAgICAgICAgICBpZiAocm9kLnkgPiA0NzApIHJvZC55ID0gNDcwO1xuICAgICAgICAgICAgICAgIHJvZC5kcmF3Um9kKGN0eCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50Lm9ua2V5dXAgPSBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgc3BhY2VQcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdylcbiAgICB9XG4gICAgZHJhdygpXG5cblxuXG5cblxufSkiLCJjbGFzcyBTdGFuZGFyZEZpc2gge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy54ID0gMTAgKyBNYXRoLnJhbmRvbSgpICogOTQwO1xuICAgICAgICB0aGlzLnkgPSAzMzAgKyBNYXRoLnJhbmRvbSgpICogMTIwO1xuICAgICAgICB0aGlzLndpZHRoID0gMzBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyNVxuICAgICAgICB0aGlzLnNjb3JlID0gMjBcbiAgICAgICAgdGhpcy50eXBlID0gXCJzdGFuZGFyZFwiXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICAgICAgdGhpcy5keCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgdGhpcy5maXNoSW1hZ2UgPSBuZXcgSW1hZ2VcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yaWdodC1maXNoLnBuZ1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbGVmdC1maXNoLnBuZ1wiO1xuICAgICAgICB9XG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwMDtcbiAgICB9XG5cbiAgICBtb3ZlRmlzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLmR4XG4gICAgICAgICAgICBpZiAodGhpcy54ID49IDk1MCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMVxuICAgICAgICAgICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL2xlZnQtZmlzaC5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCAtIHRoaXMuZHhcbiAgICAgICAgICAgIGlmICh0aGlzLnggPD0gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yaWdodC1maXNoLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKHJvZCkge1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2VcbiAgICAgICAgY29uc3QgZmlzaFRvdGFsTGVuZ3RoID0gdGhpcy54ICsgdGhpcy53aWR0aFxuICAgICAgICBjb25zdCBmaXNoVG90YWxIZWlnaHQgPSB0aGlzLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICBpZiAocm9kLnggPj0gdGhpcy54ICYmXG4gICAgICAgICAgICByb2QueCA8PSBmaXNoVG90YWxMZW5ndGggJiZcbiAgICAgICAgICAgIHJvZC55ID49ICh0aGlzLnkgKyAxMCkgJiZcbiAgICAgICAgICAgIHJvZC55IDw9IGZpc2hUb3RhbEhlaWdodFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG59XG5cbmNsYXNzIE1lZGl1bUZpc2gge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSAxMCArIE1hdGgucmFuZG9tKCkgKiA5NDA7XG4gICAgdGhpcy55ID0gMzMwICsgTWF0aC5yYW5kb20oKSAqIDEyMDtcbiAgICB0aGlzLndpZHRoID0gODA7XG4gICAgdGhpcy5oZWlnaHQgPSAzOTtcbiAgICB0aGlzLnNjb3JlID0gMTAwO1xuICAgIHRoaXMudHlwZSA9IFwibWVkaXVtXCI7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICB0aGlzLmR4ID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIHRoaXMuZmlzaEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yaWdodC1tZWRpdW0tZmlzaC5wbmdcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbGVmdC1tZWRpdW0tZmlzaC5wbmdcIjtcbiAgICB9XG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwMDtcbiAgfVxuXG4gIG1vdmVGaXNoKCkge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5keDtcbiAgICAgIGlmICh0aGlzLnggKyA0MCA+PSA5NTApIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9sZWZ0LW1lZGl1bS1maXNoLnBuZ1wiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnggPSB0aGlzLnggLSB0aGlzLmR4O1xuICAgICAgaWYgKHRoaXMueCA8PSAxMCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuZmlzaEltYWdlLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL3JpZ2h0LW1lZGl1bS1maXNoLnBuZ1wiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRldGVjdENvbGxpc2lvbihyb2QpIHtcbiAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgY29uc3QgZmlzaFRvdGFsTGVuZ3RoID0gdGhpcy54ICsgdGhpcy53aWR0aDtcbiAgICBjb25zdCBmaXNoVG90YWxIZWlnaHQgPSB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbiAgICBpZiAoXG4gICAgICByb2QueCA+PSB0aGlzLnggJiZcbiAgICAgIHJvZC54IDw9IGZpc2hUb3RhbExlbmd0aCAmJlxuICAgICAgcm9kLnkgPj0gdGhpcy55ICsgMTAgJiZcbiAgICAgIHJvZC55IDw9IGZpc2hUb3RhbEhlaWdodFxuICAgICkge1xuICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgfVxufVxuXG5jbGFzcyBNeXN0RmlzaCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueCA9IDEwICsgTWF0aC5yYW5kb20oKSAqIDk0MDtcbiAgICB0aGlzLnkgPSAzMzAgKyBNYXRoLnJhbmRvbSgpICogMTIwO1xuICAgIHRoaXMud2lkdGggPSAxNTA7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLnNjb3JlID0gNTAwO1xuICAgIHRoaXMudHlwZSA9IFwibXlzdFwiO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgdGhpcy5keCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICB0aGlzLmZpc2hJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvcmlnaHQtbXlzdC1maXNoLnBuZ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpc2hJbWFnZS5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9sZWZ0LW15c3QtZmlzaC5wbmdcIjtcbiAgICB9XG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwMDtcbiAgfVxuICBtb3ZlRmlzaCgpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IDApIHtcbiAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuZHg7XG4gICAgICBpZiAodGhpcy54ICsgOTUgPj0gOTUwKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbGVmdC1teXN0LWZpc2gucG5nXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueCA9IHRoaXMueCAtIHRoaXMuZHg7XG4gICAgICBpZiAodGhpcy54IDw9IDEwKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5maXNoSW1hZ2Uuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvcmlnaHQtbXlzdC1maXNoLnBuZ1wiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRldGVjdENvbGxpc2lvbihyb2QpIHtcbiAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgY29uc3QgZmlzaFRvdGFsTGVuZ3RoID0gdGhpcy54ICsgdGhpcy53aWR0aDtcbiAgICBjb25zdCBmaXNoVG90YWxIZWlnaHQgPSB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbiAgICBpZiAoXG4gICAgICByb2QueCA+PSB0aGlzLnggJiZcbiAgICAgIHJvZC54IDw9IGZpc2hUb3RhbExlbmd0aCAmJlxuICAgICAgcm9kLnkgPj0gdGhpcy55ICsgMTAgJiZcbiAgICAgIHJvZC55IDw9IGZpc2hUb3RhbEhlaWdodFxuICAgICkge1xuICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbGxpc2lvblxuICB9XG59XG5cblxuXG5jb25zdCBGaXNoQXJyYXkgPSB7fVxuXG5mb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICBjb25zdCBzdGFuZGFyZEZpc2ggPSBuZXcgU3RhbmRhcmRGaXNoO1xuICAgIEZpc2hBcnJheVtzdGFuZGFyZEZpc2guaWRdID0gc3RhbmRhcmRGaXNoXG59XG5cbi8vIGNvbnN0IG15c3RGaXNoID0gbmV3IE15c3RGaXNoXG4vLyBGaXNoQXJyYXlbbXlzdEZpc2guaWRdID0gbXlzdEZpc2hcbi8vIGZpcnN0TWVkaXVtID0gbmV3IE1lZGl1bUZpc2hcbi8vIHNlY29uZE1lZGl1bSA9IG5ldyBNZWRpdW1GaXNoXG4vLyBGaXNoQXJyYXlbZmlyc3RNZWRpdW0uaWRdID0gZmlyc3RNZWRpdW07XG4vLyBGaXNoQXJyYXlbc2Vjb25kTWVkaXVtLmlkXSA9IHNlY29uZE1lZGl1bTtcblxuXG5cbmZ1bmN0aW9uIERyYXdGaXNoKGN0eCwgc3BhY2VQcmVzc2VkLCByb2QpIHtcbiAgICBPYmplY3QudmFsdWVzKEZpc2hBcnJheSkuZm9yRWFjaChmaXNoID0+IHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpc2guZmlzaEltYWdlLCBmaXNoLngsIGZpc2gueSlcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBmaXNoLm1vdmVGaXNoKCk7XG4gICAgICAgIGlmIChzcGFjZVByZXNzZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGVkID0gZmlzaC5kZXRlY3RDb2xsaXNpb24oe3g6IHJvZC54LCB5OiByb2QueX0pXG4gICAgICAgICAgICBpZiAoY29sbGlkZWQgJiYgZmlzaC50eXBlID09PSBcInN0YW5kYXJkXCIgJiYgcm9kLnNjb3JlIDwgNTAwKSB7XG4gICAgICAgICAgICAgICAgcm9kLnNjb3JlID0gcm9kLnNjb3JlICsgZmlzaC5zY29yZVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBGaXNoQXJyYXlbZmlzaC5pZF1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNwYXduMSA9IG5ldyBTdGFuZGFyZEZpc2hcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwYXduMiA9IG5ldyBTdGFuZGFyZEZpc2hcbiAgICAgICAgICAgICAgICBGaXNoQXJyYXlbcmVzcGF3bjEuaWRdID0gcmVzcGF3bjFcbiAgICAgICAgICAgICAgICBGaXNoQXJyYXlbcmVzcGF3bjIuaWRdID0gcmVzcGF3bjJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRHJhd0Zpc2g7IiwiY2xhc3MgUm9kIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgfVxuXG4gICAgZHJhd1JvZChjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA1MDApXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbygwLCAyNTApXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCAyNTApXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gXCIyXCJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ5ZWxsb3dcIlxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvZDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9