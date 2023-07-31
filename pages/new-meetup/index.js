import { useRouter } from "next/router";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const MeetupFormPage = () => {
  const router = useRouter();
  const formSubmitHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title> Add Meetup</title>
        <meta
          name="description"
          content="Add your Meetups to a huge list of highly active React meetups!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={formSubmitHandler} />
    </>
  );
};
export default MeetupFormPage;
