var upper=document.querySelectorAll('.top div')
var under=document.querySelectorAll('.bottom div')


for(var uppe of upper){
        uppe.addEventListener('click',function(){
       var x=document.querySelector('.Active')
       console.log(x)
       x.classList.remove('Active')
       this.classList.add('Active')

       var index=this.getAttribute('data-index')
       var add=document.querySelector('add')

       for(var unde of under)
       if(unde.getAttribute('data-index')==index){
          unde.classList.remove('d-none')
          
          
       }
       else{
            unde.classList.add('d-none')
            unde.classList.add('add')
       }
       

   })
}





var imageList=[
    "photos/image1.jpg",
    "photos/image2.jpg",
    "photos/image3.jpg"
]

var indexCount=0
var image=document.querySelector('.photo')
image.src=imageList[0]


var left=document.querySelector('#L')
var right=document.querySelector('#R')

right.onclick=function(){
    indexCount++;
    if(indexCount>imageList.length-1){
        indexCount=0;
    }

    image.src=  imageList[indexCount];
}

left.onclick=function(){
    indexCount--;
    if(indexCount<0){
        indexCount=imageList.length-1
    }

    image.src=  imageList[indexCount];
}