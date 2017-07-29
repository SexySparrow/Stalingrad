#pragma strict

function Start () {
	
}



var TheDistance : float = PlayerCasting.DistanceFromTarget;
var TextDisplay : GameObject;

var FakeGun : GameObject;
var Colt : GameObject;
var STG44 : GameObject;
var Gewehr : GameObject;
var AmmoDisplay : GameObject;
var PickUpAudio : AudioSource;

function Update () {
    TheDistance = PlayerCasting.DistanceFromTarget;
    
}

function OnMouseOver () {
    if (TheDistance <= 1 ) {
        TextDisplay.GetComponent.<Text>().text = "Take Sturmgewehr";
        if (Input.GetButtonDown("Interact")) {
            if (TheDistance <= 1 ) {
                TakeSTG();
            }
        }
    }
}

function OnMouseExit () {
    TextDisplay.GetComponent.<Text>().text = "";
}

function TakeSTG () {
    PickUpAudio.Play();
    transform.position = Vector3(0, -1000, 0);
    FakeGun.SetActive(false);
    Gewehr.SetActive(false);
    Colt.SetActive(false);
    STG44.SetActive(true);
    AmmoDisplay.SetActive(true);

}