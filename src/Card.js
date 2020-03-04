import React, { useState } from 'react';

const kingCard = "https://jaggedsmile.files.wordpress.com/2008/06/kingofspades-card1.jpg?w=584"
const queenCard = "https://playingcardstop1000.com/wp-content/uploads/2018/10/Queen-of-hearts-card-from-Magyar-Kiralyok-Romi-deck.jpg"
const backCard = "https://i.pinimg.com/originals/11/45/96/11459640e599fd105943f5a379d25248.jpg"

//const cards = {zero: kingCard, first: queenCard, second: queenCard }
function CardImage(props){
	let carra = kingCard
	if(props.carra === "reina"){
		carra = queenCard
	}
	return (
		<img height="200px" src={carra} />
		)
}
export default CardImage;

