// 네브바 클릭시 화면 이동

const menu = document.querySelector('.menu');

menu.addEventListener('click',(event)=>{
 const link = event.target.dataset.link;
 const linkPosition = document.querySelector(link);
 if(link == null){
    return;
}  
else{        
    linkPosition.scrollIntoView({behavior: "smooth"});
} 

});