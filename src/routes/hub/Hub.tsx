import styles from "./hub.module.scss";
import profileIcon from "/icons/profile-user.png";
import messageIcon from "/icons/email.png";
import newsIcon from "/icons/newspaper-folded.png";
import calendarIcon from "/icons/calendar.png";
import communityIcon from "/icons/community.png";
import eventsIcon from "/icons/event.png";
import briefcaseIcon from "/icons/briefcase.png";
import bookIcon from "/icons/open-book.png";

export default function Hub() {
  return (
    <div className={styles.container}>
      <div className={styles.profile_card}>
        <img src={profileIcon} alt="" />
        <div>
          <h2>Ryan Bowler</h2>
          <p>
            <span>Student ID:</span> 87639
          </p>
        </div>
      </div>
      <div className={styles.block}>
        <h2>My Activity</h2>
        <ul className={styles.activity_list}>
          <li>
            <h3>Work Submission</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              eos nam in corporis praesentium voluptates, officia odit eveniet
              perspiciatis aliquid!
            </p>
          </li>
          <li>
            <h3>Assignment Completed</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              eos nam in corporis.
            </p>
          </li>
          <button>See More...</button>
        </ul>
      </div>
      <div className={styles.block}>
        <h2>My Study</h2>
        <ul className={styles.study_list}>
          <li>
            <img src={bookIcon} alt="" />
            <h3>ICT50220 Diploma of Information Technology</h3>
            <button>View Course</button>
            <div className={styles.progress_track}>
              <div className={styles.progress_bar}></div>
              <span>21%</span>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.btns_container}>
        <button>
          <img src={messageIcon} alt="" />
          Messages
        </button>
        <button>
          <img src={newsIcon} alt="" />
          News
        </button>
        <button>
          <img src={calendarIcon} alt="" />
          Timetable
        </button>
        <button>
          <img src={communityIcon} alt="" />
          Community
        </button>
        <button>
          <img src={eventsIcon} alt="" />
          Events
        </button>
        <button>
          <img src={briefcaseIcon} alt="" />
          Jobs
        </button>
      </div>
    </div>
  );
}
