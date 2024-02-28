"use strict" ;



// console.log("hello")

import * as View from "./view.js" 
import * as Model from "./model.js" 
import {modal_message , div_overlay , modal_number ,} from "./config.js"


div_overlay.classList.remove("show") ;
modal_message.classList.remove("show") ;

let flag = false ;



function control_show_modal(btn)
{
    // console.log("clicked")
    // console.log(btn.innerHTML , btn.innerHTML.slice(-1));

    modal_number.textContent = btn.innerHTML , btn.innerHTML.slice(-1) ;
    modal_message.classList.remove("hidden") ;
    div_overlay.classList.remove("hidden") ;
    div_overlay.classList.add("show") ;
    modal_message.classList.add("show") ;
    flag = true ;

    View.add_event_listener_function_window(control_close_modal)
    // console.log(div_overlay)
    // console.log(modal_message)
}


function control_close_modal()
{
    
    // console.log(`cross_button_clicked`) ;
    modal_message.classList.add("hidden") ;
    div_overlay.classList.add("hidden") ;

}


function inti()
{
    View.add_event_listener_function_buttons(control_show_modal) ;
    View.add_event_listener_function_cross_button(control_close_modal) ;
    View.add_event_listener_function_esc_button(control_close_modal) ;
    // View.add_event_listener_function_window(control_close_modal)

}
inti() ;


