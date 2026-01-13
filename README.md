# romanstore
RomanStore

RomanStore is a web platform for mothers and expectant mothers.
The project combines events, community, and cozy products for babies and parents into one digital space.

The website is designed as a landing page with event registration and backend processing of user submissions.

🌸 Project Vision

RomanStore is built around the idea of conscious and supportive motherhood.
We aim to create a space where a woman:

feels supported,

gains knowledge,

stays connected to herself,

and finds high-quality products for herself and her baby.

🧩 Features

The website includes:

Landing page with section navigation

Events section with dates and descriptions

Textile products catalog

About section

Event sign-up form

Data submission and storage

🛠 Technologies Used
Frontend

HTML5 — page structure

SCSS → CSS — styling and layout

JavaScript — interactivity and form handling

Backend

Python — server-side logic

Supabase — database for storing user registrations

Hosting

GitHub Pages — frontend deployment

📂 Project Structure
/
├── index.html        # Main page
├── style.scss       # Source styles
├── style.css        # Compiled styles
├── script.js        # Frontend logic
├── main.py          # Backend logic
├── fonts/           # Custom fonts
├── img/             # Images
└── README.md

📝 How the Sign-Up Form Works

The user:

Enters their name

Provides their Telegram username

Selects an event

Submits the form

The data is then:
→ processed via JavaScript
→ sent to the Python backend
→ stored in Supabase
→ used by a manager to contact the user for payment

🎨 Design

The visual style focuses on warmth, care, and emotional comfort.
Typography and colors were selected to make the site feel like a safe, cozy space rather than a typical store.

🚀 Running the project locally

Install Python dependencies

Start the backend:

python main.py


Open index.html using Live Server or in a browser

📌 Project status

The project is under active development.
Planned features include:

online payments

user accounts

expanded product catalog

automated notifications