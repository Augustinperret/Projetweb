window.onload = launch;


function supprimer(x)
{
    //supprime une ligne du tablea
     var tableau = document.getElementById(x);
            for(var i = tableau.rows.length-1 ; i > 0; i--)
            {
                tableau.deleteRow(i);
            }
            return (true);
}





function launch()
{
	 var tabresult = document.getElementById("result");
	 var row = tabresult.insertRow(0);
	 var cell0 = row.insertCell(0);
	 var row01 = tabresult.insertRow(1);
	 var cell01 = row01.insertCell(0);
	 var celleffet = row01.insertCell(0);
	 var row02 = tabresult.insertRow(2);
	 var cell02 = row02.insertCell(0);
	 supprimer('result');

	 var tabimg = document.getElementById("imgs");
	 var rowEffet = tabimg.insertRow(0);
	 var cell = rowEffet.insertCell(0);
     var cell1 = rowEffet.insertCell(1);
     var cell2 = rowEffet.insertCell(2);
     supprimer('imgs');

     var tabtypes = document.getElementById("Tabtypes");
     var row2 = tabtypes.insertRow(0);
     var titre = row2.insertCell(0);
     supprimer('Tabtypes');

     var tabstats = document.getElementById("stats");
     var row3 = tabstats.insertRow(0);
     var att = row3.insertCell(0);
     var row6 = tabstats.insertRow(1);
     var def = row6.insertCell(0);
     var row7 = tabstats.insertRow(2);
     var vit = row7.insertCell(0);
     var row8 = tabstats.insertRow(3);
     var attspe = row8.insertCell(0);
     var row9 = tabstats.insertRow(4);
     var defspe = row9.insertCell(0);
     var row10 = tabstats.insertRow(0);
     var reset = row10.insertCell(0);
     supprimer('stats');

     var tabeffet = document.getElementById("effet");
     var row4 = tabeffet.insertRow(0);
     var effectpkm = row4.insertCell(0);
     supprimer('effet');

	 var x = document.getElementById('pkmnS').value;
	 if (document.getElementById('pkmnS').value === '')
	 	 {
	 	 	x = Math.floor(Math.random()*220);
	 	 }
	 console.log(x);
     
     fetch('https://pokeapi.co/api/v2/pokemon/'+x)
                .then(response => response.json())
                .then(function (donnee)
                      {


                var imgapi = donnee['sprites']["front_default"];
                var imgapishiny = donnee['sprites']["front_shiny"];
                console.log(imgapi);
                tabimg = document.getElementById("imgs");
    			var img = document.createElement('img');
   			    img.src = imgapi;
                cell1.appendChild(img);
                cell1.className = "imgpkmn";
                var imgS = document.createElement('img');
                imgS.src = imgapishiny;
                cell2.appendChild(imgS);
                 cell2.className = "imgpkmn";
                var effetctN = donnee["abilities"][0]["ability"]["name"];
                var effetctN2 = donnee["abilities"][1]["ability"]["name"];
                var effetct1 = donnee["abilities"][0]["ability"]["url"];
                var effetct2 = donnee["abilities"][1]["ability"]["url"];
                fetch(effetct1)
                .then(response => response.json())
                .then(function (donnee)
                {
                	var celleffet =  row4.insertCell(0);
                	celleffet.textContent =  effetctN +" : "+ donnee["effect_entries"][1]["short_effect"];+"\n\n\n"
                	celleffet.className = "texte";
                })
                fetch(effetct2)
                .then(response => response.json())
                .then(function (donnee)
                {
                	var row5 = tabeffet.insertRow(1)
                	var celleffet2 =  row5.insertCell(0);
                	celleffet2.textContent =  effetctN2 +" : "+ donnee["effect_entries"][1]["short_effect"];
                	celleffet2.className = "texte";
                	cell01.textContent =  tabeffet;
                })


                var attaque = donnee["stats"][1]["base_stat"];
                var defense = donnee["stats"][2]["base_stat"];
                var vitesse = donnee["stats"][5]["base_stat"];
                var attaque_spe = donnee["stats"][3]["base_stat"];
                var defense_spe = donnee["stats"][4]["base_stat"];
                row3 = tabstats.insertRow(0);
      			att = row3.insertCell(0);
      			row6 = tabstats.insertRow(1);
      			def = row6.insertCell(0);
      			row7 = tabstats.insertRow(2);
      			vit = row7.insertCell(0);
      			row8 = tabstats.insertRow(3);
      			attspe = row8.insertCell(0);
      			row9 = tabstats.insertRow(4);
     			defspe = row9.insertCell(0);
                att.textContent = "attaque "+attaque+"  ";
                att.className ="stats";

             	var btnAtt = document.createElement("BUTTON");
				btnAtt.innerHTML = "+";
				att.appendChild(btnAtt);
				btnAtt.id = 'btnat';
				btnAtt.classList.add("btnstats");

				def.textContent ="defense "+defense;
                def.className ="stats";
                var btndef = document.createElement("BUTTON");
				btndef.innerHTML = "+";
				def.appendChild(btndef);
				btndef.id = "btndef";
				btndef.classList.add("btnstats");

                vit.textContent = "vitesse "+vitesse;
                vit.className ="stats";
                var btnvit = document.createElement("BUTTON");
				btnvit.innerHTML = "+";
				vit.appendChild(btnvit);
				btnvit.id = 'btnvit';
				btnvit.classList.add("btnstats");

                attspe.textContent ="attaque spe "+ attaque_spe;
                attspe.className ="stats";
                var btnatts = document.createElement("BUTTON");
				btnatts.innerHTML = "+";
				attspe.appendChild(btnatts);
				btnatts.id = "btnatts";
				btnatts.classList.add("btnstats");

                defspe.textContent ="defense spe "+ defense_spe;
                defspe.className ="stats";
                var btndefs = document.createElement("BUTTON");
				btndefs.innerHTML = "+";
				defspe.appendChild(btndefs);
				btndefs.id = "btndefs";
				btndefs.classList.add("btnstats");


               	createtabtypes(donnee,cell02);
               	cell01.textContent = tabimg;

               	var name = donnee["species"]["name"];


               	var tabInd = donnee["game_indices"][0]["game_index"];
               	cell0.textContent = name + " (indice = "+ tabInd +" )";
     			cell0.className = "nom";

     			var stats = 15;

     			var attM = attaque;
     			var defM = defense;
     			var vitM = vitesse;
     			var defspeM = defense_spe;
     			var attspeM = attaque_spe

     			var btnreset = document.createElement("BUTTON");
				btnreset.innerHTML = "reset";
				reset.appendChild(btnreset);
				btnreset.id = "btnreset";
				btnreset.classList.add("btnstats");

     			document.getElementById('btnat').onclick = function()
				{
					stats--;
					if (stats <= 0)
					{
						alert1();
					}
					else
					{
						attM++;
						console.log(attM);
						att.textContent ="attaque "+ attM;
						att.appendChild(btnAtt);
					}
					

				};

				document.getElementById('btndef').onclick = function()
				{
					stats--;
					if (stats <= 0)
					{
						alert1();
					}
					else
					{
						defM++;
						console.log(defM);
						def.textContent ="defense "+ defM;
						def.appendChild(btndef);
					}
					

				};
				document.getElementById('btnvit').onclick = function()
				{
					stats--;
					if (stats <= 0)
					{
						alert1();
					}
					else
					{
					vitM++;
					console.log(vitM);
					vit.textContent ="vitesse "+ vitM;
					vit.appendChild(btnvit);
					}
				};
				document.getElementById('btndefs').onclick = function()
				{
					stats--;
					if (stats <= 0)
					{
						alert1();
					}
					else
					{
					defspeM++;
					console.log(defM);
					defspe.textContent ="defense spe "+ defspeM;
					defspe.appendChild(btndefs);
					}
				};
				document.getElementById('btnatts').onclick = function()
				{
					stats--;
					if (stats <= 0)
					{
						alert1();
					}
					else
					{
					attspeM++;
					console.log(attspeM);
					attspe.textContent ="attaque spe "+ attspeM;
					attspe.appendChild(btnatts);
					}
				};

				document.getElementById('btnreset').onclick = function()
				{
					attM = attaque;
     			 	defM = defense;
     				vitM = vitesse;
     			 	defspeM = defense_spe;
     				attspeM = attaque_spe;
					attspe.textContent ="attaque spe "+attaque_spe;
					attspe.appendChild(btnatts);
					defspe.textContent = "defense spe "+ defense_spe;
					defspe.appendChild(btndefs);
					vit.textContent ="vitesse "+vitesse;
					vit.appendChild(btnvit);
					att.textContent ="attaque "+attaque;
					att.appendChild(btnAtt);
					def.textContent="defense "+defense;
					def.appendChild(btndef);

					stats = 15;
				}



                
                });
}



function createtabtypes(donnee,cellule)
        {


        	var types = document.getElementById("Tabtypes");
        	var row = types.insertRow(0);
        	var titre = row.insertCell(0);
        	titre.textContent ="Types : "+" "+" "+" "+" ";
        	for (var i =  0 ; i <= donnee["types"].length-1; i++)
        	 {
        	 	console.log(i);
        		var type = donnee["types"][i]["type"]["name"];
        		console.log(type);
        		var row = types.insertRow(i+1);
        		var h = row.insertCell(0);
        		h.textContent = type;
        		h.className="type";

        	}
        	cellule.textContent = types;
        	cellule.className ="tabtypes";
        }


function alert1() 
{
	alert("vous avez deja depensé vous 15 points");
}