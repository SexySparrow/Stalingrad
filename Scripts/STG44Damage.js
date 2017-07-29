﻿#pragma strict

var DamageAmount : int = 25;
var TargetDistance : float;
var AllowedRange : float = 150;
var Firing : int;
var Effect1 : Transform;
var Effect2 : Transform;
var Effect3 : Transform;
var Effect4 : Transform;

function Update () {
    if(GlobalAmmo.LoadedAmmoS>=1)
    {
    if (Input.GetButton("FireGun")) {
            if (Firing == 0) {
                SMGDamage();
            }
    }
    }
}
function SMGDamage() {
    Firing = 1;
    var Shot : RaycastHit;
        if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), Shot)) {
            TargetDistance = Shot.distance;
            if (TargetDistance < AllowedRange) {
            if (Shot.collider.CompareTag("Metal"))
            {
                var particleClone1= Instantiate (Effect1, Shot.point,Quaternion.LookRotation(Shot.normal));
                Destroy(particleClone1.gameObject,2);
            }

            	if (Shot.collider.CompareTag("Noroi"))
            {
                var particleClone2= Instantiate (Effect2, Shot.point,Quaternion.LookRotation(Shot.normal));
                Destroy(particleClone2.gameObject,2);
            }
            	if (Shot.collider.CompareTag("Enemy"))
            {
                var particleClone3= Instantiate (Effect3, Shot.point,Quaternion.LookRotation(Shot.normal));
                Destroy(particleClone3.gameObject,2);
            }
            	if (Shot.collider.CompareTag("Lemn"))
            {
                var particleClone4= Instantiate (Effect4, Shot.point,Quaternion.LookRotation(Shot.normal));
                Destroy(particleClone4.gameObject,2);
            }
                Shot.transform.SendMessage("DeductPoints", DamageAmount);
            }
        }
    yield WaitForSeconds(0.2);
    Firing = 0;
}