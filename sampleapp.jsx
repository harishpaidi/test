import { useState } from "react";

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [result, setResult] = useState("");

  const analyzeRepo = () => {
    if (!repoUrl) {
      setResult("Please enter a repository URL");
      return;
    }

    // mock response (replace with API call)
    setResult(`Analyzing: ${repoUrl}`);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Repo Analyzer</h1>

        <input
          type="text"
          placeholder="https://github.com/user/repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          style={styles.input}
        />

        <button onClick={analyzeRepo} style={styles.button}>
          Analyze Repository
        </button>

        {result && <p style={styles.result}>{result}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
    fontFamily: "Arial"
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center"
  },
  title: {
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  result: {
    marginTop: "15px",
    color: "#374151"
  }
};
