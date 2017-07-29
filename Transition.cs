using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using System.Collections;

public class Transition : MonoBehaviour
{
    public void ChangeToScene (int sceneToChangeTo)
    {
       SceneManager.LoadScene(sceneToChangeTo);
    }

}
