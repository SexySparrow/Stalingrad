﻿using UnityEngine;
using System.Collections;
using UnityEngine.UI;

[RequireComponent (typeof(AudioSource))]
public class MoviePlayer : MonoBehaviour {

    public MovieTexture movie;
    private AudioSource audio;

    void Start ()
	{
		GetComponent<RawImage> ().texture = movie as MovieTexture;
		audio = GetComponent<AudioSource> ();
		audio.clip = movie.audioClip;

		movie.Play ();
		audio.Play ();
		movie.loop = true;

	}
}
