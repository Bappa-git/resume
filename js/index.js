const header=document.getElementById("header");



let currentTask = 1;

const taskButton = document.querySelector('.toggleBtn');
taskButton.addEventListener('click', () => {
    if (currentTask === 1) {
        // Perform first task
        header.style.display="block";
    //    header.style.position="absolute";
        // home.style.width="100%";

      
        
    } else if (currentTask === 2) {
        // Perform second task
        header.style.display="none";
        home.style.width="100%";
    }

    // Toggle current task
    currentTask = (currentTask === 1) ? 2 : 1;
});