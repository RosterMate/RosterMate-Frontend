# RosterMate - Hospital Roster Scheduling Application

## Project Overview

RosterMate is a mobile-optimized web application developed as a group project by members [Thejan](https://github.com/thejanb), [Sithum](https://github.com/SVGamage), and [Ishan](https://github.com/IshanWarshamana) in October 2023. It is designed to assist hospitals in creating and managing schedules for healthcare professionals.


The application uses a combination of React for the frontend, Django for the backend, and MongoDB for the database. Firebase is used to host the frontend, while the backend is deployed on Heroku. MongoDB provides the database storage.

## YouTube demonstrating video 

[RosterMate - Constraint Based Roster Scheduler](https://youtu.be/jndi202d4PQ?si=H9p_l9tPqgkzv-Rk)

## Features

- Define and manage scheduling constraints.
- Create and assign different shift types (e.g., day shifts, night shifts, weekends).
- Collect staff information, including roles, skills, availability, and preferences.
- Automatically generate optimized schedules based on constraints and employee preferences.
- User-friendly interface for administrators to input data, view schedules, and make adjustments.
- Detailed testing and validation to ensure accuracy and reliability.
- Deployment on Firebase for the frontend, Heroku for the backend, and MongoDB for data storage.

## Deployment

#### Web : *https://rostermate-scheduler.web.app*

The application is deployed using the following services:

- Frontend: Firebase
- Backend: Heroku
- Database: MongoDB

## Getting Started

To run this application locally, follow these steps:

1. Clone the frontend repository:
  ```
  git clone https://github.com/RosterMate/RosterMate-Frontend.git
  ```

2. Set up the frontend:
- Navigate to the `frontend` directory.
- Install the required Node.js dependencies using `npm` or `yarn`:
  ```
  npm install
  ```
- Configure the frontend to communicate with your Django backend (e.g., update API endpoints).
- Start the development server:
  ```
  cd client
  npm start
  ```

3. Clone the backend repository:
```
git clone https://github.com/RosterMate/RosterMate-Backend.git
```

4. Set up the backend:
   
- Navigate to the `backend` directory.
- Install the required dependencies using `pip` or `pipenv` if you prefer:
  ```
  pip install -r requirements.txt
  ```
- Configure your Django settings, including database settings, security, and other environment-specific configurations.
- Run the Django development server:
  ```
  python manage.py runserver
  ```
  
5. Access the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you'd like to contribute to RosterMate, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them.
4. Submit a pull request.

## Contact

If you have questions or need assistance, you can contact the project developers:

- **Thejan Weerasekara:**
    - Email: [thejanbweerasekara@gmail.com](mailto:thejanbweerasekara@gmail.com)
    - LinkedIn: [linkedin.com/in/thejan-weerasekara](https://www.linkedin.com/in/thejan-weerasekara)
    - GitHub: [github.com/ThejanB](https://github.com/ThejanB)
- **Sithum Vihanga**
    - Email: [sithumvgamage@gmail.com](mailto:sithumvgamage@gmail.com)
    - LinkedIn: [linkedin.com/in/sithum-vihanga](https://www.linkedin.com/in/sithum-vihanga/)
    - GitHub: [github.com/SVGamage](https://github.com/SVGamage)
- **Ishan**
    - Email: [ishanwarshamana@gmail.com(mailto:ishanwarshamana@gmail.com)
    - LinkedIn: [linkedin.com/in/ishan-warshamana](https://www.linkedin.com/in/ishan-warshamana-60b5a7233/)
    - GitHub: [github.com/IshanWarshamana](https://github.com/IshanWarshamana)

Feel free to reach out with any inquiries or feedback.

#### Mobile View
![Mobile View](https://github.com/RosterMate/RosterMate-Frontend/assets/92569392/20fcf982-45d0-4ada-aeab-8676d52837dc)

#### Desktop View
![Desktop View](https://github.com/RosterMate/RosterMate-Frontend/assets/92569392/136c82d4-50fb-41f6-af09-3c58599ce358)

## License

This project is licensed under the [MIT License](LICENSE).

Thank you!

