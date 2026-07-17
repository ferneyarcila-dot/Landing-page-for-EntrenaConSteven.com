console.log("EntrenaConSteven listo 🚀");

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = form.email.value;

        try {

            const response = await fetch("/.netlify/functions/subscribe", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email,
                }),

            });

            if (!response.ok) {
                throw new Error("Error enviando a Brevo");
            }

            const link = document.createElement("a");
            link.href = "/assets/pdf/guia.pdf";
            link.download = "Guia-EntrenaConSteven.pdf";
            link.click();

            window.location.href = "/gracias.html";

        } catch (error) {

            console.error(error);

            alert("Hubo un error. Inténtalo nuevamente.");

        }

    });
}
