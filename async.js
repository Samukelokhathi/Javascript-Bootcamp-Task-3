const studentDatabase = [
    { "first-name": "Bayanda", "last-name": "Zuma", age: 18, email: "zuma123@gmail.com", "course": "Cyber Security" },
    { "first-name": "Sanele", "last-name": "Mbatha", age: 20, email: "mbata123@gmail.com", "course": "Administrator" },
    { "first-name": "Zanele", "last-name": "Mthembu", age: 30, email: "mazet23@gmail.com", "course": "Medicine" },
    { "first-name": "Snethemba", "last-name": "Goqo", age: 26, email: "sne@gmail.com", "course": "Law" },
    { "first-name": "Neliswa", "last-name": "Ngobese", age: 21, email: "mangobese90@gmail.com", "course": "Software Development" },
]



function demonstrateSyncExecution() {
    console.log("Step-1 - The function is starting")
    console.log("Step-2 -  The Process is in action")
    console.log("Step-3 - The function reached the final stage")
}


demonstrateSyncExecution()


function displayStudentRec() {
    studentDatabase.forEach((result) => {
        console.log(result)
    })
}


setTimeout(displayStudentRec, 3000)