using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LoadingScreenButton : MonoBehaviour {

	public void LoadSceneNum(int num)
    {
        LoadingScreenManager.LoadScene(num);
    }
}
