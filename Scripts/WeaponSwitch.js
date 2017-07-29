#pragma strict
// schimbat intre arme 
var Colt : GameObject;
var STG44 : GameObject;
var Gewehr : GameObject;
var ColtPu : GameObject;
var STG44Pu : GameObject;
var GewehrPu : GameObject;

function Start () {
	
}

function Update () {

	if(Input.GetKeyDown("1") && !ColtPu.activeSelf)
	{
		STG44.SetActive(false);
		Gewehr.SetActive(false);
		Colt.SetActive(true);
	}
	if(Input.GetKeyDown("2") && !STG44Pu.active)
	{
		STG44.SetActive(true);
		Gewehr.SetActive(false);
		Colt.SetActive(false);
	}
	if(Input.GetKeyDown("3") && !GewehrPu.active)
	{
		STG44.SetActive(false);
		Gewehr.SetActive(true);
		Colt.SetActive(false);
	}
	
}
