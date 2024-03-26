let position={
  ver:1,
  hor:2,
}
let changingposition={
  posl:'left',
  posr:'right',
  post:'top',
  posb:'bottom'

}
let isposchanged=false
let shooter1=false;
let move1=document.querySelector(`._1s2`).innerHTML='<div class="snack"><div>'
let gamebody=document.querySelector('.game-body')

    document.addEventListener('keydown',function moveRight(event) {
      if(event.key === 'ArrowRight') {
        if(position.ver<2&&position.hor==2){
          position.ver++
          snickCon()
          setSnike()
        }
        shoote1()
    }});
    
  
    
    document.addEventListener('keydown',function moveleft(event) {
      if(event.key === 'ArrowLeft') {
        if(position.ver>1&&position.hor==2){
          position.ver--
        snickCon()
        setSnike()
        }
        shoote1()
    }});
    document.addEventListener('keydown',function moveUpLeft(event) {
      if(event.key === 'Enter'){
        if(position.ver==1&&position.hor==2){
        snickCon()
        setSnikeUp()
        setTimeout(() => {
          movedown()
        },600);
          position.ver++
        }
        
      }

      
    });
    
   
   
    
    function movedown() {
       
        if(position.hor<2){
          position.hor++
        }
        snickCon()
        setSnike()
  
        
        
    };
    
    
    document.addEventListener('keydown',function moveUp(event) { 
      if (event.key === 'ArrowUp') {
        if(position.hor>1){
          position.hor--
        }
        snickCon()
        setSnikeUpLeft()
        setTimeout(() => {
          movedown()
        },600);
        
    }});
  


function setSnike(){
  move1=document.querySelector(`._${position.ver}s${position.hor}`).innerHTML='<div class="snack"></div>'
  
}

function setSnikeUp(){
  move1=document.querySelector(`._${position.ver}s${position.hor}`).innerHTML='<div class="snackUp"></div>'
  
}
function setSnikeUpLeft(){
  move1=document.querySelector(`._${position.ver}s${position.hor}`).innerHTML='<div class="snackUpLeft"></div>'
  
}
function snickCon(){
  if(position.ver>1){
    move1=document.querySelector(`._${position.ver-1}s${position.hor}`).innerHTML='<div class=""><div>'
    
  }
  if(position.hor>1){
    move1=document.querySelector(`._${position.ver}s${position.hor-1}`).innerHTML='<div class=""><div>'
  }
  if(position.ver<2){
    move1=document.querySelector(`._${position.ver+1}s${position.hor}`).innerHTML='<div class=""><div>'
    
  }
  if(position.hor<2){
    move1=document.querySelector(`._${position.ver}s${position.hor+1}`).innerHTML='<div class=""><div>'

  }
}
function shoote1(){
      setTimeout(() => {
          if(move1===document.querySelector(`._1s2`)||move1===document.querySelector(`._2s2`)){
            console.log('shooted')
          }
      }, 500);
}
