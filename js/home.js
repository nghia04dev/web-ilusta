function next_slide(n){
    let next_slide = document.getElementById("trailer_slide");
    if(n==1){
        next_slide.src = "/image/sale2.jpg";
    }else if(n==2){
        next_slide.src = "/image/bigsale.jpg";
    }else if(n==3){
        next_slide.src = "/image/friday.jpg";
    }
    else if(n==4){
        next_slide.src = "/image/sale5.jpg";
    }
}
let next_number = 1;
setInterval(function(){
    next_number++;
    if(next_number>4){
        next_number=1;
    }
    next_slide(next_number);
},3000);