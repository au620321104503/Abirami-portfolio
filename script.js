const roles = ['Web Designer', 'Frontend Developer', 'Freelancer'];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        document.querySelector('.typing').textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 150);
    } else {
        setTimeout(deleteRole, 2000);
    }
}

function deleteRole() {
    if (charIndex > 0) {
        document.querySelector('.typing').textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, 100);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeRole();
});
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});