document.querySelector('#btn').onclick = function(){
    if(document.querySelector('#todo input').value.length == 0 || document.querySelector('#todo textarea').value.length == 0){
        alert("Kindly Enter both Task Name and Description!!!!")
    }
    else {
        document.querySelector('#upmain').innerHTML += `
        <div class="flex flex-col">
            <span class="upleft">&nbsp;&nbsp;${document.querySelector('#todo input').value}</span>
            <span class="upright">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${document.querySelector('#todo textarea').value}</span>
            <button class="upbtn">&times;</button>
        </div> `;

        var current_tasks = document.querySelectorAll(".upbtn");
        for(var i=0; i<current_tasks.length; i++)
        {
            current_tasks[i].onclick = function()
            {
                this.parentNode.remove();
            }
        }
    }
}