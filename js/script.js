// Copyright (c) 2022 Sirine Cherkaoui All rights reserved
//
// Created by: Sirine Cherkaoui
// Created on: March 2022
// This file contains the JS functions for index.html

//Calculations to find c
function calculateC() {
  var a = parseFloat(document.getElementById("a1").value);
  var b = parseFloat(document.getElementById("b1").value);
  var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("result1").value = c.toFixed(3);
}

//Calculations to find c
function calculateA() {
  var b = parseFloat(document.getElementById("b2").value);
  var c = parseFloat(document.getElementById("c2").value);
  var a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
  document.getElementById("result2").value = a.toFixed(3);
}
