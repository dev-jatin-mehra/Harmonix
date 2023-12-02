const form = document.querySelector("form");
const Username = form.querySelector("#Username");
const UEmail = form.querySelector("#Uemail");
const UPassword = form.querySelector("#UPassword");

async function Register(event) {
    event.preventDefault();
    const name = Username.value;
    const email = UEmail.value;
    const password = UPassword.value;

    const data = { name, email, password };

    try {
        const response = await axios.post('http://localhost:4000/api/v1/users/register', data, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            console.log('Registration successful:', response.data);
            Username.value = UEmail.value = UPassword.value = ""; // Clear input fields
            alert("Registered Successfully!");

            // Redirect to home.html after successful registration
            window.location.href = '/frontend/public/index.html';
        } else {
            throw new Error('Unable to save note. Status: ' + response.status);
        }
    } catch (error) {
        console.error('Error saving note:', error);
    }
}

