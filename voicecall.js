let localAudioStream;
let remoteAudioStream;
let peerConnection;

// Get local audio stream
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        localAudioStream = stream;
        initiateVoiceCall();
    })
    .catch(error => console.error("Error accessing media devices.", error));

function initiateVoiceCall() {
    // Setup peer connection for audio call
    peerConnection = new RTCPeerConnection();
    localAudioStream.getTracks().forEach(track => peerConnection.addTrack(track, localAudioStream));

    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            // Send candidate to remote peer (implementation depends on signaling server)
        }
    };

    peerConnection.ontrack = (event) => {
        remoteAudioStream = event.streams[0];
        // Handle remote audio stream here
    };

    // Create offer and set up signaling (use a signaling server for real-world implementation)
    peerConnection.createOffer().then(offer => {
        peerConnection.setLocalDescription(offer);
        // Send offer to remote peer (use signaling server here)
    });
}

function endVoiceCall() {
    peerConnection.close();
    localAudioStream.getTracks().forEach(track => track.stop());
    alert("Voice call ended.");
}
