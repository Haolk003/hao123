var close=document.querySelector('.close');
var next=document.querySelector('.next');
var prev=document.querySelector('.prev');
var gallery=document.querySelectorAll('.gallery .img img');
var gallery_img=document.querySelector('.gallery_img');
var images=document.querySelector('.image img');
var currentIndex=0;
gallery.forEach((img, index) =>{
img.addEventListener('click',function(){
    currentIndex=index;
    show_gallery();
})
})
function show_gallery(){
    gallery_img.classList.add('show');  
   
    images.src=gallery[currentIndex].src;
  
    currentIndex==0 ? prev.classList.add('hide') : prev.classList.remove('hide');
    currentIndex==gallery.length-1 ? next.classList.add('hide') : next.classList.remove('hide');
  
}
  close.addEventListener('click',function(){
        gallery_img.classList.remove('show');
    })
    prev.addEventListener('click',function(){
        if(currentIndex!=0){
        currentIndex-=1;
        show_gallery();
        }
    })
    next.addEventListener('click',function(){
        if(currentIndex!=gallery.length-1){
            currentIndex+=1;
            show_gallery();
        }
    })
    document.addEventListener('keydown',function(e){
       if(e.code=="Escape"){
           gallery_img.classList.remove('show');
       }
    })