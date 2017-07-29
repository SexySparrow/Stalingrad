#pragma strict
// adauga munitie de pistol
var AmmoSound : AudioSource;
function OnTriggerEnter (col : Collider) {
    AmmoSound.Play();
    if (GlobalAmmo.LoadedAmmoP == 0) {
        GlobalAmmo.LoadedAmmoP += 7;
        GlobalAmmo.CurrentAmmoP += 3;
        this.gameObject.SetActive(false);
    }
    else {
        GlobalAmmo.CurrentAmmoP += 10;
        this.gameObject.SetActive(false);
    }
}


