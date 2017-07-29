using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class muta : MonoBehaviour
{
    [SerializeField]
    private Text a = null;
    private int nr = 1;
    public Text ThisText;
    public Canvas ThisButton;
    // private string s;
    string s;
    //string unu = "1)	Stalingrad se afla:  a)	Pe râul Volga  b)	Pe râul Don  c)	Lângă Marea Baltică";
    //string doi = "2)	Bătălia de la Stalingrad a avut loc între anii:  a)	1942-1943  b)	1939-1940  c)	1943-1944";
   // public Image imageGO;
   // private int nr = 1;
   // private string s;
    void Start()
    {
        a.text = System.IO.File.ReadAllText("1.txt");
        ThisButton.enabled = false;
    }
    //Update is called once per frame
    public void ClickToChange()
    {
        nr++;
        s = nr.ToString();
        s = s + ".txt";     
       // s = System.IO.File.ReadAllText("2.txt");
       if(nr<=20) a.text = System.IO.File.ReadAllText(s);
        if (nr == 20)
            ThisText.text = "Finish";
        if (nr == 21)
        { a.text = null;
            ThisButton.enabled = true;

        }
    }

}
