using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Switch : MonoBehaviour {

    public Canvas Intrebari;
    public Canvas Starty;
	public void Press ()
    {
        Starty.enabled = false;
        Intrebari.enabled = true; 
	}
	
}
