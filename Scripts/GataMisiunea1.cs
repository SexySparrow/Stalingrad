using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GataMisiunea1 : MonoBehaviour {

    public int num;
	public string nume;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
    void OnTriggerEnter(Collider iCollide)
    {
		if (iCollide.transform.name == nume)
        {
            LoadingScreenManager.LoadScene(num);
        }
    }
}
