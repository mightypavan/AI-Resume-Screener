# 🧠 Ai Resume Screener

This is an AI-powered web application that analyzes and scores resumes against a provided job description. Built using **Flask** and **Sentence Transformers**, it allows recruiters or hiring managers to quickly assess resume relevance and export the results in **PDF**, **CSV**, or **XLSX** formats.

## 🚀 Features

- 🔍 **Resume Screening**: Upload multiple PDF resumes and compare them to a job description.
- 📊 **Match Scoring**: Calculates semantic similarity between resumes and job description using a transformer model.
- 📋 **Export Options**:
  - Download results as **PDF**
  - Export to **CSV** or **XLSX** format
- 📁 **No Resume Saved**: Uploaded resumes are processed in memory and not saved to disk.
- 🌗 **Dark Mode Toggle**: Modern UI with dark mode support.

## 📦 Tech Stack

- Backend: [Flask](https://flask.palletsprojects.com/)
- NLP Model: [`sentence-transformers`](https://www.sbert.net/) (`all-MiniLM-L6-v2`)
- PDF Rendering: `pdfkit` + `wkhtmltopdf`
- Excel Export: `openpyxl`
- Resume Parsing: `PyMuPDF`
- Frontend: HTML/CSS + JS