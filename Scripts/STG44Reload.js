#pragma strict



var ReloadSound : AudioSource;
//var CrossObject : GameObject;
var MechanicsObject : GameObject;
var ClipCount : int;
var ReserveCount : int;
var ReloadAvailable : int;
var animator : Animator;

function Update () {
	ClipCount = GlobalAmmo.LoadedAmmoS;
	ReserveCount = GlobalAmmo.CurrentAmmoS;

	if (ReserveCount == 0) {
		ReloadAvailable = 0;
	}
	else {
		ReloadAvailable = 30 - ClipCount;
	}

	if(Input.GetButtonDown("Reload")) {
		if (ReloadAvailable >= 1) {
			if (ReserveCount <= ReloadAvailable) {
				GlobalAmmo.LoadedAmmoS += ReserveCount;
				GlobalAmmo.CurrentAmmoS -= ReserveCount;
				ActionReload();
			}
			else {
				GlobalAmmo.LoadedAmmoS += ReloadAvailable;
				GlobalAmmo.CurrentAmmoS -= ReloadAvailable;
				ActionReload();
			}
		}
		EnableScripts();

	}
}

function EnableScripts () {
	yield WaitForSeconds (2);
	animator.SetBool("reincarcat",false);
	this.GetComponent(SMGFire).enabled=true;
	//CrossObject.SetActive(true);
	MechanicsObject.SetActive(true);
}

function ActionReload () {
	this.GetComponent(SMGFire).enabled=false;
	//CrossObject.SetActive(false);
	MechanicsObject.SetActive(false);
	ReloadSound.Play();
	animator=this.GetComponent.<Animator>();
	animator.SetBool("reincarcat",true);
}