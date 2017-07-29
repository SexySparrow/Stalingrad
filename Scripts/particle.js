#pragma strict
var Effect1 : Transform;
var Effect2 : Transform;
var Effect3 : Transform;
var Effect4 : Transform;
function Start () {
    
}

function Update () {
    var hit:RaycastHit;
    var ray: Ray =Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5,Screen.height*0.5,0));
    if(Input.GetMouseButtonDown(0))
    {
        if(Physics.Raycast(ray,hit,100))
        { 
            if (hit.collider.CompareTag("Metal"))
            {
                var particleClone1= Instantiate (Effect1, hit.point,Quaternion.LookRotation(hit.normal));
                Destroy(particleClone1.gameObject,2);
            }

            if (hit.collider.CompareTag("Noroi"))
            {
                var particleClone2= Instantiate (Effect2, hit.point,Quaternion.LookRotation(hit.normal));
                Destroy(particleClone2.gameObject,2);
            }
            if (hit.collider.CompareTag("Enemy") || hit.collider.CompareTag("Player"))
            {
                var particleClone3= Instantiate (Effect3, hit.point,Quaternion.LookRotation(hit.normal));
                Destroy(particleClone3.gameObject,2);
            }
            if (hit.collider.CompareTag("Apa"))
            {
                var particleClone4= Instantiate (Effect4, hit.point,Quaternion.LookRotation(hit.normal));
                Destroy(particleClone4.gameObject,2);
            }
        }
    }

}
