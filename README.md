# AIMS-Rwanda---Comprehensive-E-Learning-Platform
AIMS Rwanda - Comprehensive E-Learning Platform
Our AIMS Rwanda is a world-class, modular e-learning platform built with modern technologies to serve educational institutions in Rwanda and beyond, featuring a robust Python Django backend with Django REST Framework for a complete API-first architecture, a responsive React.js frontend with Tailwind CSS styled in our brand colors (clean white backgrounds, bold red accents, and strong black typography), and a meticulously designed PostgreSQL database schema that supports all core academic features including course management with drag-and-drop module organization, comprehensive assessment systems with auto-grading and plagiarism detection, real-time analytics dashboards for both students and lecturers, secure authentication with JWT and role-based access control (admin, lecturer, TA, student, guardian), institutional management tools, guardian portals, discussion forums, live class integration with Zoom/BigBlueButton, mobile-responsive Progressive Web App capabilities, and full compliance with GDPR and Rwanda data protection laws. The platform is containerized with Docker for easy deployment, includes complete database migrations, and can be run locally using docker-compose up for immediate testing with all services (PostgreSQL database, Redis cache, Django backend, and React frontend) automatically configured and connected, allowing you to experience the full system functionality including user registration, course creation, content management, assignment submission, grading workflows, progress tracking, and real-time notifications exactly as it would operate in production, while the modular architecture ensures scalability and extensibility for future features like SCORM/xAPI support, advanced analytics pipelines, mobile apps, and third-party integrations.

Quick Start
To run the platform locally and experience all features:

Clone the repository: git clone https://github.com/your-username/our-aims-rwanda.git

Navigate to backend: cd our-aims-rwanda/backend

Start all services: docker-compose up --build

Run migrations: docker-compose exec backend python manage.py migrate

Create admin user: docker-compose exec backend python manage.py createsuperuser

Access the application:

Frontend: http://localhost:3000

Backend API: http://localhost:8000

Admin Panel: http://localhost:8000/admin (use your superuser credentials)

Key Features Immediately Available
Upon running the platform, you'll have access to:

Student Dashboard: Personalized learning feed, progress tracking, upcoming deadlines, course enrollment, assignment submission, and grade viewing

Lecturer Dashboard: Course creation tools, student roster management, assignment grading interface, attendance tracking, and analytics

Admin Panel: User management, institutional settings, course catalog administration, and system analytics

Database Models: Complete schema with users, courses, modules, lessons, assignments, quizzes, submissions, grades, enrollments, and analytics tracking

RESTful APIs: Full CRUD operations for all entities with JWT authentication

Responsive Design: Mobile-friendly interface with our brand color scheme throughout

Technology Stack
Backend: Python 3.11, Django 4.2, Django REST Framework, PostgreSQL, Redis, Celery

Frontend: React.js, Tailwind CSS, Axios for API calls

Infrastructure: Docker, Docker Compose, Nginx (production)

Authentication: JWT tokens with role-based permissions

File Storage: Local file system (configurable for AWS S3)

Default Access
After setup, you can login with:

Admin: The superuser account you created

Test Users: Use the admin panel to create sample lecturers and students

API Documentation: Available at http://localhost:8000/api/docs/

This implementation provides a production-ready foundation that demonstrates all core e-learning functionality while maintaining code quality, security best practices, and scalability for educational institutions of any size.
