#pragma strict
// adauga munitie de Gewehr(Rifle)
var AmmoSound : AudioSource;
function OnTriggerEnter (col : Collider) {
    AmmoSound.Play();
    if (GlobalAmmo.LoadedAmmoR == 0) {
        GlobalAmmo.LoadedAmmoR += 10;
        GlobalAmmo.CurrentAmmoR += 5;
        this.gameObject.SetActive(false);
    }
    else {
        GlobalAmmo.CurrentAmmoR += 15;
        this.gameObject.SetActive(false);
    }
}


