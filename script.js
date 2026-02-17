fetch("cv.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("cv");
    

  container.innerHTML += `
    <div class="header-wrapper">
        <div>
            <h1>${data.name}</h1>
            <p class="title">${data.title}</p>
            <p>
                Telefon: ${data.contact.phone} <br>
                E-posta: ${data.contact.email} <br>
                LinkedIn: ${data.contact.linkedin} <br>
                GitHub: ${data.contact.github}
            </p>
        </div>
        <img src="profile.jpg" alt="Profil Fotoğrafı" class="profile-img">
    </div>
`;


    

    

    container.innerHTML += `<h2>Hakkımda</h2><p>${data.about}</p>`;

    container.innerHTML += `<h2>Staj Deneyimlerim</h2>`;
    data.experience.forEach(exp => {
      container.innerHTML += `
        <p><strong>${exp.position} – ${exp.company} (${exp.date})</strong></p>
        <ul>
          ${exp.details.map(d => `<li>${d}</li>`).join("")}
        </ul>
      `;
    });

    container.innerHTML += `<h2>Eğitim</h2>
      <p>${data.education.school}<br>
      ${data.education.degree}<br>
      ${data.education.year}</p>`;

    container.innerHTML += `<h2>Projeler</h2>`;
    data.projects.forEach(project => {
      container.innerHTML += `
        <p><strong>${project.title}</strong></p>
        <p>${project.description}</p>
      `;
    });

    container.innerHTML += `<h2>Yabancı Dil</h2><p>${data.language}</p>`;
  });
