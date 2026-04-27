import readline from "readline";

const rl = readline.createInterface (
    {
        input:process.stdin,
        output:process.stdout
    }
)

const todos =[];

const showMenu= () => {
    console.log("1: Add a Task");
    console.log("2: View Tasks");
    console.log("3: Exit");
    rl.question("Choose an Option:" , handleInput)
}

const handleInput =(option) =>{
    if(option ==="1"){
        rl.question("ENTER THE TASK:",(task)=>{
            todos.push(task);
            console.log("Task added :",task);
            showMenu()
        })
    } else if(option ==="2"){
        console.log("\n Your TO-DO Lists");
     todos.forEach((task,index) =>{
        console.log(`${index+1}. ${task}`);
     })
     showMenu()
    } else if(option === "3"){
        console.log("Good byee");
        rl.close();

    } else{
        console.log("Invalid Options. Please Try Again");
        showMenu();
    }
}

showMenu();