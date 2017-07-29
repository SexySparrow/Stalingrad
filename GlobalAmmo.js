#pragma strict

// sistemul centralizat de munitie 
import UnityEngine.UI;

static var CurrentAmmoP : int;
static var CurrentAmmoS : int;
static var CurrentAmmoR : int;
static var LoadedAmmoR : int;
var InternalAmmo : int;
var AmmoDisplay : GameObject;
static var LoadedAmmoP : int;
static var LoadedAmmoS : int;
var InternalLoaded : int;
var LoadedDisplay : GameObject;
var Pistol : GameObject;
var STG44 : GameObject;
var Gewehr : GameObject;

function Update () {
	if(Pistol.active)
	{
    InternalAmmo = CurrentAmmoP;
    InternalLoaded = LoadedAmmoP;
    AmmoDisplay.GetComponent.<Text>().text = "" + InternalAmmo;
    LoadedDisplay.GetComponent.<Text>().text = "" + InternalLoaded;
    }
    else
    	if(STG44.active)
    	{
    	InternalAmmo = CurrentAmmoS;
    	InternalLoaded = LoadedAmmoS;
    	AmmoDisplay.GetComponent.<Text>().text = "" + InternalAmmo;
    	LoadedDisplay.GetComponent.<Text>().text = "" + InternalLoaded;
    	}
    	else
    	{
    	if(Gewehr.active)
    	{
    	InternalAmmo = CurrentAmmoR;
    	InternalLoaded = LoadedAmmoR;
    	AmmoDisplay.GetComponent.<Text>().text = "" + InternalAmmo;
    	LoadedDisplay.GetComponent.<Text>().text = "" + InternalLoaded;
    	}
    	}
}
