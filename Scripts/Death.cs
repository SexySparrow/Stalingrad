
using UnityEngine;
using System.Collections;

public class Death : MonoBehaviour
{
    public int num;
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
		//ai murit
        LoadingScreenManager.LoadScene(num);
    }
}
