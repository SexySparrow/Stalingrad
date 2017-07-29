#pragma strict



function Start () {
	
}

var Muzz : GameObject;

function Update () {
    if(GlobalAmmo.LoadedAmmoP>=1)
    if(Input.GetButtonDown("FireGun")) {
        var gunsound : AudioSource = GetComponent.<AudioSource>();
        gunsound.Play();
        Muzz.SetActive(true);
        MuzzOf();
        GetComponent.<Animation>().Play("fire");
        GlobalAmmo.LoadedAmmoP -=1;
    }
      //if(Input.GetButtonDown("Run"))
        //GetComponent.<Animation>().Play("draw");
}
function MuzzOf() {
	yield WaitForSeconds(0.1);
	Muzz.SetActive(false);
}
