#pragma strict



var ReloadSound : AudioSource;
//var CrossObject : GameObject;
var MechanicsObject : GameObject;
var ClipCount : int;
var ReserveCount : int;
var ReloadAvailable : int;

function Update () {
    ClipCount = GlobalAmmo.LoadedAmmoP;
    ReserveCount = GlobalAmmo.CurrentAmmoP;

    if (ReserveCount == 0) {
        ReloadAvailable = 0;
    }
    else {
        ReloadAvailable = 7 - ClipCount;
    }

    if(Input.GetButtonDown("Reload")) {
        if (ReloadAvailable >= 1) {
            if (ReserveCount <= ReloadAvailable) {
                GlobalAmmo.LoadedAmmoP += ReserveCount;
                GlobalAmmo.CurrentAmmoP -= ReserveCount;
                ActionReload();
            }
            else {
                GlobalAmmo.LoadedAmmoP += ReloadAvailable;
                GlobalAmmo.CurrentAmmoP -= ReloadAvailable;
                ActionReload();
            }
        }
        EnableScripts();

    }
}

function EnableScripts () {
    yield WaitForSeconds (1);
    this.GetComponent(PistolGunFire).enabled=true;
    //CrossObject.SetActive(true);
    MechanicsObject.SetActive(true);
}

function ActionReload () {
    this.GetComponent(PistolGunFire).enabled=false;
    //CrossObject.SetActive(false);
    MechanicsObject.SetActive(false);
    ReloadSound.Play();
    GetComponent.<Animation>().Play("reload");
}