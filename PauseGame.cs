using UnityEngine;
using System.Collections;
using UnityStandardAssets.Characters.FirstPerson;

public class PauseGame : MonoBehaviour {
    public Transform canvas;
    public Transform Player;
    CursorLockMode wantedMode;
	//Meniu de pauza
    void Start()
    { canvas.gameObject.SetActive(false); }


	
	// Update is called once per frame
	void Update () {
        if (Input.GetKeyDown(KeyCode.Tab))
        {
            Pause();
            //Cursor.lockState = Cursor.visible.;
        }
	}
	//Pauza on/off
    public void Pause()
    {
        if (canvas.gameObject.activeInHierarchy == false)
        {
            Cursor.lockState = wantedMode = CursorLockMode.None;
            Cursor.visible = true;
            canvas.gameObject.SetActive(true);
            Player.GetComponent<FirstPersonController>().enabled = false;
            Cursor.lockState = wantedMode = CursorLockMode.None;
        }
        else
        {
            Cursor.lockState = wantedMode = CursorLockMode.Confined;
            Cursor.lockState = wantedMode = CursorLockMode.Locked;
            canvas.gameObject.SetActive(false);
            Cursor.visible = false;
            Player.GetComponent<FirstPersonController>().enabled = true;
            Cursor.lockState = wantedMode = CursorLockMode.Confined;
        }
    }
}
