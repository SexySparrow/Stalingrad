#pragma strict
// foc automat pentru STG44
function Start () {
	
}


var TheSMG : GameObject;
var SMGSound : AudioSource;
var MuzzleFlash : GameObject;
var AmmoCount : int;
var Firing : int;
var animator : Animator;

//var CrossHair : GameObject;

function Update () {
    AmmoCount = GlobalAmmo.LoadedAmmoS;

    if (Input.GetButton("FireGun")) {
        if (AmmoCount >= 1) {
            if (Firing == 0) {
                SMGFire();
            }
        }
    }
}

function SMGFire() {
    Firing = 1;
    //CrossHair.GetComponent(Animator).enabled=true;
    GlobalAmmo.LoadedAmmoS -= 1;
    SMGSound.Play();
    animator = TheSMG.GetComponent.<Animator>();
    MuzzleFlash.SetActive(true);
    animator.SetBool("tras",true);
    yield WaitForSeconds(0.2);
    animator.SetBool("tras",false);
    MuzzleFlash.SetActive(false);
    //CrossHair.GetComponent(Animator).enabled=false;
    Firing = 0;
}