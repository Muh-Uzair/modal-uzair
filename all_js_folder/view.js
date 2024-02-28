"use strict" ;


import {div_all_buttons , button_cross , div_overlay , modal_message } from "./config.js"


export function add_event_listener_function_buttons(recieved_control_show_modal)
{

    div_all_buttons.addEventListener( "click" , 
    function(event_info_object)
    {
        const btn = event_info_object.target.closest(".button_show_modal") ;
        if(!btn) return ;

        recieved_control_show_modal(btn) ;
    })


}
export function add_event_listener_function_cross_button(recieved_control_close_modal)
{
    button_cross.addEventListener( "click" , 
    function(event_info_object)
    {
        recieved_control_close_modal() ;
    })

}
export function add_event_listener_function_esc_button(recieved_control_close_modal)
{
    
    document.addEventListener("keydown" , 
    function(event_info_object)
    {
        // console.log(event_info_object)

        event_info_object.key === `Escape` ? recieved_control_close_modal() : 0;
    })
}

export function add_event_listener_function_window(recieved_control_close_modal)
{
    
    
    div_overlay.addEventListener(`click` ,
    function(event_info_object)
    {
        // console.log(`hello`)
        recieved_control_close_modal();
        // modal_message.classList.add("hidden") ;
        // div_overlay.classList.add("hidden") ;
    })
}

