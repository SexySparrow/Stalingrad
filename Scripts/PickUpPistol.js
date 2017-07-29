#pragma strict
//vezi PickUpGewehr
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
        TextDisplay.GetComponent.<Text>().text = "Take Colt Pistol";
        if (Input.GetButtonDown("Interact"))
        TakePistol();
    }
}

function OnMouseExit () {
    TextDisplay.GetComponent.<Text>().text = "";
}

function TakePistol () {
    PickUpAudio.Play();
    transform.position = Vector3(0, -1000, 0);
    FakeGun.SetActive(false);
     STG44.SetActive(false);
      Gewehr.SetActive(false);
    Colt.SetActive(true);
    AmmoDisplay.SetActive(true);

}
