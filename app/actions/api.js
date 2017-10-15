import React, {Component} from 'react';

export function RequestTransaction(mobile,amount){
	const baseUrl = "52.187.64.222:3000/transaction/initiate?mobile="+mobile+"&amount="+amount;
	var reqObj = {};
	var responseObj = {"success":false};
	let url = "http://52.187.64.222:3000/transaction/initiate?mobile="+mobile+"&amount="+amount;
	return fetch(url)
		.then((resp) => resp.json())
		.then(function (data) {
			responseObj.success = true;
			console.log(data.token);
			return data;
		})
		.catch(function (error) {
			responseObj.success = false;
			console.log(error)
		})
}

export function NewTransaction(mobile){
	const baseUrl = "52.187.64.222:3000/transaction/fetch?mobile="+mobile;
	var reqObj = {};
	var responseObj = {"success":false};
	let url = 'http://52.187.64.222:3000/transaction/fetch?mobile='+mobile;
	return fetch(url)
		.then((resp) => resp.json())
		.then(function (data) {
			responseObj.success = true;
			console.log(data.token);
			return data;
		})
		.catch(function (error) {
			responseObj.success = false;
			console.log(error)
		})
}

export function ConfirmTransaction(token){
	const baseUrl = "52.187.64.222:3000/transaction/complete?token="+token;
	var reqObj = {};
	var responseObj = {"success":false};
	let url = 'http://52.187.64.222:3000/transaction/complete?token='+token;
	return fetch(url)
		.then((resp) => resp.json())
		.then(function (data) {
			responseObj.success = true;
			console.log(data.token);
			return data;
		})
		.catch(function (error) {
			responseObj.success = false;
			console.log(error)
		})
}

export function TransactionStatus(token){
	const baseUrl = "52.187.64.222:3000/transaction/status?token="+token;
	console.log('called');
	var reqObj = {};
	var responseObj = {"success":false};
	let url = 'http://52.187.64.222:3000/transaction/status?token='+token;
	return fetch(url)
		.then((resp) => resp.json())
		.then(function (data) {
			responseObj.success = true;
			console.log(data.token);
			return data;
		})
		.catch(function (error) {
			responseObj.success = false;
			console.log(error)
		})
}

export function GetPayURL(amount) {
	const baseUrl = "http://52.187.64.222:3000/transaction/generatePayURL?amount="+amount;
	console.log('called');
	var reqObj = {};
	var responseObj = {"success":false};
	let url = 'http://52.187.64.222:3000/transaction/generatePayURL?amount='+amount;
	return fetch(url)
		.then((resp) => resp.json())
		.then(function (data) {
			responseObj.success = true;
			console.log(data);
			
			return data;
		})
		.catch(function (error) {
			responseObj.success = false;
			console.log(error)
		})
}	
