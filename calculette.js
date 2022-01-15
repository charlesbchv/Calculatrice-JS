/*const name = person.name;
const age = person.age;
const id = person.id;

const{ name, age, id}=person;*/


do{
    var question = prompt("Vous voulez : "+
                        "\n1. Additionner"+
                        "\n2. Soustraire"+
                        "\n3. Diviser"+
                        "\n4. Multiplier"+
                        "\n5. Carré d'un nombre"+
			"\n6. Factoriel"+
    			"\n7. Cryptographie - Chiffrement de Cezar");

}while(question=="" || question==null || isNaN(question)==true);
 

function addition(){
    let nb1=prompt("Premier nombre : ");
    let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1+nb2));


}

function factoriel(){
	let nb1=prompt("Saisissez votre nombre :");
	let res=1;
	for (let i=0; i<nb1; i++){
		res*=i+1;
	}
	alert("Factoriel de "+nb1+" est : "+res);
}

function carre(){
    let nb1=prompt("Premier nombre : ");
    //let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    //nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1**2));


}

function soustraction(){
    let nb1=prompt("Premier nombre : ");
    let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1-nb2));


}

function division(){
    let nb1=prompt("Premier nombre : ");
    let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1/nb2));


}

function multiplication(){
    let nb1=prompt("Premier nombre : ");
    let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1*nb2));
}

var isAlpha = function(ch){
    if (ch >= "A" && ch <= "z"){
        return true
    }

}


function cezar(){

    let key = {'a':'n', 'b':'o', 'c':'p', 'd':'q', 'e':'r', 'f':'s', 'g':'t', 'h':'u', 
       'i':'v', 'j':'w', 'k':'x', 'l':'y', 'm':'z', 'n':'a', 'o':'b', 'p':'c', 
       'q':'d', 'r':'e', 's':'f', 't':'g', 'u':'h', 'v':'i', 'w':'j', 'x':'k',
       'y':'l', 'z':'m', 'A':'N', 'B':'O', 'C':'P', 'D':'Q', 'E':'R', 'F':'S', 
       'G':'T', 'H':'U', 'I':'V', 'J':'W', 'K':'X', 'L':'Y', 'M':'Z', 'N':'A', 
       'O':'B', 'P':'C', 'Q':'D', 'R':'E', 'S':'F', 'T':'G', 'U':'H', 'V':'I', 
       'W':'J', 'X':'K', 'Y':'L', 'Z':'M'};

    let resultat="";
    let texte=prompt("Chiffrement de César est une technique de cryptage dans laquelle chaque lettre du texte est remplacée par une autre lettre mais avec un décalage."+ 
    "\n"+"\nVeuillez saisir la phrase que vous voulez chiffrer OU déchiffrer :");
    let i = 0;
    while (i<texte.length){
        c=texte[i];
        if (isAlpha(c)){
            resultat+=key[c];
        }
        else{
            resultat+=c;
        }
        i++;
    }
    alert(resultat);

}

 switch (question){
        case "1" :
            addition();
	    confirmer();
            break;
        case "2" :
            soustraction();
	    confirmer();
            break;
        case "3":
            division();
	    confirmer();
            break;
        case "4" :
            multiplication();
	    confirmer();
            break;

        case "5" :
            carre();
	    confirmer();
            break;
	case "6" :
	    factoriel();
            confirmer();
	    break;
	case "7" :
	    cezar();
            confirmer();
	    break;
    }



//confirmation

function confirmer(){
    var doc;
    var resultat = confirm("Voulez-vous recommencer?")
    if (resultat==true){
        do{
            var question = prompt("Vous voulez : "+
                                "\n1. Additionner"+
                                "\n2. Soustraire"+
                                "\n3. Diviser"+
                                "\n4. Multiplier"+
                                "\n5. Carré d'un nombre");
        
        }while(question=="" || question==null || isNaN(question)==true);


function addition(){
    let nb1=prompt("Premier nombre : ");
    let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1+nb2));


}
	    
	    
function factoriel(){
	let nb1=prompt("Saisissez votre nombre :");
	let res=1;
	for (let i=0; i<nb1; i++){
		res*=i+1;
	}
	alert("Factoriel de "+nb1+" est : "+res);
}

function carre(){
    let nb1=prompt("Premier nombre : ");
    //let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    //nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1**2));


}

function soustraction(){
    let nb1=prompt("Premier nombre : ");
    let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1-nb2));


}

function division(){
    let nb1=prompt("Premier nombre : ");
    let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1/nb2));


}

function multiplication(){
    let nb1=prompt("Premier nombre : ");
    let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1*nb2));
}
	  
var isAlpha = function(ch){
    if (ch >= "A" && ch <= "z"){
        return true
    }

}


function cezar(){

    let key = {'a':'n', 'b':'o', 'c':'p', 'd':'q', 'e':'r', 'f':'s', 'g':'t', 'h':'u', 
       'i':'v', 'j':'w', 'k':'x', 'l':'y', 'm':'z', 'n':'a', 'o':'b', 'p':'c', 
       'q':'d', 'r':'e', 's':'f', 't':'g', 'u':'h', 'v':'i', 'w':'j', 'x':'k',
       'y':'l', 'z':'m', 'A':'N', 'B':'O', 'C':'P', 'D':'Q', 'E':'R', 'F':'S', 
       'G':'T', 'H':'U', 'I':'V', 'J':'W', 'K':'X', 'L':'Y', 'M':'Z', 'N':'A', 
       'O':'B', 'P':'C', 'Q':'D', 'R':'E', 'S':'F', 'T':'G', 'U':'H', 'V':'I', 
       'W':'J', 'X':'K', 'Y':'L', 'Z':'M'};

    let resultat="";
    let texte=prompt("Veuillez saisir la phrase que vous voulez chiffrer OU déchiffrer :");
    let i = 0;
    while (i<texte.length){
        c=texte[i];
        if (isAlpha(c)){
            resultat+=key[c];
        }
        else{
            resultat+=c;
        }
        i++;
    }
    alert(resultat);

}

switch (question){
        case "1" :
            addition();
	    confirmer();
            break;
        case "2" :
            soustraction();
	    confirmer();
            break;
        case "3":
            division();
	    confirmer();
            break;
        case "4" :
            multiplication();
	    confirmer();
            break;

        case "5" :
            carre();
	    confirmer();
            break;
		
	case "6" :
	    factoriel();
            confirmer();
	    break;
		
	case "7" :
	    cezar();
            confirmer();
	    break;

}


    }
    else{
        alert("A bientôt!");

    }
}


   

