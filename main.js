const MenuContainer = document.querySelector(".main-container");
const ClientContainer = document.querySelector('.client-container');
const prodContainer = document.querySelector('.prod-container');
const editionContainer = document.querySelector('.edition-container');

const btn = document.createElement('button');
const ProdBtn = document.createElement("button");

let current = 1;

const Mmenu = document.querySelector(".First-Menu");
const Menuclient = document.querySelector(".Second-Menu");
const Menuproduit = document.querySelector(".Third-Menu");
const Edition = document.querySelector(".Fourth-Menu");

//Client datat :
const codeClient = [], NomClien = [], TelClient = [], DateEnreg = [];
let comp = 1, produitClient = "";

//Prod data :
const codeProduit = [], NomP = [], Typeprod = [], TypeTask = [], DateP = [], x = [];
let Ncomp = 1;


//Functions :
function load() {
    verify();

    ClientContainer.style.display = 'none';
    prodContainer.style.display = 'none';
    editionContainer.style.display = 'none';

    //Creation de client-----------------------------------------------------------

    const Nom = document.createElement('input');
    const Tel = document.createElement('input');
    const Date = document.createElement('input');
    const ClientDiv = document.createElement('div');
    const buttonClientDiv = document.createElement('div');
   
    Nom.placeholder = "Nom de client";
    Tel.placeholder = "Num de Téléphone";
    Date.placeholder = "Date d'enregistrement";
    btn.innerText = "submit";
    btn.classList = "lool";
    ClientDiv.classList = "ClientDiv";
    buttonClientDiv.classList = "buttdiv";

    buttonClientDiv.appendChild(btn);
    ClientDiv.appendChild(Nom);
    ClientDiv.appendChild(Tel);
    ClientDiv.appendChild(Date);
    
    ClientContainer.appendChild(ClientDiv);
    ClientContainer.appendChild(buttonClientDiv);

    //creation de Poduit-----------------------------------------------------------
    const ProdDiv =document.createElement('div');
    const buttonProdtDiv = document.createElement('div');
    prodContainer.appendChild(ProdDiv);
    buttonProdtDiv.classList = "buttdiv";
    ProdDiv.classList = "ProdDiv";

    //nom :
    const NomProd = document.createElement('input');
    NomProd.placeholder = "Nom de produit";
    const NomProdDiv = document.createElement("div");
    NomProdDiv.appendChild(NomProd);
    ProdDiv.appendChild(NomProdDiv);

    //Type de produit :
    const Type = ["PC Portable", "PC Bureau", "Imprimant", "Camera"];
    const listDrop = document.createElement('select');
    const TypeText =document.createElement("label");
    const TypeProdDiv = document.createElement("div");

    TypeText.innerText = "Choisir le Type de Produit : ";

    TypeProdDiv.appendChild(TypeText);
    TypeProdDiv.appendChild(listDrop);
    ProdDiv.appendChild(TypeProdDiv);
    for (let i = 0; i < Type.length ; i++) {
        const option = document.createElement("option");
        option.innerText = Type[i];
        listDrop.appendChild(option);
    }

    //Client :
    const clientProduit = document.createElement('select');
    const labelclient = document.createElement('label');
    const clientproduitdiv = document.createElement('div');
    clientproduitdiv.appendChild(labelclient);
    clientproduitdiv.appendChild(clientProduit);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

    labelclient.innerText = "Choisi le client : ";

    clientproduitdiv.appendChild(clientProduit);
    ProdDiv.appendChild(clientproduitdiv);

    addEventListener('click', (e) => {
        const target = e.target;
        if ( target === Menuproduit) { 
            var length = clientProduit.options.length;
            for (i = length-1; i >= 0; i--) {
                clientProduit.options[i] = null;
            } 
            for (let newcomp = 1; newcomp < comp; newcomp++) {
                const opt = document.createElement('option');
                opt.innerText = NomClien[newcomp];
                clientProduit.appendChild(opt);
            }    
        }
    })
        
    //Type de Traitement :
    const Type1 = ["Diagnostique", "Formatage", "Change", "test4", "test5"];
    const TypeTrait = document.createElement("select");
    const TypeText1 =document.createElement("label");
    const TraitProdDiv = document.createElement("div");

    TraitProdDiv.classList = "traitdiv";

    TypeText1.innerText = "Choisir le Type de Traitement : ";

    TraitProdDiv.appendChild(TypeText1);
    TraitProdDiv.appendChild(TypeTrait);
    ProdDiv.appendChild(TraitProdDiv)
    for (let x = 0; x < Type1.length; x++) {
        const option1 = document.createElement("option");
        option1.innerText = Type1[x];
        TypeTrait.appendChild(option1);
    }

    //Date :
    const DateProd = document.createElement("input");
    DateProd.placeholder = "Date d'enregitrement";
    ProdDiv.appendChild(DateProd);

    //button :
    ProdBtn.innerText = "submit";
    ProdBtn.classList = "lool";
    buttonProdtDiv.appendChild(ProdBtn);
    prodContainer.appendChild(buttonProdtDiv);

    addEventListener('click', (e) => {
        const target = e.target;
        if (target === btn) {
            codeClient[comp] = comp;
            NomClien[comp] = Nom.value;
            TelClient[comp] = Tel.value;
            DateEnreg[comp] = Date.value;
            console.log("Nom : " + NomClien[comp]);
            console.log("Tel : " + TelClient[comp]);
            console.log("Date : " + DateEnreg[comp]);

            Nom.value = "";
            Tel.value = "";
            Date.value = "";
            comp = comp + 1;
        }
        if (target === ProdBtn) {
            codeProduit[comp] = Ncomp
            NomP[Ncomp] = NomProd.value;
            x[Ncomp] = clientProduit.value;
            Typeprod[Ncomp] = listDrop.value;
            TypeTask[Ncomp] = TypeTrait.value;
            console.log("Nom : " + NomP[Ncomp]);
            console.log("Type prod : " + Typeprod[Ncomp]);
            console.log(x[Ncomp]);
            console.log("type task : " + TypeTask[Ncomp]);
            console.log("Date : " + DateProd.value);
            Ncomp = Ncomp + 1;
        }
    })

    //Edition--------------------------------------------------------------------
    let check = 0;

    const recherche = document.createElement('input');
    const cherBtn = document.createElement('button');
    const cherBtnDiv = document.createElement('div');
    const infoClientRech = document.createElement('div');
    const infoList = document.createElement('ul');
    const codeList = document.createElement('li');
    const nomList = document.createElement('li');
    const telList = document.createElement('li');
    const dateList = document.createElement('li');
    const lol = document.createElement('li');

    cherBtn.innerText = "Valide";
    infoClientRech.innerText = "Les infos de client : ";
    recherche.placeholder = "Saisir le nom de client rechercher ";
    infoClientRech.classList = "RechInfo";
    cherBtn.classList = "lool";
    cherBtnDiv.classList = "buttdiv";

    addEventListener('click', (e) => {
        const target = e.target;
        if (target === cherBtn) {
            if (check < 1) {
                for( let i = 1; i < comp; i++) {
                    let result = NomClien[i].localeCompare(recherche.value);
                    if (result === 0) {
                        codeList.innerText = "code Client : " + codeClient[i];
                        nomList.innerText = "Nom de client : " + NomClien[i];
                        telList.innerText = "Téléphone de client : " + TelClient[i];
                        dateList.innerText = "Date d'enregistrement : " + DateEnreg[i];
        
                        for(let y = 1 ; y < Ncomp ; y ++) {
                            let result1 = NomClien[i].localeCompare(x[y]);
                            if (result1 === 0) {
                                produitClient = produitClient + " " + NomP[y]
                            }  
                        }
                            
                        lol.innerText = "Les produits de client : " + produitClient;
        
                        infoList.appendChild(codeList);
                        infoList.appendChild(nomList);
                        infoList.appendChild(lol);
                        infoList.appendChild(telList);
                        infoList.appendChild(dateList);
                        infoClientRech.appendChild(infoList);
                        editionContainer.appendChild(recherche);
                        editionContainer.appendChild(infoClientRech);
                        editionContainer.appendChild(cherBtnDiv);
                            
                        check ++;
                    }
                }
            } else {
                produitClient = "";
                codeList.remove();
                nomList.remove();
                lol.remove();
                telList.remove();
                dateList.remove();
                for( let i = 1; i < comp; i++) {
                    let result = NomClien[i].localeCompare(recherche.value);
                    if (result === 0) {
                        codeList.innerText = "code Client : " + codeClient[i];
                        nomList.innerText = "Nom de client : " + NomClien[i];
                        telList.innerText = "Téléphone de client : " + TelClient[i];
                        dateList.innerText = "Date d'enregistrement : " + DateEnreg[i];
        
                        for(let y = 1 ; y < Ncomp ; y ++) {
                            let result1 = NomClien[i].localeCompare(x[y]);
                            if (result1 === 0) {
                                produitClient = produitClient + " " + NomP[y]
                            }  
                        }
                            
                        lol.innerText = "Les produits de client : " + produitClient;
        
                        infoList.appendChild(codeList);
                        infoList.appendChild(nomList);
                        infoList.appendChild(lol);
                        infoList.appendChild(telList);
                        infoList.appendChild(dateList);
                        infoClientRech.appendChild(infoList);
                        editionContainer.appendChild(recherche);
                        editionContainer.appendChild(infoClientRech);
                        editionContainer.appendChild(cherBtnDiv);
                            
                        check ++;
                    }
                }
            }
        }
    })
    
    cherBtnDiv.appendChild(cherBtn);
    editionContainer.appendChild(recherche);
    editionContainer.appendChild(cherBtnDiv);
    
}

function verify() {
    if (current == 1) {
        MenuContainer.style.display = 'block'
        ClientContainer.style.display = 'none';
        prodContainer.style.display = 'none';
        editionContainer.style.display = 'none';
        Mmenu.classList = "active";
        Menuclient.classList = "";
        Menuproduit.classList = "";
        Edition.classList = "";
    } else if (current == 2) {
        ClientContainer.style.display = 'block';
        MenuContainer.style.display = 'none';
        prodContainer.style.display = 'none';
        editionContainer.style.display = 'none';
        Mmenu.classList = "";
        Menuclient.classList = "active";
        Menuproduit.classList = "";
        Edition.classList = "";
    } else if (current == 3) {
        prodContainer.style.display = 'block'
        MenuContainer.style.display = 'none';
        ClientContainer.style.display = 'none';
        editionContainer.style.display = 'none';
        Mmenu.classList = "";
        Menuclient.classList = "";
        Menuproduit.classList = "active";
        Edition.classList = "";
    } else if (current == 4) {
        editionContainer.style.display = 'block';
        MenuContainer.style.display = 'none';
        prodContainer.style.display = 'none';
        ClientContainer.style.display = 'none';
        Mmenu.classList = "";
        Menuclient.classList = "";
        Menuproduit.classList = "";
        Edition.classList = "active";
    }
}

//event Listeners :
addEventListener('click', (e) => {
    let target = e.target;
    if (target === Mmenu) {
        current = 1;
        verify();
    } else if (target === Menuclient) { 
        current = 2;
        verify();
    } else if (target === Menuproduit) { 
        current = 3;
        verify();       
    } else if (target === Edition) { 
        current = 4;
        verify();   
    }
})
load();