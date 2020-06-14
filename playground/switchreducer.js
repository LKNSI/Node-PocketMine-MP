// Testing replacement of most switches in PMMP.

let str = "v"
	function getGamemodeFromStringIF(string){

		var returnvalue = -1

		if(string == "survival" || string == "s"){
			returnvalue = 0
		}
		if(string == "creative" || string == "c"){
			returnvalue = 1;
		}
		if(string == "adventure" || string == "a"){
			returnvalue = 2;
		}
		if(string == "spectator" || string == "v" || string == "view"){
			returnvalue = 3;
		}

		return returnvalue

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
