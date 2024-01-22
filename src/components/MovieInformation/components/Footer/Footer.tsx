import s from "./Footer.module.scss";

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footerTextWrapper}>
        <span className={s.footerHeadings}>THE BASICS</span>
        <span>About TMDB</span>
        <span>Contact Us</span>
        <span>Support Forums</span>
        <span>API</span>
        <span>System Status</span>
      </div>
      <div className={s.footerTextWrapper}>
        <span className={s.footerHeadings}>GET INVOLVED</span>
        <span>Contribution Bible</span>
        <span>Add New Movie</span>
        <span>Add New TV Show</span>
      </div>
      <div className={s.footerTextWrapper}>
        <span className={s.footerHeadings}>COMMUNITY</span>
        <span>Guidelines</span>
        <span>Discussions</span>
        <span>Leaderboard</span>
      </div>
      <div className={s.footerTextWrapper}>
        <span className={s.footerHeadings}>LEGAL</span>
        <span>Terms of Use</span>
        <span>API Terms of Use</span>
        <span>Privacy Policy</span>
        <span>API</span>
        <span>DMCA Policy</span>
      </div>
    </div>
  );
}

export default Footer;
