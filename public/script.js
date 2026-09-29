document.getElementById("databutton").addEventListener("click", async () => {
    const response = await fetch("/students");
    const data = await response.json();
    document.getElementById("detailsAll").textContent = "details fetched";
});

document.getElementById("addstubutton").addEventListener("click", async () => {
    const response = await fetch("/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body : JSON.stringify({
            student_id:document.getElementById("StudentID").value,
            name:document.getElementById("studentName").value,
            course:document.getElementById("studentCourse").value
        })
    });

    const message = response.json;
    document.getElementById("Addpara").textContent = "details Added successfully";
});

document.getElementById("submit2").addEventListener("click", async () => {
    const id = document.getElementById("NewId").value;
    const response = await fetch(`/students/${id}`);
    console.log("status : ", response.status);
    const data = await response.json();
    document.getElementById("detailpara").innerText = JSON.stringify(data);
});

document.getElementById("deleteAll").addEventListener("click", async () => {
    const response = await fetch("/students", {
        method: "delete",
    });

    const data = await response.json();

    document.getElementById("deleteDetails").innerText = JSON.stringify(data);
});

document.getElementById("deletespecific").addEventListener("click", async() => {
    const id = Number(document.getElementById("deleteid").value);
    const response = await fetch(`/students/${id}` , {
        method:"delete",
    });
    document.getElementById("deletespecificdetail").innerText = JSON.stringify("deleted successfully");
});

document.getElementById("changeAll").addEventListener("click", async () => {
    const id = Number(document.getElementById("changeId").value);
    const response = await fetch(`/students/${id}`, {
        method:"put",
        headers: {
            "Content-Type": "application/json"
        },

        body : JSON.stringify({
            name:document.getElementById("ChangeName").value,
            course:document.getElementById("ChangeCourse").value
        })
    });
    const update = await response.json();
    document.getElementById("changedata").innerText = JSON.stringify(update);
});

document.getElementById("changepartial").addEventListener("click", async () => {
    const id = Number(document.getElementById("changeId1").value);
    const response = await fetch(`/students/${id}`, {
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            name:document.getElementById("ChangeName1").value,
            course:document.getElementById("ChangeCourse1").value
        })
    });
    const update = await response.json();
    document.getElementById("updatevalue").innerText = JSON.stringify(update);
});