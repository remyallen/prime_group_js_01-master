var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];



var mockingbird = function(employee){
	var bonusInfo = [];
	bonusInfo.push(employee[0]);
	var bonus = 0;

	switch(employee[3]){
		case 0: 
		case 1:
		case 2:
			bonus = 0;
			break;
		case 3:
			bonus = .04;
			break;
		case 4:
			bonus = .06;
			break;
		case 5:
			bonus = .1;
			break;
		}
	if (employee[1].length == 4 ){
		bonus += .05;
	}

	if (employee[2] > 65000){
		bonus -= .01;
	}

	if (bonus > .13){
		bonus = .13;
	}

	bonusInfo.push(bonus);

	bonusInfo.push(parseInt(employee[2] * (1+ bonus)));

	bonusInfo.push(parseInt(employee[2] * bonus));

	return bonusInfo;

}

for ( var i=0; i < employees.length; i++){
	console.log(mockingbird(employees[i]));
}
