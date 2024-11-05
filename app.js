// app.ts
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    event.preventDefault(); // Prevent form submission
    // Retrieve form data
    var formData = new FormData(event.target);
    var name = ((_a = formData.get('name')) === null || _a === void 0 ? void 0 : _a.toString()) || '';
    var email = ((_b = formData.get('email')) === null || _b === void 0 ? void 0 : _b.toString()) || '';
    var phone = ((_c = formData.get('phone')) === null || _c === void 0 ? void 0 : _c.toString()) || '';
    var address = ((_d = formData.get('address')) === null || _d === void 0 ? void 0 : _d.toString()) || '';
    var degree = ((_e = formData.get('degree')) === null || _e === void 0 ? void 0 : _e.toString()) || '';
    var university = ((_f = formData.get('university')) === null || _f === void 0 ? void 0 : _f.toString()) || '';
    var gradYear = ((_g = formData.get('gradYear')) === null || _g === void 0 ? void 0 : _g.toString()) || '';
    var company = ((_h = formData.get('company')) === null || _h === void 0 ? void 0 : _h.toString()) || '';
    var jobTitle = ((_j = formData.get('jobTitle')) === null || _j === void 0 ? void 0 : _j.toString()) || '';
    var duration = ((_k = formData.get('duration')) === null || _k === void 0 ? void 0 : _k.toString()) || '';
    var skills = ((_l = formData.get('skills')) === null || _l === void 0 ? void 0 : _l.toString()) || '';
    // Generate Resume
    generateResume(name, email, phone, address, degree, university, gradYear, company, jobTitle, duration, skills);
});
function generateResume(name, email, phone, address, degree, university, gradYear, company, jobTitle, duration, skills) {
    // Personal Info
    var personalInfo = "\n        <h3>Personal Information</h3>\n        <p>Name: ".concat(name, "</p>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <p>Address: ").concat(address, "</p>\n    ");
    document.getElementById('personalInfo').innerHTML = personalInfo;
    // Education Info
    var educationInfo = "\n        <h3>Education</h3>\n        <p>Degree: ".concat(degree, "</p>\n        <p>University/College: ").concat(university, "</p>\n        <p>Graduation Year: ").concat(gradYear, "</p>\n    ");
    document.getElementById('educationInfo').innerHTML = educationInfo;
    // Work Experience
    var workExperienceInfo = "\n        <h3>Work Experience</h3>\n        <p>Company: ".concat(company, "</p>\n        <p>Job Title: ").concat(jobTitle, "</p>\n        <p>Duration: ").concat(duration, "</p>\n    ");
    document.getElementById('workExperienceInfo').innerHTML = workExperienceInfo;
    // Skills
    var skillsInfo = "\n        <h3>Skills</h3>\n        <p>".concat(skills, "</p>\n   ");
    document.getElementById('skillsInfo').innerHTML = skillsInfo;
}
