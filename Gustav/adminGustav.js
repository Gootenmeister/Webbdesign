//skillbarAnim
document.getElementById('skills').addEventListener('click', function() {
    const skillbars = document.getElementById('skillbars');
    skillbars.classList.toggle('hidden');

    const skillbarFills = document.querySelectorAll('.skillbar-fill');
    const skillbarTitles = document.querySelectorAll('.skillbar-title');

    if (!skillbars.classList.contains('hidden')) {
        skillbarTitles.forEach(skillbarTitle => {
            skillbarTitle.style.opacity = '1'; 
        });
        
            //hol up
        setTimeout(() => {
            const widths = ['90%', '80%', '70%', '5%']; //vals
            skillbarFills.forEach((skillbarFill, index) => {
                skillbarFill.style.width = widths[index];
            });
        }, 300);
    } else {
        skillbarFills.forEach(skillbarFill => {
            skillbarFill.style.width = '0'; //döljer skillbrs
        });

        skillbarTitles.forEach(skillbarTitle => {
            skillbarTitle.style.opacity = '0';
        });
    }
});
