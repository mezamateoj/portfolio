import styles from "./app.module.css"

export default function Home() {
  return (
    <main className={styles.text}>
      <h1 style={{ animationDelay: "0.1s" }}>Hey 👋</h1>

      <p style={{ animationDelay: "0.2s", fontSize: "2.5rem", marginTop: "4rem" }}>
        I'm Mateo Meza{" "}
        <a href="https://www.linkedin.com/in/mezamateo/" target="_blank" className={styles.a}>
          Linkedin
        </a>{" "}
      </p>

      <section className={styles.currentSection} style={{ animationDelay: "0.4s" }}>
        <h2>Right Now I'm...</h2>
        <ul className={styles.currentList}>
          <li>
            Building{" "}
            <a href="https://ghosted-job.vercel.app/" target="_blank" className={styles.a}>
              Ghosted
            </a>
          </li>
          <li>
            Learning and going through {" "}
            <a href="https://csprimer.com/courses/" target="_blank" className={styles.a}>
              CS Primer
            </a>
          </li>

          <li>
            Working as a Full Stack Developer
            <a href="https://www.microsystem.cl/" target="_blank" className={styles.a}>
              Microsystem
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.currentSection} style={{ animationDelay: "0.4s" }}>
        <h2>Future Plans...</h2>
        <ul className={styles.currentList}>
          <li>
           Read and learn from 
            <a href="https://dataintensive.net/" target="_blank" className={styles.a}>
            Designing Data-Intensive Applications
            </a>
          </li>

          <li>
            Learn 
            <a href="https://ziglang.org/" target="_blank" className={styles.a}>
            Zig
            </a>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "6rem", animationDelay: "0.7s" }}>
        <h2 style={{ marginBottom: "2rem" }}>Past stuff...</h2>
        <p style={{ fontSize: "1.8rem", lineHeight: 1.4 }}>
          Full Stack Developer with over a year of experience in diverse tech stacks and projects. Here's a glimpse into my recent work:

          <br />
          <br />- Deploy and monitor ml models on production. Use of CDK, Fargate tasks, SNS topics.
          <br />
          <br />- Developed a full-stack application interfacing with SAP via its service layer using Next.js (with server actions), TypeScript, Django, AWS CDK, EC2, and VPC configurations for secure site-to-site connectivity.
          <br />
          <br />- Supported and added new features, leveraging TypeScript, Python (FastAPI, Pydantic), GraphQL, and AWS Lambda for serverless computing.
          <br />
          <br />-  Help create the main RAG (Retrieval Augmented Generation) functionality for a chatbot app. employing Llamaindex and vector databases in Python.
          <br />
          <br />- Refactored and enhanced a Random Forest model using Optuna for hyperparameter tuning, scikit-learn, and object-oriented Python.
          <br />
          <br />- Created materialized views, indexes, and optimized slow queries for better performance.
          <br />
          <br />- Set up automated ETL jobs with AWS Glue that execute every 15 minutes for data freshness.
          <br />
          <br />❓ Plenty random personal projects that i will never finished.
        </p>
      </section>

      <section style={{ marginTop: "6rem", animationDelay: "1.1s" }}>
        <p style={{ fontSize: "1.8rem", lineHeight: 1.4 }}>
          When I'm not working you'll find me lifting weights 🏋️, playing videogames 🎮 or watching anime 🏯.
        </p>
      </section>

      <section style={{ marginTop: "6rem", animationDelay: "1.4s" }}>
        <p style={{ fontSize: "1.8rem", lineHeight: 1.4 }}>
          Say Hi:{" "}
          <a href="mailto:maggiebyrne78@gmail.com" className={styles.a}>
            mezamateoj@gmail.com
          </a>
        </p>
      </section>
    </main>
  )
}

