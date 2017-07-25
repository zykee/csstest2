// function showStuIfo(stuIfo) {
//     for(let i = 0;i<stuIfo.length;i++)
//     {
//         let newtd = "<tr><td>"+stuIfo[i].name+"</td><td>"+stuIfo[i].id+"</td><td>"+stuIfo[i].eth+"</td><td>"+stuIfo[i].klass
//         +"</td><td>"+stuIfo[i].grade.chin+"</td><td>"+stuIfo[i].grade.math+"</td><td>"+stuIfo[i].grade.eng+"</td><td>"+stuIfo[i].grade.code+"</td></tr>>";
//         document.getElementById("content").insertAdjacentHTML("beforeEnd", newtd);
//     }
// }
myStorage = localStorage;
let obj = [];
let str = JSON.stringify(obj);
myStorage.setItem('stuIfoList',str);
let stuIfo = [
    {name:'郑永可',id:2015211007,eth:'汉',klass:1503,grade:{chin:99,math:100,eng:99,code:99}},
    {name:'熊行野',id:2015211017,eth:'汉',klass:1503,grade:{chin:100,math:100,eng:99,code:96}},
    {name:'孙明东',id:2015211019,eth:'汉',klass:1503,grade:{chin:99,math:100,eng:99,code:95}}
];
obj = JSON.parse(myStorage.stuIfoList);
if(!stuIfo.every(function (key) {
        obj.indexOf(key);
    }))
{
    for(let i = 0;i<stuIfo.length;i++)
    {
        if(obj.indexOf(stuIfo[i])<0)
        {
            obj.push(stuIfo[i]);
        }
    }
    str = JSON.stringify(obj);
    myStorage.setItem('stuIfoList',str);
}
for(let i = 0;i<obj.length;i++)
{
    let newtd =
        "<tr>" +
        "<td>"+obj[i].name+"</td>" +
        "<td>"+obj[i].id+"</td>" +
        "<td>"+obj[i].eth+"</td>" +
        "<td>"+obj[i].klass+"</td>" +
        "<td>"+obj[i].grade.chin+"</td>" +
        "<td>"+obj[i].grade.math+"</td>" +
        "<td>"+obj[i].grade.eng+"</td>" +
        "<td>"+obj[i].grade.code+"</td>" +
        "</tr>";
    $('#allIfo').append(newtd);
}
let button1 = document.getElementById('submit');
button1.addEventListener('click',insertt);
function insertt() {
    event.preventDefault();
    // let myForm = document.getElementById('insertStuIfo');
    let myForm=$("#insertStuIfo").serializeArray();
    let stu = {name:'',id:'',eth:'',klass:'',grade:{chin:0,math:0,eng:0,code:0}};
    stu.name = myForm[0].value;
    stu.id = myForm[1].value;
    stu.eth = myForm[2].value;
    stu.klass = myForm[3].value;
    stu.grade.chin = myForm[4].value;
    stu.grade.math = myForm[5].value;
    stu.grade.eng = myForm[6].value;
    stu.grade.code = myForm[7].value;
    obj.push(stu);
    str = JSON.stringify(obj);
    myStorage.setItem('stuIfoList',str);
    console.log(str);
    let newtd =
        "<tr>" +
        "<td>"+stu.name+"</td>" +
        "<td>"+stu.id+"</td>" +
        "<td>"+stu.eth+"</td>" +
        "<td>"+stu.klass+"</td>" +
        "<td>"+stu.grade.chin+"</td>" +
        "<td>"+stu.grade.math+"</td>" +
        "<td>"+stu.grade.eng+"</td>" +
        "<td>"+stu.grade.code+"</td>" +
        "</tr>";
    $('.table').append(newtd);
}
let button2 = document.getElementById('submit2');
button2.addEventListener('click',selectt);
function selectt() {
    event.preventDefault();
    // let myForm = document.getElementById('insertStuIfo');
    let myForm=$("#selectIfOne").serializeArray();
    let stu = {name:'',id:'',eth:'',klass:'',grade:{chin:0,math:0,eng:0,code:0}};
    stu.name = myForm[0].value;
    stu.id = myForm[1].value;
    stu.eth = myForm[2].value;
    stu.klass = myForm[3].value;
    stu.grade.chin = myForm[4].value;
    stu.grade.math = myForm[5].value;
    stu.grade.eng = myForm[6].value;
    stu.grade.code = myForm[7].value;
    obj.push(stu);
    str = JSON.stringify(obj);
    myStorage.setItem('stuIfoList',str);
    console.log(str);
    let newtd =
        "<tr>" +
        "<td>"+stu.name+"</td>" +
        "<td>"+stu.id+"</td>" +
        "<td>"+stu.eth+"</td>" +
        "<td>"+stu.klass+"</td>" +
        "<td>"+stu.grade.chin+"</td>" +
        "<td>"+stu.grade.math+"</td>" +
        "<td>"+stu.grade.eng+"</td>" +
        "<td>"+stu.grade.code+"</td>" +
        "</tr>";
    $('.table').append(newtd);
}