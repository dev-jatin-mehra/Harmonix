const form = document.querySelector("form");
const UEmail = form.querySelector("#Uemail");
const UPassword = form.querySelector("#UPassword");

async function Login(event) {
    event.preventDefault();
    const email = UEmail.value;
    const password = UPassword.value;

    const data = { email, password };

    try {
        const response = await axios.post('http://localhost:4000/api/v1/users/login', data, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            console.log('Login successful:', response.data);
            UEmail.value = UPassword.value = ""; // Clear input fields
            alert("Login Successfully!");

            // Redirect to home.html after successful registration
            window.location.href = '/frontend/public/index.html';
        } else {
            throw new Error('Unable to save note. Status: ' + response.status);
        }
    } catch (error) {
        console.error('Error saving note:', error);
    }
}

