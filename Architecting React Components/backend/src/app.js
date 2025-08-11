import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.json({ status : "OK", timestamp: new Date().toISOString().split("T")[0]});
});

app.get("/api/technologies", (req, res) => {
    const technologies = [
        { id: "javascript", value: "Javascript" },
        { id: "react", value: "React" },
        { id: "nodejs", value: "Node.js" },
        { id: "express", value: "Express" },
        { id: "mongodb", value: "MongoDB" },
        { id: "python", value: "Python" },
        { id: "java", value: "Java" },
        { id: "csharp", value: "C#" },
        { id: "php", value: "PHP" },
        { id: "ruby", value: "Ruby" },
        { id: "go", value: "Go" },
        { id: "kotlin", value: "Kotlin" },
        { id: "swift", value: "Swift" },
        { id: "typescript", value: "TypeScript" },
        { id: "c", value: "C" },
        { id: "c++", value: "C++" },
        { id: "sql", value: "SQL" },
        { id: "html", value: "HTML" },
        { id: "css", value: "CSS" },
        { id: "sass", value: "Sass" },
        { id: "less", value: "Less" }
    ];
    
    res.json(technologies);
});

export default app;
