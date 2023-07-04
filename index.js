const target = document.getElementById('nav')
const navBox=document.getElementsByClassName('boxq');
const icon=document.getElementsByClassName('icon');

document.addEventListener("scroll", (e) => {
  var scrolled = document.scrollingElement.scrollTop;

    if (scrolled >= 270 && window.innerWidth>768) {
      // console.log("Scree width ",window.innerWidth)
      // if(window.innerWidth<=800){
      //   target.style.display='none'
      // }else{
        // target.style.display='block'

        const styles = {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            margin: '0 0',
            transition:'position 4s',
            transition_timing_function:'linear',
            transition_duration:'4s'

        }
        // target.style.position='fixed';
        // target.style.top=0;
        // target.style.tp
        Object.assign(target.style, styles);
        for (let i=0;i<navBox.length;i++){
            navBox[i].style.height='100%';
            icon[i].style.display='none';
          
        }
        // }
    } else {
        // setScrollState("static");
        if(window.innerWidth>=768){
        const styles={
            position:'static',
            margin:'50px 20px',

        }
        Object.assign(target.style,styles)
        for (let i=0;i<navBox.length;i++){
            navBox[i].style.height='100px';
            icon[i].style.display='inline-block'
        }
    }
  }
});




// Code for text animation in practice section
var words = ['Welcome to the working section of Insertion Sort! Here, you can see how the elements actually change their positions. With a variety of colorful representations. So, get ready to flex your brain muscles and see how elements sorts!'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 40;
var wordflick = function() {
    console.log("hedkfd")
   const inte= setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          // if(i==len-1){
          //   clearInterval(inte);
          // }
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          console.log("Last text reached.")
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    // console.log(part),
    // console.log(document.getElementsByClassName('word')[0])

    document.getElementsByClassName('word')[0].textContent=part;
    // $('.word').text(part);
  },speed);
  document.getElementsByClassName('word')[0].textContent=words[words.length-1]
  console.log("I am out from interval.")
};


  document.addEventListener('onload',wordflick());



// if(scrolled>500)
// console.log(document.getElementById('practice').checkVisibility())
// $(document).ready(function () {
//   wordflick();
// });


// Quiz handle 
function quiz() 
{
  // Get the checkbox
  var checkBox = document.getElementsByClassName("check");
  console.log(checkBox)
  // Get the output text
  // var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  let flag=true;
  for(let i=0;i<checkBox.length;i++){
  if (checkBox[i].checked != true){
    flag=false;
  } 
}
if(flag){
  document.getElementById('sim').style.pointerEvents='auto'
  // style.display='inline-block'
}else{
  document.getElementById('sim').style.pointerEvents='none'
  // style.display='none' 
}
} 
document.addEventListener('onload',quiz());
