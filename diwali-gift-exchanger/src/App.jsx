import { useState } from "react";

function App() {
  const gifts = ["Decorations", "Firecrackers", "SweetBoxes"];
  const [participant, setParticipant] = useState({
    participantName: "",
    giftsAssigned: false,
    gifts: "",
  });
  const [participants, setParticipants] = useState([]);
  const handleParticipantChange = (e) => {
    setParticipant({ ...participant, [e.target.id]: e.target.value });
  };
  const handleParticipant = (e) => {
    e.preventDefault();
    setParticipants([...participants, participant]);
  };
  const handleAssignGifts = () => {
    participants.forEach((participant) => {
      participant.giftsAssigned = true;
      participant.gifts = gifts[Math.floor(Math.random() * gifts.length)];
    });
    setParticipants([...participants]);
  };
  const handleReset = () => {
    participants.forEach((participant) => {
      participant.giftsAssigned = false;
      participant.gifts = "No gifts assigned";
    });
    setParticipants([...participants]);
  };
  const handleShuffleGifts = () => {
    for (let i = 0; i <= participants.length; i++) {
      let temp = "";
      let p1 = participants[i];
      console.log("p1: " + p1);
      for (let j = i + 1; j < participants.length; j++) {
        let p2 = participants[j];
        console.log("p2: " + p2);

        temp = p1.gifts;
        p1.gifts = p2.gifts;
        p2.gifts = temp;
      }
    }
    setParticipants([...participants]);
  };
  const handleParticipantDelete = (e) => {
    const updatedParticipants = participants.filter(
      (participant) => participant.participantName !== e
    );
    setParticipants(updatedParticipants);
  };
  return (
    <>
      <h1>Diwali Gift Exchanger</h1>
      <form onSubmit={(e) => handleParticipant(e)}>
        <input
          type="text"
          id="participantName"
          placeholder="Enter participant here"
          onChange={(e) => handleParticipantChange(e)}
        />
        <button type="submit">Add Person</button>
      </form>
      {participants.map((participant, index) => (
        <div key={index} className="container" style={{ display: "flex" }}>
          {participant.participantName} -{participant.gifts}
          <button
            onClick={() => handleParticipantDelete(participant.participantName)}
          >
            Delete
          </button>
        </div>
      ))}
      <button onClick={() => handleAssignGifts()}>Assign Gifts</button>
      <button onClick={() => handleShuffleGifts()}>Shuffle Gifts</button>
      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
}

export default App;
