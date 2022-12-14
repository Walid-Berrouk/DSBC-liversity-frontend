import Rooms from "../components/HomePage/Rooms";
import SoloRoomCard from "../components/HomePage/SoloRoomCard";
import TogetherRoomCard from "../components/HomePage/TogetherRoomCard";

export default function HomePage() {
  const rooms = [
    {
      id: 1,
      name: "Competitive exam",
      picture: "https://placehold.co/40x40.png",
      maxNumber: 25,
      actualNumber: 20,
      categories: [
        "Exams",
        "University",
        "Study",
        "1st year students",
        "Focus",
      ],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      name: "Competitive exam",
      picture: "https://placehold.co/40x40.png",
      maxNumber: 25,
      actualNumber: 20,
      categories: [
        "Exams",
        "University",
        "Study",
        "1st year students",
        "Focus",
      ],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 3,
      name: "Competitive exam",
      picture: "https://placehold.co/40x40.png",
      maxNumber: 25,
      actualNumber: 20,
      categories: [
        "Exams",
        "University",
        "Study",
        "1st year students",
        "Focus",
      ],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 4,
      name: "Competitive exam",
      picture: "https://placehold.co/40x40.png",
      maxNumber: 25,
      actualNumber: 20,
      categories: [
        "Exams",
        "University",
        "Study",
        "1st year students",
        "Focus",
      ],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 5,
      name: "Competitive exam",
      picture: "https://placehold.co/40x40.png",
      maxNumber: 25,
      actualNumber: 20,
      categories: [
        "Exams",
        "University",
        "Study",
        "1st year students",
        "Focus",
      ],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 6,
      name: "Competitive exam",
      picture: "https://placehold.co/40x40.png",
      maxNumber: 25,
      actualNumber: 20,
      categories: [
        "Exams",
        "University",
        "Study",
        "1st year students",
        "Focus",
      ],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];

  return (
    <>
      <Rooms />
      <div className="flex flex-col items-start my-8">
        <h3 className="text-2xl font-semibold">Solo study rooms</h3>
        <SoloRoomCard />
      </div>
      <div className="flex flex-col items-start my-8">
        <h3 className="text-2xl font-semibold">Study together rooms</h3>
        <div className="flex flex-wrap gap-x-2">
          {rooms.map((room) => (
            <TogetherRoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </>
  );
}
