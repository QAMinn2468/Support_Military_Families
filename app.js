// Declare Variables //
const supportButton = document.querySelector('button');
const background = document.querySelector('body');
//const now = new Date();                                                         //works
//const supportCounter = document.querySelector('.supportCounter');               //works
//let supporters = 0                                                              //works


/* ----------------------------------------------------------------------------

                        Button.onclick => something happens

------------------------------------------------------------------------------*/
supportButton.addEventListener('click', function(){
  supportButton.style.backgroundColor = "red";                                            //works
  supportButton.style.color = "navy";
  supportButton.innerHTML = "Thank you for your support!"
  background.style.backgroundColor = "lightyellow";
//  supporters = supporters + 1;
//  console.log(supporters);
//  supportCounter.prepend(supporters);
//  supportCounter.append(now);                                                    //works
});



// **  almost works, skip for now
// prepend # of supporters

//                               supportCounter.prepend(supporters);
//                               supportCounter.append(now);
// append current Date time
//  # supporters   {{supportCounter}} now
// add 1 person Support +1 increment
