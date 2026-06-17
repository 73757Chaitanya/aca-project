import pgdac from "../assets/programs/pg-dac.png";
import pgdbda from "../assets/programs/pg-dbda.png";
import pgai from "../assets/programs/pg-ai.png";
import pgfsd from "../assets/programs/pg-fsd.png";
import pgcc from "../assets/programs/pg-cc.png";
import pgcyber from "../assets/programs/pg-cyber.png";

const programs = {
  "pg-dac": {
    code: "PG-DAC",
    slug: "pg-dac",
    image: pgdac,
    title: "Post Graduate Diploma in Advanced Computing",
    duration: "24 Weeks",
    eligibility: "Engineering & Science Graduates",
    overview:
      "Advanced Computing program covering programming, databases, web technologies, software engineering and cloud fundamentals.",
    modules: [
      "Data Structures & Algorithms",
      "Core Java",
      "Advanced Java",
      "Spring Boot",
      "React",
      "Database Technologies",
      "Software Engineering",
      "Cloud Fundamentals",
    ],
  },

  "pg-dbda": {
    code: "PG-DBDA",
    slug: "pg-dbda",
    image: pgdbda,
    title: "Post Graduate Diploma in Big Data Analytics",
    duration: "24 Weeks",
    eligibility: "Engineering & Science Graduates",
    overview:
      "Big Data Analytics program focusing on data engineering, analytics and machine learning.",
    modules: [
      "Python",
      "SQL",
      "Data Analytics",
      "Machine Learning",
      "Hadoop",
      "Spark",
      "Data Visualization",
    ],
  },

  "pg-ai": {
    code: "PG-AI",
    slug: "pg-ai",
    image: pgai,
    title: "Post Graduate Program in Artificial Intelligence",
    duration: "24 Weeks",
    eligibility: "Engineering & Science Graduates",
    overview:
      "Artificial Intelligence program covering machine learning, deep learning and generative AI.",
    modules: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "RAG",
      "Agentic AI",
    ],
  },

  "pg-fsd": {
    code: "PG-FSD",
    slug: "pg-fsd",
    image: pgfsd,
    title: "Post Graduate Program in Full Stack Development",
    duration: "24 Weeks",
    eligibility: "Engineering & Science Graduates",
    overview:
      "Full Stack Development program covering frontend, backend, databases and deployment.",
    modules: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Git & GitHub",
    ],
  },

  "pg-cc": {
    code: "PG-CC",
    slug: "pg-cc",
    image: pgcc,
    title: "Post Graduate Program in Cloud Computing",
    duration: "24 Weeks",
    eligibility: "Engineering & Science Graduates",
    overview:
      "Cloud Computing program focusing on cloud platforms, containers and DevOps practices.",
    modules: [
      "Linux",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "DevOps",
      "Cloud Security",
    ],
  },

  "pg-cyber": {
    code: "PG-CYBER",
    slug: "pg-cyber",
    image: pgcyber,
    title: "Post Graduate Program in Cyber Security",
    duration: "24 Weeks",
    eligibility: "Engineering & Science Graduates",
    overview:
      "Cyber Security program covering network security, ethical hacking and security operations.",
    modules: [
      "Networking",
      "Linux",
      "Ethical Hacking",
      "Penetration Testing",
      "SOC Operations",
      "Cyber Forensics",
      "Web Security",
      "Cloud Security",
    ],
  },
};

export default programs;