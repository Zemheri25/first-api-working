let container = document.querySelector(".container");

async function  asyncgetApi(url) {
    try {
    let state1 = await fetch(url);
    let state2 = await state1.json();
    return state2
    }catch {
        throw new Error("something went wrong!")
    }
};

asyncgetApi("https://jsonplaceholder.typicode.com/albums").then(item => {
    for(let i of item) {
        container.innerHTML += `
        <div class="box">
            <h1>userId : <span> ${i.userId} </span></h1>
            <h2>id : <span> ${i.id} </span></h2>
            <h3>title : <span> ${i.title} </span></h3>
        </div>
        `
    }
})






