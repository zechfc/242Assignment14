const getcrafts = async() => {
    try{
        
        return (await fetch("http://localhost:3000/api/crafts")).json();
        
    } catch (error){
        console.log("error retrieving data");
        return "";
    }

};
let i =0;
const showcrafts = async() => {
    const craftsJSON = await getcrafts();
    const craftsDiv = document.getElementById("crafts-div")

    if(craftsJSON == ""){
        craftsDiv.innerHTML = "sorry no crafts";
        return;
    }

    //now loop through the json
let i=0;
   
    



    const column1 = document.createElement("div");
    const column2 = document.createElement("div");
    const column3 = document.createElement("div");
    const column4 = document.createElement("div");

    craftsDiv.classList.add("row");


    column1.classList.add("column");
    column2.classList.add("column");
    column3.classList.add("column");
    column4.classList.add("column");
    craftsDiv.append(column1);
    craftsDiv.append(column2);
    craftsDiv.append(column3);
    craftsDiv.append(column4);

    craftsJSON.forEach((craft)=>{
        console.log(i);
        

        if(i<7){
            i++;
        
            craftsDiv.append(column1);
            craftsDiv.classList.add("1")
        
        
            const img = document.createElement("img");
            img.src = craft.image;
            column1.append(img);
           
        }
    
        else if(i<13){
            i++;
        
            craftsDiv.append(column2);
            craftsDiv.classList.add("2")
        
        
            const img2 = document.createElement("img");
            img2.src = craft.image;
            column2.append(img2);
        
        }
        else if(i <19){
            i++;
        
            craftsDiv.append(column3);
            craftsDiv.classList.add("3")
        
        
            const img3 = document.createElement("img");
            img3.src = craft.image;
            column3.append(img3);
        
        }
        else{
            i++;
        
            craftsDiv.append(column4);
            craftsDiv.classList.add("4")
        
        
            const img4 = document.createElement("img");
            img4.src = craft.image;
            column4.append(img4);

        
        }


      

       
    
    })
   }


//    for(i;i<=12;i++){
// console.log(i);

// let j=0;

//     craftsJSON.forEach((craft)=>{

//         if(j<6){
//             j++;
//             console.log(j +"stop")
//             return;
//         }
//         console.log(j +"test")

//         const row = document.createElement("div");
//         const column = document.createElement("div");
    
//         craftsDiv.append(row);
//         row.append(column);
    
    
//         const img = document.createElement("img");
//         img.src = craft.image;
//         column.append(img);
//         j++

//         console.log(j + "go")
//         return;
        
    
//     })
//     if(i===12){
//         console.log(i);
//         break

//     }
//    }
   
 



showcrafts();