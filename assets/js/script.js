console.log("EntrenaConSteven listo 🚀");

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData(form);

            await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            // Descargar la guía
            const link = document.createElement("a");
            link.href = "/assets/pdf/guia.pdf";
            link.download = "Guia-EntrenaConSteven.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Redirigir
            window.location.href = "/gracias.html";

        } catch (error) {
            console.error("Error enviando el formulario:", error);
            alert("Ocurrió un error. Inténtalo nuevamente.");
        }
    });
}
