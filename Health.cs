
using UnityEngine;
using System.Collections;
// viata pentru adversari
public class Health : MonoBehaviour
{
    public int maxHealth = 100;
	public GameObject otherHealth;
	public int DamageJava;
	private EnemyScript goScript;
	public int Ene_H_cur = 100;

	public int m_curHealth;
    MessageHandler m_messageHandler;

    // Use this for initialization
    void Start()
    {
        m_curHealth = maxHealth;
		goScript = (EnemyScript) otherHealth.GetComponent ("EnemyScript");
        m_messageHandler = GetComponent<MessageHandler>();

        if (m_messageHandler)
        {
            m_messageHandler.RegisterDelegate(RecieveMessage);
        }
    }

	void Update()
	{
		//deoarece raycast este in javascript iar health este in C# aceasta este metoda de comunicare
		if (Ene_H_cur != goScript.EnemyHealth) {
			DamageJava = Ene_H_cur - goScript.EnemyHealth;
			Ene_H_cur = goScript.EnemyHealth;
			DoDamage (DamageJava, otherHealth);
		}
	}

    void RecieveMessage(Messagetype msgType, GameObject go, MessageData msgData)
    {
        switch (msgType)
        {
            case Messagetype.DAMAGED:
                DamageData dmgData = msgData as DamageData;

                if (dmgData != null)
                {
                    DoDamage(dmgData.damage, go);
                }
                break;
        }
    }

    void DoDamage(int dmg, GameObject go)
    {
		// Damage-ul efectiv 
        m_curHealth -= dmg;

        if (m_curHealth <= 0)
        {
            m_curHealth = 0;

            if (m_messageHandler)
            {
				// trimite mesaj catre scriptul Death
                DeathData deathData = new DeathData();
                deathData.attacker = go;
                deathData.attacked = gameObject;

                m_messageHandler.GiveMessage(Messagetype.DIED, gameObject, deathData);
            }
        }

        if (m_messageHandler)
        {
            HealthData hpData = new HealthData();

            hpData.maxHealth = maxHealth;
            hpData.curHealth = m_curHealth;

            m_messageHandler.GiveMessage(Messagetype.HEALTHCHANGED, gameObject, hpData);
        }
    }
}
