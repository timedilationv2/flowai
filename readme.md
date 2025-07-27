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


thoughts day 1 ~

```markdown
**MEMORANDUM**

**To:** Project Stakeholders  
**From:** Arsalan A. Khan (timedilationv2), Lead Developer  
**Date:** July 27, 2025  
**Subject:** First Day Report: Project FlowAi Initiation & Phase 1 Progress

---

### 1.0 Executive Summary

This report documents the activities and outcomes of the first official day of development for Project FlowAi. The primary objective for the day was to establish the foundational infrastructure for the application as outlined in the project's development plan. I have successfully completed the initial tasks of Phase 1, which involved creating the repository, setting up the file structure, and scaffolding a basic front-end prototype that demonstrates the core "Feature-Fast-Feedback" principle. The project is now well-positioned to proceed with further development.

### 2.0 Project Objective

As defined in our initial planning session, Project FlowAi is a front-end application conceived as a memory-threaded prompting system. Its primary goal is to guide users through a complex report-writing process by leveraging a core design principle we've termed **Feature-Fast-Feedback (FFA)**. This principle dictates that the UI provides immediate, real-time feedback and updates in a live preview panel as the user inputs information across various steps. The resulting tool will serve as an advanced research application for generative AI workflows.

### 3.0 Activities Performed (Day 1)

In alignment with Phase 1, "Repo Setup & Initial Scaffold," the following tasks were executed and completed:

* **Project Directory Creation:** The main project folder, `FlowAi`, was created to house all project assets.
* **Version Control Initialization:** A Git repository was initialized within the `FlowAi` directory to ensure robust version control from the project's inception. A `.gitignore` file was configured with standard defaults for web development (e.g., `node_modules`).
* **Initial File Structure:** The foundational file and folder structure was created:
    * `index.html` (Main application entry point)
    * `assets/main.css` (Stylesheet)
    * `assets/app.js` (JavaScript logic)
    * `README.md` (Project documentation)
* **UI Scaffolding:** The `index.html` file was populated with a foundational layout. This includes a multi-step "wizard" interface for user input and a corresponding "Live Preview" panel. This initial scaffold, while not yet interactive, visually demonstrates the core FFA concept and provides the structural basis for future feature implementation.

### 4.0 Initial Outcomes & Observations

The result of today's work is a clean, organized, and version-controlled project foundation. The initial `index.html` scaffold successfully serves as a tangible proof-of-concept for the intended user experience. By establishing this baseline, we have a stable starting point for building out the more complex component library and implementing the JavaScript logic required for the FFA loop. The project structure is sound and adheres to modern web development best practices.

### 5.0 Next Steps

With the successful completion of the initial setup, the immediate plan is to proceed with the remaining phases of the development plan:

1.  **Phase 2:** Begin development of the project's documentation site and configure it for deployment via GitHub Pages.
2.  **Phase 3:** Establish the CI/CD pipeline using GitHub Actions to automate linting, testing, and deployment.
3.  **Phase 4:** Formally design the UI wireframes and begin building out a library of reusable web components.

The foundation laid today ensures that these subsequent phases can be executed efficiently.

---

Respectfully,

**Arsalan A. Khan**
```
