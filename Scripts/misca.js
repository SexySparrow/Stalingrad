﻿var smooth = 2.0;
var DoorOpenAngle = 90.0;
private var open : boolean;
private var enter : boolean;

private var defaultRot : Vector3;
private var openRot : Vector3;

// *singing* deschide usa crestine 

function Start(){
    defaultRot = transform.eulerAngles;
    openRot = new Vector3 (defaultRot.x,  defaultRot.y - DoorOpenAngle, defaultRot.z);
}


function Update (){
    if(open){
        transform.eulerAngles = Vector3.Slerp(transform.eulerAngles, openRot, Time.deltaTime * smooth);
    }else{
        transform.eulerAngles = Vector3.Slerp(transform.eulerAngles, defaultRot, Time.deltaTime * smooth);
    }

    if(Input.GetKeyDown("e") && enter){
        open = !open;
    }
}

function OnGUI(){
    if(enter){
        GUI.Label(new Rect(Screen.width/2 - 75, Screen.height - 100, 250, 40), "Apasă pe ”E” ca să deschizi ușa");
    }
}

function OnTriggerEnter (other : Collider){
    if (other.gameObject.tag == "Player") {
        enter = true;
    }
}

    function OnTriggerExit (other : Collider){
        if (other.gameObject.tag == "Player") {
            enter = false;
        }
    }