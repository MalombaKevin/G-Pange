function tarehe() {
	let dateToday = new Date();
	// console.log(dateToday);
	let hourNow = dateToday.getHours();
	// console.log(hourNow);
	let todayDate = dateToday.getDate()
	let monthToday = dateToday.getMonth()
	let yearToday = dateToday.getFullYear()

	if(monthToday==0){
		document.querySelector('.year').innerHTML = `Today:  ${todayDate} January ${yearToday}`
	}

	else if(monthToday ==1){
		document.querySelector('.year').innerHTML = "February"
	}


	else if(monthToday ==2){
		document.querySelector('.year').innerHTML = "March"
	}
 console.log(hourNow)

	// console.log(yearToday)


	// let timing = document.querySelector('.ogo');

	if (hourNow === 0  || hourNow < 12) {			

		document.querySelector('.greeting').innerHTML = 'Good Morning';
		document.querySelector('.greet').innerHTML='&#127749;'

	} else if (hourNow >= 12 || hourNow < 17) {
		document.querySelector('.greeting').innerHTML = 'Good Afternoon';
		document.querySelector('.greet').innerHTML='☀️'

	} else if (hourNow >= 17 || hourNow < 21) {
		document.querySelector('.greeting').innerHTML = 'Good Evening';
		document.querySelector('.greet').innerHTML='&#127769;'
		
	} else 
	{
		document.querySelector('.greeting').innerHTML = 'Good Night';
		document.querySelector('.greet').innerHTML='&#127773;'
	}
}
