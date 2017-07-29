using UnityEngine;
using System.Collections;
// schimba culoarea unui material si activeaza un canvas simuland astfel aprinderea unui televizor

public class Ecran : MonoBehaviour
{

    public Color offColor = Color.black;
    public Color onColor = Color.grey;
    public Renderer rend;
    public Canvas Screen;
    private bool display = false;

    void Start()
    {
        Screen.enabled = false;
        rend = GetComponent<Renderer>();
        rend.material.color = offColor;
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
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.T) && display)
        {
            Screen.enabled = !Screen.enabled;
            if (Screen.enabled)
                rend.material.color = onColor;
            else
                rend.material.color = offColor;
        }
        if(!display)
        {
            Screen.enabled = false;
            rend.material.color = offColor;
        }
    }
}