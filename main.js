

function check(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/c1maTOexg/model.json", modelReady);

}

function modelReady(){

    classifier.classify(gotResult)

}

function gotResult(error, results){

    console.error(error);

}