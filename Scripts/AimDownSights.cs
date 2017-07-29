using UnityEngine;
using System.Collections;
public class AimDownSights : MonoBehaviour
{
 public float defaultFOV = 60.0F;
 public float aimedFOV = 45.0F;
 public float smoothFOV = 10.0F;
 
 public Vector3 hipPosition;
 public Vector3 aimPosition;
 public float smoothAim = 12.5F;
 
// schimba pozitia si fov la camera secundara in momentul apasarii pe buton
 void Update()
 {
  if (Input.GetMouseButton(1))
  {
   transform.localPosition = Vector3.Lerp(transform.localPosition, aimPosition, Time.deltaTime * smoothAim);
   Camera.main.fieldOfView = Mathf.Lerp(Camera.main.fieldOfView, aimedFOV, Time.deltaTime * smoothFOV);
  }
  else
  {
   transform.localPosition = Vector3.Lerp(transform.localPosition, hipPosition, Time.deltaTime * smoothAim);
   Camera.main.fieldOfView = Mathf.Lerp(Camera.main.fieldOfView, defaultFOV, Time.deltaTime * smoothFOV);
  }
 }
}