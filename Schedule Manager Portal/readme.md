# Schedule Manager Portal

The Schedule Manager portal provides an interface for administrators to view generated schedules and modify them, invoking re-generations as necessary, or manually editing schedules if needed.

It uses uses `django` for the backend and `react` for the front-end (via next.js).

## Starting the backend

Install python 3.10 or newer, and then install django by running

```bash
python -m pip install Django
```

Once the django python module is installed, you can open a terminal to the root of the django project, which is the `server` folder.
There, you can run

```bash
python manage.py runserver
```

to start the back-end development server.

## Starting the front-end

Install node.js 18.17 or newer, and then open a terminal to the root of the next.js project, which is the `client` folder.
There, you can run

```bash
npm i
```

to install the dependencies. Once that's done, run

```bash
npm run dev
```

to start the front-end development server.