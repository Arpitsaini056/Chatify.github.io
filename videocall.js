let localStream;
let remoteStream;
let peerConnection;

// Get local media stream (video + audio)
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        localStream = stream;
        document.getElementById("userVideo").srcObject = localStream;
        initiateCall();
    })
    .catch(error => console.error("Error accessing media devices.", error));

function initiateCall() {
    // Setup peer connection
    peerConnection = new RTCPeerConnection();
    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));
    
    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            // Send candidate to remote peer (implementation depends on signaling server)
        }
    };

    peerConnection.ontrack = (event) => {
        remoteStream = event.streams[0];
        document.getElementById("peerVideo").srcObject = remoteStream;
    };

    // Create offer and set up signaling (use a signaling server for real-world implementation)
    peerConnection.createOffer().then(offer => {
        peerConnection.setLocalDescription(offer);
        // Send offer to remote peer (use signaling server here)
    });
}

function endVideoCall() {
    peerConnection.close();
    localStream.getTracks().forEach(track => track.stop());
    alert("Video call ended.");
}
