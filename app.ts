// app.ts

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const formData = new FormData(event.target as HTMLFormElement);

    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const address = formData.get('address')?.toString() || '';
    const degree = formData.get('degree')?.toString() || '';
    const university = formData.get('university')?.toString() || '';
    const gradYear = formData.get('gradYear')?.toString() || '';
    const company = formData.get('company')?.toString() || '';
    const jobTitle = formData.get('jobTitle')?.toString() || '';
    const duration = formData.get('duration')?.toString() || '';
    const skills = formData.get('skills')?.toString() || '';

    // Generate Resume
    generateResume(name, email, phone, address, degree, university, gradYear, company, jobTitle, duration, skills);
});

function generateResume(name: string, email: string, phone: string, address: string, degree: string, university: string, gradYear: string, company: string, jobTitle: string, duration: string, skills: string) {
    // Personal Info
    const personalInfo = `
        <h3>Personal Information</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
    `;
    document.getElementById('personalInfo')!.innerHTML = personalInfo;

    // Education Info
    const educationInfo = `
        <h3>Education</h3>
        <p>Degree: ${degree}</p>
        <p>University/College: ${university}</p>
        <p>Graduation Year: ${gradYear}</p>
    `;
    document.getElementById('educationInfo')!.innerHTML = educationInfo;

    // Work Experience
    const workExperienceInfo = `
        <h3>Work Experience</h3>
        <p>Company: ${company}</p>
        <p>Job Title: ${jobTitle}</p>
        <p>Duration: ${duration}</p>
    `;
    document.getElementById('workExperienceInfo')!.innerHTML = workExperienceInfo;

    // Skills
    const skillsInfo = `
        <h3>Skills</h3>
        <p>${skills}</p>
   ` ;
    document.getElementById('skillsInfo')!.innerHTML = skillsInfo;
}
