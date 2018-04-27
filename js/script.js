
calc.onclick = function calculateInsurance(hp, age, country){
	var name = document.getElementById('name').value;
	var age = Number(document.getElementById('age').value);
	var country = document.getElementById('country').value;
	var hp = Number(document.getElementById('hp').value);
	var insurance = 0;

		if(country == "Austria" || country == "austria"){
			insurance = hp * 100 / age + 50;
		} else if(country == "Germany" || country == "germany"){
			insurance = hp * 120 / age + 100;
		} else if(country == "Italy" || country == "italy"){
			insurance = hp * 150 / (age+2) + 150;
		} else {
			alert('Please input either Austria, Germany or Italy to run the program.');
		}

	document.getElementById('print').innerHTML = "Welcome " + name +
						 " the calculated insurance in " + country + 
						 " is " + parseFloat(insurance).toFixed(2) + 
						 " €";
}
