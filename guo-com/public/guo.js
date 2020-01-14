// function jsonp(url) {
//     return new Promise((resolve,reject)=>{
//         const random ='guoJSONPCallBackName'+ Math.random()
//         window[random] = data=>{
//             resolve(data)
//         }
//         const script = document.createElement('script')
//         script.src = `${url}?callback=${random}`
//         script.onload=()=>{
//             script.remove()
//         }
//         script.onerror=()=>{
//             reject()
//         }
//         document.body.appendChild(script)
//     })  
// }

// jsonp('http://localhost:8888/friends.js')
//     .then((data)=>{
//         console.log(data)
//     })

const request = new XMLHttpRequest()
request.open('GET','http://localhost:8888/friends.json')
request.onreadystatechange =()=>{
    if(request.readyState === 4){
        if(request.status >=200 && request.status <400){
            console.log(request.response)
        }
        
    }
}
request.send()