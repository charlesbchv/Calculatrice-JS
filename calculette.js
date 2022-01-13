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
                        "\n5. Carré d'un nombre");

}while(question=="" || question==null || isNaN(question)==true);
 

function addition(){
    let nb1=prompt("Premier nombre : ");
    let nb2=prompt("Deuxieme nombre : ");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    alert("La réponse est : " + (nb1+nb2));


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

 switch (question){
        case "1" :
            addition();
            break;
        case "2" :
            soustraction();
            break;
        case "3":
            division();
            break;
        case "4" :
            multiplication();
            break;

        case "5" :
            carre();
            break;

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

switch (question){
    case "1" :
        addition();
        break;
    case "2" :
        soustraction();
        break;
    case "3":
        division();
        break;
    case "4" :
        multiplication();
        break;

    case "5" :
        carre();
        break;

}




    }
    else{
        alert("A bientôt!");

    }
}


   

