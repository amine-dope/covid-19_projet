
const questioneList =[
  {
  "Q" : "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?"
  "label" :["label","label"] 
  
},
{
  "Q" : "Quelle est votre température corporelle ?"

},
{
  "Q" : "bbbjbjbjbkbkbjbb"
},
{
  "Q" : "jnjnnnnjnnnn"
},
{
  "Q" : "nnnnjnjjbjbjbjkbk"
} 
]






const préambule = document.getElementById('préambule');
const para = document.getElementById('para');
const testBtn = document.getElementById('tst');
const progretion = document.getElementById('prog-bar');
const count = document.getElementById("count");
const question = document.getElementById('question');
const stepper = document.getElementById('stepper-UL');
const list = document.getElementsByClassName("list__item");
const previousBtn = document.getElementById('previous');
const btncontainer = document.getElementById('tstAria') ;
const nextBtn = document.getElementById('next');
const reponse = document.getElementById('rps');
var conter = -1;

  

testBtn.addEventListener('click',nextStep);
 









function qestion() {
  
  qst.textContent = '';
  var text = document.createElement('h2');
  text.textContent = questioneList[conter].Q;
  qst.appendChild(text);
}
function stepr(){

  qst.style.display='block';
    list[0].classList.remove('list__item--active');
    list[1].classList.add('list__item--active');
    qestion(conter) 

}




function catalog(){

  reponse.textContent = '';
  var lab = document.createElement('label');
  lab.innerHTML = 'oui';
  lab.setAttribute('id','label1');
  reponse.appendChild(lab);

  var label1 = document.getElementById('label1') ;
  var input = document.createElement('input');
  input.setAttribute('type','radio');
  input.setAttribute('name','A')
  label1.appendChild(input);

  var lab1 = document.createElement('label');
  lab1.innerHTML = 'non';
  lab1.setAttribute('id','label2');
  reponse.appendChild(lab1);
  var label2 = document.getElementById('label2')
  var input1 = document.createElement('input');
  input1.setAttribute('type','radio');
  input1.setAttribute('name','A')
  label2.appendChild(input1);

}
function tstBtn(){
  testBtn.textContent = 'suivant';
  btncontainer.style.justifyContent = 'space-evenly';
  btncontainer.style.flexDirection = 'row-reverse'; 
  previousBtn.style.display ='block';
  if(conter <= 0){
    previousBtn.style.visibility = 'hidden';
  }else{
    previousBtn.style.visibility = 'visible';
  }
    
}
fuction repon(){
  if (conter) >= 0 & conter <= 10{

    reponse.innerHTML = '';
    for(let i = 0; i < questioneList[conter])
  }



}


previousBtn.addEventListener('click',lastQuestion);
function lastQuestion(){
  conter--
  qestion() 
  tstBtn()

}

function nextStep(){
  conter++
  qestion();
  stepr();
  catalog();
  tstBtn();
}

// function next(){
// // qestion2();

// }

// function qestion3() {

//   qst2.textContent = '';
  
   
//   var text2 = document.createElement('h2');
//   text2.textContent = 'amine et ayoub ';
  
// qst3.textContent = '';
// qst3.appendChild(text2);
// }
// function next(){


// function nextBtn(){
//   var button = document.createElement('button');
// button.innerHTML = "suivant";
// button.className ="button"; 
// rps.appendChild(button);

// }



//   questionnaire[0]
//     .classList
//     .remove('step active')
//   questionnaire[1]
//   .classList
//   .add('step active')
//   testBtn.style.display ='none'
//   préambule.style.display = 'none'
//   questionnaire.style.display = 'block'
// }

// function qestion4() {

//   qst3.textContent = '';
//   var text3 = document.createElement('h2');
//   text3.textContent = 'so2l tali ';
//   qst3.appendChild(text3);
// }




// function qestion3() {
//   qst3.textContent = '';
//   var text2 = document.createElement('h2');
//   text2.textContent = 'amine bravo 3lik yalah hhhhhhg,hf,fgdvxxvxvxvvvwwbbb';
//   qst3.appendChild(text2);
// }


// function sq1(){
//   dd.textContent = '';
//   var nas = document.createElement('p');
//   nas.textContent = 'tkharbi9a gdjdffd hgfgdgbvd ffhdhdh,sjsfffq vgfderster';
//   dd.appendChild(nas);
// }







// function rps() {

//   var reponce = document.createElement("type","radio");
//   reponse.appendChild(reponce);

// }


 








//  const questione = [{
//         text : 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		
//         input:{
//             type:
//             nember:
//         }
    
        
//  }
	     
// ]



// ,var psy = document.createElement('p'),

// psytext  = document.createTextnod('amine is goood man ');

// psy.appendChild(psytext);


// document.body.appendChild(psy);

// questione.addEventListener('Click',nextStep)
// function nextStep(){

// }












// const list = document.querySelectorAll(".list__item")


// tst.addEventListener('click', nextStep);

 
// function nextStep(){
//     préambule.style.display='none';
//     questionnaire.style.display='block';
//     list[0].classList.remove('list__item--active');
//     list[1].classList.add('list__item--active');
//     showQuestion (cont)
//     bar(cont)
   
// }