function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/t9e4ytJ_F/model.json",modelloaded)
}
function modelloaded(){
  console.log("modelloaded");
  classifier.classify(gotResult)
}

function gotResult(error,result){
  if (error){
    console.log(error)
  }
  else{
    console.log(result)
    document.getElementById("Hear").innerHTML = result[0].label
    document.getElementById("Accuracy").innerHTML = (result[0].confidence * 100).toFixed(2)
    Image1 = document.getElementById("alien_1");
    Image2 = document.getElementById("alien_2");
    Image3 = document.getElementById("alien_3");
    Image4 = document.getElementById("alien_4");
    if(result[0].label == "Whistling"){
      Image3.src="aliens-03.gif"
      Image1.src="aliens-01.png"
      Image2.src="aliens-02.png"
      Image4.src="aliens-04.png"
    }
    if(result[0].label == "Clapping"){
      Image3.src="aliens-03.png"
      Image1.src="aliens-01.png"
      Image2.src="aliens-02.gif"
      Image4.src="aliens-04.png"
    }
    if(result[0].label == "Background Noise"){
      Image3.src="aliens-03.png"
      Image1.src="aliens-01.png"
      Image2.src="aliens-02.png"
      Image4.src="aliens-04.gif"
    }
    if(result[0].label == "Ringing"){
      Image3.src="aliens-03.png"
      Image1.src="aliens-01.gif"
      Image2.src="aliens-02.png"
      Image4.src="aliens-04.png"
    }

  }
}