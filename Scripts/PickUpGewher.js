#pragma strict
// te lasa sa echipezi arma 
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
        TextDisplay.GetComponent.<Text>().text = "Take Gewehr";
        if (Input.GetButtonDown("Interact")) {
            if (TheDistance <= 1 ) {
                TakeGewehr();
            }
        }
    }
}

function OnMouseExit () {
    TextDisplay.GetComponent.<Text>().text = "";
}

function TakeGewehr () {
    PickUpAudio.Play();
    transform.position = Vector3(0, -1000, 0);
    FakeGun.SetActive(false);
    STG44.SetActive(false);
    Colt.SetActive(false);
    Gewehr.SetActive(true);
    AmmoDisplay.SetActive(true);

}