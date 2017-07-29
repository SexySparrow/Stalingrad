using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class ToggleMap : MonoBehaviour {
    public GameObject map;
    public GameObject obj;

    // Use this for initialization
    void Start () {
        map.SetActive(false);
        obj.SetActive(false);

    }

    // Update is called once per frame
    void Update () {
		if(Input.GetKey("m"))
        {
            map.SetActive(true);
        }
        else
        {
            map.SetActive(false);
        }

        if (Input.GetKey("o"))
        {
            obj.SetActive(true);
        }
        else
        {
            obj.SetActive(false);
        }

    }
}
