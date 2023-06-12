const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createImcompleteList(inputText);
}

const completeEvent = (inputText)=>{
    console.log(inputText)
    const div = document.createElement("div");
    div.className = "list-row";
    const li = document.createElement("li");
    li.innerText = inputText;
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click",()=>{
        const deleteTarget = returnButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);

        const text = returnButton.parentNode.firstElementChild.innerText;
        createImcompleteList(text);
    })
    div.appendChild(li);
    div.appendChild(returnButton)

    document.getElementById("complete-list").appendChild(div)
}

const deleteFromInCompleteList = (target)=>{
    document.getElementById("incomplete-list").removeChild(target)
}

const createImcompleteList=(text)=>{
    const div = document.createElement("div");
    div.className = "list-row";
    const li = document.createElement("li");
    li.innerText = text;
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click",()=>{

        deleteFromInCompleteList(completeButton.parentNode)

        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;
        completeEvent(text)
    })
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click",()=>{
        deleteFromInCompleteList(completeButton.parentNode)
    })

    div.appendChild(li);
    div.appendChild(completeButton)
    div.appendChild(deleteButton)

    document.getElementById("incomplete-list").appendChild(div)

    console.log(li)
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());