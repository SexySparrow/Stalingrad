using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Textpeecran_2 : MonoBehaviour
{
    public bool display = false;
    public int y;
	public GameObject audio;
	public string sub1;
    // Use this for initialization
    void Start()
    {
		audio.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {

    }
    void OnTriggerEnter(Collider iCollide)
    {
        if (iCollide.transform.name == "FPSController")
            display = true;
    }
    void OnTriggerExit(Collider iCollide)
    {
        if (iCollide.transform.name == "FPSController")
            display = false;
    }
    void OnGUI()
    {
        if (display == true)
        {
			GUI.Box (new Rect (0, y, Screen.width, Screen.height), sub1);
			audio.SetActive(true);
        }
    }
}
