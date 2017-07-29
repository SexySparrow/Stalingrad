#pragma strict


// Reload la arma
var ReloadSound : AudioSource;
//var CrossObject : GameObject;
var MechanicsObject : GameObject;
var ClipCount : int;
var ReserveCount : int;
var ReloadAvailable : int;

function Update () {
	ClipCount = GlobalAmmo.LoadedAmmoR;
	ReserveCount = GlobalAmmo.CurrentAmmoR;

	if (ReserveCount == 0) {
		ReloadAvailable = 0;
	}
	else {
		ReloadAvailable = 10 - ClipCount;
	}

	if(Input.GetButtonDown("Reload")) {
		if (ReloadAvailable >= 1) {
			if (ReserveCount <= ReloadAvailable) {
				GlobalAmmo.LoadedAmmoR += ReserveCount;
				GlobalAmmo.CurrentAmmoR -= ReserveCount;
				ActionReload();
			}
			else {
				GlobalAmmo.LoadedAmmoR += ReloadAvailable;
				GlobalAmmo.CurrentAmmoR -= ReloadAvailable;
				ActionReload();
			}
		}
		EnableScripts();

	}
}

function EnableScripts () {
	yield WaitForSeconds (3);
	this.GetComponent(GewehrFire).enabled=true;
	//CrossObject.SetActive(true);
	MechanicsObject.SetActive(true);
}

function ActionReload () {
	this.GetComponent(GewehrFire).enabled=false;
	//CrossObject.SetActive(false);
	MechanicsObject.SetActive(false);
	ReloadSound.Play();
	GetComponent.<Animation>().Play("reload");
}