function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("show")

    document    
        .addEventListener("click",(e) => {
        if(e.target.id == 'modal'){
            document
                .querySelector("#modal")
                .classList
                .remove("show")
        }
    })
}