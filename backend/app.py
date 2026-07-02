from fastapi import FastAPI

app = FastAPI(title="Urban Air AI")

@app.get("/")
def home():
    return {"message": "Urban Air AI Backend Running 🚀"}