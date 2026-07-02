import sys

print("=" * 50)
print(sys.executable)
print("=" * 50)

from fastapi import FastAPI

from api.predict import router as predict_router

app = FastAPI(title="Urban Air AI")

app.include_router(predict_router)


@app.get("/")
def home():

    return {

        "message": "Urban Air AI Backend Running"

    }