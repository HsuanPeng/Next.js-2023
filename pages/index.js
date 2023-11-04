import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Iceland_Grimsvoetn_1972-B.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Iceland_Grimsvoetn_1972-B.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m3",
    title: "A third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Iceland_Grimsvoetn_1972-B.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
