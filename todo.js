//alert('js connected')

// var h =  document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

var ul = document.getElementById('list');
var li;
let pp = document.querySelector('#remove').children

function addItem(){
       let input = document.getElementById('input');
       let item = input.value; 
       var textnode = document.createTextNode(item)

       if (item ==='') {
           if(pp[0]==null)
           {
            var p =  document.createElement('p')
            p.className = 'pp'
            var myValue = document.createTextNode('*First enter value')
            p.appendChild(myValue)
            document.querySelector('#remove').appendChild(p)
           }
       } else {

        //create li
            li = document.createElement('li')
            li.setAttribute('class','mycheck')

        //create checkbox    
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.setAttribute('id','check')
           
        //create label   
            let label =document.createElement('label')

        // add these elemnt on webpage    
            label.appendChild(textnode)
            li.appendChild(checkbox)
            li.appendChild(label)
            document.querySelector('ul').insertBefore(li,ul.childNodes[0])
            li.className = 'visual'
          
           input.value = ''
           
           document.querySelector('#remove').removeChild(pp[0])
        }
}

function removeItem(){
    // let item = document.querySelectorAll('li')
    // console.log(item[0])
    // item[0].remove();

    // let item = ul.children
    // ul.removeChild(item[0])

    li = ul.children
    for (let index = 0; index < li.length; index++){
    //     while(li[index] && li[index].children[0].checked){
    //         ul.removeChild(li[index])
    //     }
            if(li[index].children[0].checked){
                ul.removeChild(li[index])
            } 
     }
}
