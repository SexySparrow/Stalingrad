#pragma strict

function Start () {
	
}
// se ocupa de impuscatul vizual
var Muzz : GameObject;

function Update () {
    if(GlobalAmmo.LoadedAmmoR>=1)
    if(Input.GetButtonDown("FireGun")) {
        var gunsound : AudioSource = GetComponent.<AudioSource>();
        gunsound.Play();
        Muzz.SetActive(true);
        MuzzOf();
        GetComponent.<Animation>().Play("fire");

        GlobalAmmo.LoadedAmmoR -=1;
    }
      //if(Input.GetButtonDown("Run"))
        //GetComponent.<Animation>().Play("draw");
}
function MuzzOf() {
	yield WaitForSeconds(0.1);
	Muzz.SetActive(false);
}
