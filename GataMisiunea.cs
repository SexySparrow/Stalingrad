using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// titlul este destul de explicit
public class GataMisiunea : MonoBehaviour {

    public int num;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
    void OnTriggerEnter(Collider iCollide)
    {
        if (iCollide.transform.name == "Player")
        {
            LoadingScreenManager.LoadScene(num);
        }
    }
}
