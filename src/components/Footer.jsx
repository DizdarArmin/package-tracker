export default function Footer() {
  const linkedInURL = "https://www.linkedin.com/armindizdar";
  const gitURL = "https://github.com/DizdarArmin/package-tracker";

  return (
    <footer className="footer">
      <a target="_blank" href={linkedInURL} rel="noreferrer">
        <i className="fab fa-linkedin-in fa-2x" />
      </a>
      <a target="_blank" href={gitURL} rel="noreferrer">
        <i className="fab fa-github fa-2x" />
      </a>
    </footer>
  );
}
