using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// porneste "cutscene-ul" final dupa ce ai completat obiectivele 
public class Textpeecran_3 : MonoBehaviour
{
    public bool display = false;
    public int y;
	public GameObject audio;
	public GameObject Acasa;
	public string sub1;
	public bool display_2 = false;
	public bool Gata;
	public List<GameObject> enemy = new List<GameObject>();
	Animation anim;
	int frame;
    // Use this for initialization
    void Start()
    {
		audio.SetActive(false);
    }

    // Update is called once per frame
	void Update()
	{
		frame++;
		if (frame == 15) {
			frame = 0;
			Update15f ();
		}
			
	}

    void Update15f()
    {
		Gata = true;
		for (int i = 0; i < enemy.Count; i++) {
			if (enemy [i] != null) {
				Gata = false;
			}
		}
		if (Gata == true)
			display_2 = Gata;
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
		//subtitrari si schimbat scena
		if (display == true && display_2 == true)
        {
			GUI.Box (new Rect (0, y, Screen.width, Screen.height), sub1);
			audio.SetActive(true);
			this.GetComponent<Animation>().Play();
			Acasa.SetActive (true);
        }
    }
}
