// Testing replacement of most switches in PMMP.

let str = "c"
	function getGamemodeFromStringIF(string){
		
		var returnvalue = -1

		if(string == "survival" || string == "s"){
			returnvalue = 0
		}else
		if(string == "creative" || string == "c"){
			returnvalue = 1;
		}else
		if(string == "adventure" || string == "a"){
			returnvalue = 2;
		}else
		if(string == "spectator" || string == "v" || string == "view"){
			returnvalue = 3;
		}

		return returnvalue

	}

	function ggmfrarray(string){
		let array = ["survival","s","creative","c","adventure","a","spectator","v","view"]
		var k;
		for(var i = 0;i <= 8;i++){
			if(string == array[i]){
				return ((i <= 7) ? !(i % 2 == 1) ? (i / 2) : ((i - 1)/2) : 3);
			}
	
		}		
	}	

	function getGamemodeFromStringSW(string){
		var returnvalue;
		switch(string){
			case "survival":{returnvalue = 0;break;}
			case "s":{returnvalue = 0;break;}
	
			case "creative":{returnvalue = 1;break;}
			case "c":{returnvalue = 1;break;}

			case "adventure":{returnvalue = 2;break;} 
			case "a":{returnvalue = 2;break;}

                        case "spectator":{returnvalue = 3;break;} 
                        case "v":{returnvalue = 3;break;}
			case "view":{returnvalue = 3;break;}
			default:{returnvalue = -1;}	  
		}
		return returnvalue;
	
	}


console.time("IF")
let f = getGamemodeFromStringIF(str)
console.timeEnd("IF")

console.time("SWITCH")
let v = getGamemodeFromStringSW(str)
console.timeEnd("SWITCH")

console.time("ARRF")
let t = ggmfrarray(str)
console.timeEnd("ARRF")

console.log(t)
