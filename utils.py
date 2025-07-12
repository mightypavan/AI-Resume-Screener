from sklearn.metrics.pairwise import cosine_similarity
import fitz


def extract_text_from_pdf(file_bytes):
    text = ""
    with fitz.open(stream=file_bytes, filetype="pdf") as doc:
        for page in doc:
            text += page.get_text()
    return text


def compute_similarity(resume_text, job_desc, model):
    resume_vec = model.encode([resume_text])
    job_vec = model.encode([job_desc])
    return float(cosine_similarity(resume_vec, job_vec)[0][0])
