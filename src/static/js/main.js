(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// eslint-disable-next-line no-undef
var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMjZmMTZmZGEuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBNkI7QUFDekJILEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFBQ0QsSUFBQUEsT0FBTyxFQUFQQTtBQUFELEdBQTFCO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBb0JILE9BQXBCO0FBQ0g7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQkMsUUFBckIsRUFBOEI7QUFDMUJSLEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBQ0ksSUFBQUEsUUFBUSxFQUFSQTtBQUFELEdBQTNCO0FBQ0g7O0FBS0RSLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLGNBQVYsRUFBMEJDLGtCQUExQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG5jb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKXtcclxuICAgIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLCB7bWVzc2FnZX0pO1xyXG4gICAgY29uc29sZS5sb2coYFlvdTogJHttZXNzYWdlfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROaWNrbmFtZShuaWNrbmFtZSl7XHJcbiAgICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHtuaWNrbmFtZX0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZcIiwgaGFuZGxlTWVzc2FnZU5vdGlmKSJdfQ==
},{}]},{},[1])