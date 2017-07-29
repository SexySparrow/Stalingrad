
using UnityEngine;
using System.Collections;
using RAIN.Core;

public class DeathEnemy : MonoBehaviour
{
    public int num;
	public GameObject Soldat;
	private Animator anim;
	public GameObject SoldatMort;
    // Use this for initialization
    void Start()
    {
        MessageHandler msgHandler = GetComponent<MessageHandler>();

        if (msgHandler)
        {
            msgHandler.RegisterDelegate(RecieveMessage);
        }
    }


    void RecieveMessage(Messagetype msgType, GameObject go, MessageData msgData)
    {
        switch (msgType)
        {
            case Messagetype.DIED:
                DeathData dthData = msgData as DeathData;

                if (dthData != null)
                {
                    Die();
                }
                break;
        }
    }

    void Die()
    {
		// a murit inamicul 
		Destroy(Soldat);
		SoldatMort.SetActive(true);
		anim = SoldatMort.GetComponent<Animator> ();
		anim.SetBool ("mort", true);
		return;
    }
}
