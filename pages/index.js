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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export default HomePage;

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 60, // 每60秒重新生成取代舊資料
  };
}
