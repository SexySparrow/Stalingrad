#pragma strict
// adauga munitie de STG44
var AmmoSound : AudioSource;
function OnTriggerEnter (col : Collider) {
    AmmoSound.Play();
    if (GlobalAmmo.LoadedAmmoS == 0) {
        GlobalAmmo.LoadedAmmoS += 30;
        GlobalAmmo.CurrentAmmoS += 5;
        this.gameObject.SetActive(false);
    }
    else {
        GlobalAmmo.CurrentAmmoS += 35;
        this.gameObject.SetActive(false);
    }
}


