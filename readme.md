# FlowAI

This repository provides a minimal example of the FlowAI application.

## Frontend

A simple prototype interface is available in `frontend/index.html`. You can open this file directly in a browser for a quick preview.

## Running the Flask server

A lightweight Flask server is provided in the `app` directory. To run it locally:

```bash
cd app
pip install -r requirements.txt
python app.py
```

The application will be available at `http://localhost:8080`.

## Docker

You can also build and run the application using Docker:

```bash
cd app
docker build -t flowai:latest .
docker run -p 8080:8080 flowai:latest
```

This exposes the application at `http://localhost:8080/`.
