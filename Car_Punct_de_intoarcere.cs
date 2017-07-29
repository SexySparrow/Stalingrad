using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// activeaza adversarul si finalul misiunii
public class Car_Punct_de_intoarcere : MonoBehaviour {

    public GameObject Finish;
    public GameObject MasinaFalsa;
    public GameObject MasinaReala;
    
    private void Start()
    {
        Finish.SetActive(false);
        MasinaFalsa.SetActive(true);
        MasinaReala.SetActive(false);
    }
    void OnTriggerEnter(Collider iCollide)
    {
        if (iCollide.transform.name == "Player")
        {
            Finish.SetActive(true);
            MasinaFalsa.SetActive(false);
            MasinaReala.SetActive(true);
        }
    }
    
}
