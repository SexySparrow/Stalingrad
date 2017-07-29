using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class play_sound_on_trigger3 : MonoBehaviour
{
    public List<GameObject> sunete;
    public static float Range;
    int x = 0;
    int random;

    void Start()
    {

        InvokeRepeating("alegereSunete", 0f, 5f);

    }
    void alegereSunete()
    {
        sunete[x].SetActive(false);
        random = Random.Range(0, sunete.Count);
        x = random;
        sunete[random].SetActive(true);
    }

    
}