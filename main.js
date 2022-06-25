// $.ajax("https://reqres.in/api/users?delay=3", {
//     beforeSend: function(){
//         $(".icon").removeClass("d-none")
//       },
//     success : function(res){
//         console.log(res.data);
//         render(res.data)
//     },
//     complete : function(){
//         $(".icon").addClass("d-none")  
//       }
// })

// const { data } = require("jquery");

// function render(info){
//     info.map(item =>{
//         let card = `
//         <tr>
//         <td>${item.id}</td>
//         <td>${item.email}</td>
//         <td>${item.first_name}</td>
//         <td>@${item.last_name}</td>
//         <td><img class="rounded-1" src="${item.avatar}"></td>
//         </tr>
//         `
//         $("tbody").append(card)
//     })
// }




function fun(){
    // console.log(numb);
    $("btn").on("click", () =>{
        let id = $(".search").val()
        $.ajax(`https://reqres.in/api/users?page=${id}`, {
            success : function(res){
                console.log(res);
                let card = `
                    <div class="card">
                        <img class="img-fluid" src="${res.avatar}">
                        <h2>${res.id}</h2>
                    </div>
                `
                $("container").append(card)
                
            }
        })
        
    })

}