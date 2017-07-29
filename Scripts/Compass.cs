using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Compass : MonoBehaviour {
    public Vector3 NordDirection;
    public Transform Player;
    public RectTransform NordLayer;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        SchimbaNord();

	}
    public void SchimbaNord()
    {
        NordDirection.z = Player.eulerAngles.y;
        NordLayer.localEulerAngles = NordDirection;
    }
}
