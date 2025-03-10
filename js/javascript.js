// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('button');
//     const sections = document.querySelectorAll('div[class^="section"]');

//     function showSection(sectionToShow) {
//         sections.forEach(section => {
//             if (section.classList.contains(sectionToShow)) {
//                 section.classList.remove('sectionnone');
//             } else {
//                 section.classList.add('sectionnone');
//             }
//         });
//     }


//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             if (button.classList.contains('button_sectionfirst')) {
//                 showSection('sectionpink');
//             } else if (button.classList.contains('button_sectionsecond')) {
//                 showSection('sectionbw');
//             }
//         });
//     });

//     showSection('sectionbw');
// });
