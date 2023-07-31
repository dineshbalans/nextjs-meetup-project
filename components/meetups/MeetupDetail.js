import styles from "./MeetupDetail.module.css";
import { useRouter } from "next/router";

const MeetupDetail = (props) => {
  const router = useRouter();
  return (
    <>
      <section className={styles.main}>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <div className={styles.actions}>
          <button onClick={() => router.push("/")}>Back</button>
        </div>
      </section>
    </>
  );
};

export default MeetupDetail;
