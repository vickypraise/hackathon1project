document.getElementById("containermeaning").style.display="none"
async function check(){
    var inp = document.getElementById("input").value;
   
    if(inp.length > 0){   
        try{
        
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inp}`;
            const resp = await axios.get(url);
            const data = resp.data[0];
            console.log(resp);
            
            
            document.getElementById("containermeaning").style.display="block";

            document.getElementById("word").innerHTML=data.word;
            document.getElementById("definition").innerHTML=data.meanings[0].definitions[0].definition;
            document.getElementById("audio").scr=data.phonetics[0].audio;
            document.getElementById("error").innerHTML="";
        }catch(error){
            document.getElementById("error").innerHTML=error;
        }
    }else{
        document.getElementById("error").innerHTML="please enter a word";
    } 
}



document.getElementById("artsubject").style.display="none"
document.getElementById("socialscience").style.display="none"
document.getElementById("sciencesubject").style.display="none"
function showorhide(){
    var department=document.getElementById("coursewaec").value;
    if(department=="science"){
        document.getElementById("sciencesubject").style.display="block"
        document.getElementById("socialscience").style.display="none"
        document.getElementById("artsubject").style.display="none"
    }else if(department=="art"){
        document.getElementById("artsubject").style.display="block"
        document.getElementById("sciencesubject").style.display="none"
        document.getElementById("socialscience").style.display="none"
    }else if(department=="socialscience"){
        document.getElementById("artsubject").style.display="none"
        document.getElementById("sciencesubject").style.display="none"
        document.getElementById("socialscience").style.display="block"
    }else{
        document.getElementById("artsubject").style.display="none"
        document.getElementById("sciencesubject").style.display="none"
        document.getElementById("socialscience").style.display="none"

    }
}





