var image_holder=document.querySelector('.image-holder');
var play_button=image_holder.children[1];
var myModal=new Modal({
    el:document.getElementById('my-modal')
});
play_button.addEventListener('click',function(){
    myModal.show();
});