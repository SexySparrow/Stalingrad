
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class ShootingSystem : MonoBehaviour
{
    public float fireRate;
    public int damage;
    public float fieldOfView;
    public bool beam;
    public GameObject projectile;
    public List<GameObject> projectileSpawns;
	public int NowShoot;
	public GameObject gthis;

    List<GameObject> m_lastProjectiles = new List<GameObject>();
    float m_fireTimer = 0.0f;
    GameObject m_target;
    // Update is called once per frame
    void Update()
    {
		// primeste informatii de la FieldOfView daca sa traga sau nu
		if (gthis.GetComponent<FieldOfView> ().ShootTarget == 5) {
			NowShoot = 5;
		} else {
			NowShoot = 0;
		}

        if (!m_target)
        {
            if (beam)
                RemoveLastProjectiles();

            return;
        }
		//calculeaza unghiul de lansare 
        if (beam && m_lastProjectiles.Count <= 0)
        {
            float angle = Quaternion.Angle(transform.rotation, Quaternion.LookRotation(m_target.transform.position - transform.position));

            if (angle < fieldOfView)
            {
                SpawnProjectiles();
            }
        }
        else if (beam && m_lastProjectiles.Count > 0)
        {
            float angle = Quaternion.Angle(transform.rotation, Quaternion.LookRotation(m_target.transform.position - transform.position));

            if (angle > fieldOfView)
            {
                RemoveLastProjectiles();
            }
        }
        else {
            m_fireTimer += Time.deltaTime;

            if (m_fireTimer >= fireRate)
            {
                float angle = Quaternion.Angle(transform.rotation, Quaternion.LookRotation(m_target.transform.position - transform.position));

				if (angle < fieldOfView && NowShoot == 5)
                {
                    SpawnProjectiles();

                    m_fireTimer = 0.0f;
                }
            }
        }
    }

    void SpawnProjectiles()
    {
        if (!projectile)
        {
            return;
        }

        m_lastProjectiles.Clear();

        for (int i = 0; i < projectileSpawns.Count; i++)
        {
            if (projectileSpawns[i])
            {
				//trage cu glontul 
                GameObject proj = Instantiate(projectile, projectileSpawns[i].transform.position, Quaternion.Euler(projectileSpawns[i].transform.forward)) as GameObject;
                proj.GetComponent<BaseProjectile>().FireProjectile(projectileSpawns[i], m_target, damage, fireRate);

                m_lastProjectiles.Add(proj);
            }
        }
    }

    public void SetTarget(GameObject target)
    {
        m_target = target;
    }

    void RemoveLastProjectiles()
    {
        while (m_lastProjectiles.Count > 0)
        {
			//distruge glontul daca acesta nu a facut nimic
            Destroy(m_lastProjectiles[0]);
            m_lastProjectiles.RemoveAt(0);
        }
    }
}
