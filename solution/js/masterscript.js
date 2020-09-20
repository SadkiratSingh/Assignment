// implementing video popups //
var image_holder=document.querySelectorAll('.image-holder');

var play_buttons=[];
for(var i=0;i<image_holder.length;i++){
    play_buttons.splice(i,0,image_holder[i].children[1])
}

var play_list={};
var video_section=document.querySelector('.video');
var video_content=video_section.children;
for(var i=0;i<video_content.length;i++){
    var video_heading=(video_content[i].children)[1];
    var video_url=video_heading.children[1].textContent;
    play_list[play_buttons[i].id]=video_url;
}

var video_frame=document.querySelector('.play-video');
var video_frame_win=document.querySelector('.play-video').contentWindow;

var track_of_video=-1;

var pop=document.querySelector('.popup-wrapper');

play_buttons.forEach(function(e){
    e.addEventListener('click',function(){
        video_frame.src=play_list[e.id];
        pop.style.display='block';
        track_of_video=parseInt(e.id);                                                       
    });
});

var cancel=document.querySelector('.cross');
cancel.addEventListener('click',function(){
    pop.style.display='none';
    video_frame_win.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
    track_of_video=-1;
});

var toggle=document.querySelector('.toggle-videos');
var prev=toggle.children[0];
var next=toggle.children[1];

var number=play_buttons.length;
next.addEventListener('click',function(){
    track_of_video=(track_of_video+1)%number;
    video_frame.src=play_list[track_of_video];
    pop.style.display='block';
});

prev.addEventListener('click',function(){
    if(track_of_video>0){
        track_of_video=track_of_video-1;
    }
    else{
        track_of_video=number-1;
    }
    video_frame.src=play_list[track_of_video];
    pop.style.display='block';
});
