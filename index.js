// function showStuIfo(stuIfo) {
//     for(let i = 0;i<stuIfo.length;i++)
//     {
//         let newtd = "<tr><td>"+stuIfo[i].name+"</td><td>"+stuIfo[i].id+"</td><td>"+stuIfo[i].eth+"</td><td>"+stuIfo[i].klass
//         +"</td><td>"+stuIfo[i].grade.chin+"</td><td>"+stuIfo[i].grade.math+"</td><td>"+stuIfo[i].grade.eng+"</td><td>"+stuIfo[i].grade.code+"</td></tr>>";
//         document.getElementById("content").insertAdjacentHTML("beforeEnd", newtd);
//     }
// }
// let stuIfo = [
//     {name:'郑永可',id:"2015211007",eth:'汉',klass:1503,grade:{chin:99,math:100,eng:99,code:99}},
//     {name:'熊行野',id:"2015211017",eth:'汉',klass:1503,grade:{chin:100,math:100,eng:99,code:96}},
//     {name:'孙明东',id:"2015211019",eth:'汉',klass:1503,grade:{chin:99,math:100,eng:99,code:95}}
// ];
// let obj = JSON.parse(localStorage.stuIfoList);
// if(!stuIfo.every(function (key) {
//         obj.indexOf(key);
//     })) {
//     for (let i = 0; i < stuIfo.length; i++) {
//         if (obj.indexOf(stuIfo[i]) < 0) {
//             obj.push(stuIfo[i]);
//         }
//     }
//     str = JSON.stringify(obj);
//     localStorage.setItem('stuIfoList', str);
//     for (let i = 0; i < obj.length; i++) {
//         let newtd =
//             "<tr>" +
//             "<td>" + obj[i].name + "</td>" +
//             "<td>" + obj[i].id + "</td>" +
//             "<td>" + obj[i].eth + "</td>" +
//             "<td>" + obj[i].klass + "</td>" +
//             "<td>" + obj[i].grade.chin + "</td>" +
//             "<td>" + obj[i].grade.math + "</td>" +
//             "<td>" + obj[i].grade.eng + "</td>" +
//             "<td>" + obj[i].grade.code + "</td>" +
//             "</tr>";
//         $('#allIfo').append(newtd);
//     }
// }
window.onload=showIfo();
function showIfo() {
    if(typeof localStorage.stuIfoList ==='undefined')
    {
        let objj = [];
        let str = JSON.stringify(objj);
        localStorage.setItem('stuIfoList',str);
    }
    let obj = JSON.parse(localStorage.stuIfoList);
    $('#allBody').html(' ');
    for (let i = 0; i < obj.length; i++) {
        let newtd =
            "<tr>" +
            "<td>" + obj[i].name + "</td>" +
            "<td>" + obj[i].id + "</td>" +
            "<td>" + obj[i].eth + "</td>" +
            "<td>" + obj[i].klass + "</td>" +
            "<td>" + obj[i].grade.chin + "</td>" +
            "<td>" + obj[i].grade.math + "</td>" +
            "<td>" + obj[i].grade.eng + "</td>" +
            "<td>" + obj[i].grade.code + "</td>" +
            "</tr>";
        $('#allIfo').append(newtd);
    }
    if(typeof localStorage.delStuIfoList ==='undefined')
    {
        let objj = [];
        let str = JSON.stringify(objj);
        localStorage.setItem('delStuIfoList',str);
    }
    let deleteobj = JSON.parse(localStorage.delStuIfoList);
    $('#deleteBody').html(' ');
    for (let i = 0; i < deleteobj.length; i++) {
        let newtd =
            "<tr>" +
            "<td>" + deleteobj[i].name + "</td>" +
            "<td>" + deleteobj[i].id + "</td>" +
            "<td>" + deleteobj[i].eth + "</td>" +
            "<td>" + deleteobj[i].klass + "</td>" +
            "<td>" + deleteobj[i].grade.chin + "</td>" +
            "<td>" + deleteobj[i].grade.math + "</td>" +
            "<td>" + deleteobj[i].grade.eng + "</td>" +
            "<td>" + deleteobj[i].grade.code + "</td>" +
            "</tr>";
        $('#deleteTab').append(newtd);
    }
}
let button1 = document.getElementById('submit1');
button1.addEventListener('click',checkAdd);
function checkAdd() {
    event.preventDefault();
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
    let reg = /^[\u4e00-\u9fa5]{2,},\d{10},[\u4e00-\u9fa5]+,\d+,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?$/;
    let str = `${stu.name},${stu.id},${stu.eth},${stu.klass},${stu.grade.chin},${stu.grade.math},${stu.grade.eng},${stu.grade.code}`;
    if(reg.test(str))
    {
        insertt(stu);
    }
    else
    {
        layer.alert("信息插入格式不正确！");
    }
}
function insertt(stu) {
    let obj = JSON.parse(localStorage.stuIfoList);
    if(obj.some(function (key) {
        return (key.id===stu.id);
    }))
    {
        layer.alert("信息插入重复！");
    }
    else
    {
        obj.push(stu);
        let str = JSON.stringify(obj);
        localStorage.setItem('stuIfoList',str);
        showIfo();
    }
}
let button2 = document.getElementById('submit2');
button2.addEventListener('click',checkIns);
function checkIns() {
    event.preventDefault();
    let id = document.getElementById("exampleInputName2").value;
    let reg = /^\d{10}$/;
    if(reg.test(id))
    {
        selectt(id);
    }
    else
    {
        layer.alert("信息插入格式不正确！");
    }
}
function selectt(id) {
    $('#selectBody').html('');
    let obj = JSON.parse(localStorage.stuIfoList);
    for(let i = 0;i<obj.length;i++)
    {
        if(obj[i].id===id)
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
            console.log(id);
            $('#selectTab').append(newtd);
            break;
        }
        else if(i===obj.length-1)
        {
            layer.alert("成绩单中未存储该学生信息！");
        }
    }
}
let button3 = document.getElementById('submit3');
button3.addEventListener('click',checkDel);
function checkDel() {
    event.preventDefault();
    let id = document.getElementById("deleteId").value;
    let reg = /^\d{10}$/;
    if(reg.test(id))
    {
        deletee(id);
    }
    else
    {
        layer.alert("信息插入格式不正确！");
    }
}
function deletee(id) {
    $('#selectBody').html('');
    let obj = JSON.parse(localStorage.stuIfoList);
    let delObj = JSON.parse(localStorage.delStuIfoList);
    for(let i = 0;i<obj.length;i++)
    {
        if(obj[i].id===id)
        {
            delObj.push(obj[i]);
            obj.splice(i,1);
            let str = JSON.stringify(obj);
            let delStr = JSON.stringify(delObj);
            localStorage.setItem('stuIfoList',str);
            localStorage.setItem('delStuIfoList',delStr);
            showIfo();
        }
        else if(i===obj.length-1)
        {
            layer.alert("成绩单中未存储该学生信息！");
        }
    }
}
let button4 = document.getElementById('submit4');
button4.addEventListener('click',deleteall);
function deleteall() {
    let obj = [];
    let str = JSON.stringify(obj);
    localStorage.setItem('delStuIfoList',str);
    showIfo();
}
let button5 = document.getElementById('submit5');
button5.addEventListener('click',checkUpd);
function checkUpd() {
    event.preventDefault();
    let id = document.getElementById("exampleInputName2").value;
    let reg = /^\d{10}$/;
    if(reg.test(id))
    {
        updatee(id);
    }
    else
    {
        layer.alert("信息插入格式不正确！");
    }
}
function updatee(id) {
    let obj = JSON.parse(localStorage.stuIfoList);
    let stu = {};
    for(let i = 0;i<obj.length;i++)
    {
        if(obj[i].id===id)
        {
            stu=obj[i];
            obj.splice(i,1);
        }
    }
    let showContent = `
    <form class="container" id="updStuIfo" name="updStuIfo">
        <div class="form-group ">
            <div class="row">
                <div class="col-md-6">
                    <label for="updname">姓名</label>
                    <input class="form-control" type="text" name="updname" id="updname" value="${stu.name}">
                </div>
                <div class="col-md-6">
                    <label for="updid">学号</label>
                    <input class="form-control" type="text" name="updid" id="updid" value="${stu.id}">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label for="updeth">民族</label>
                    <select class="form-control" name="stueth" id="updeth">
                        <option value="${stu.eth}" selected>${stu.eth}</option>
                        <option value="汉">汉族</option>
                        <option value="藏">藏族</option>
                        <option value="满">满族</option>
                        <option value="其他">其他</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="updklass">班级</label>
                    <select class="form-control" name="stuklass" id="updklass">
                        <option value="${stu.klass}" selected>${stu.klass}</option>
                        <option value="1501">1501</option>
                        <option value="1502">1502</option>
                        <option value="1503">1503</option>
                        <option value="1504">1504</option>
                        <option value="1505">1505</option>
                    </select>
                </div>
            </div>
        </div>
        <div class=row>
            <div class="col-md-3">
                <label for="updchin">语文</label>
                <input class="form-control" type="text" name="chin" id="updchin" value="${stu.grade.chin}">
            </div>
            <div class="col-md-3">
                <label for="updmath">数学</label>
                <input class="form-control" type="text" name="math" id="updmath" value="${stu.grade.math}">
            </div>
            <div class="col-md-3">
                <label for="updeng">英语</label>
                <input class="form-control" type="text" name="eng" id="updeng" value="${stu.grade.eng}">
            </div>
            <div class="col-md-3">
                <label for="updcode">编程</label>
                <input class="form-control" type="text" name="code" id="updcode" value="${stu.grade.code}">
            </div>
        </div>
    </form>`;
    layer.open({
        type: 1,
        title: stu.id,
        btn:['保存','退出'],
        yes:function () {
            let myForm=$("#updStuIfo").serializeArray();
            let newStu = {name:'',id:'',eth:'',klass:'',grade:{chin:0,math:0,eng:0,code:0}};
            newStu.name = myForm[0].value;
            newStu.id = myForm[1].value;
            newStu.eth = myForm[2].value;
            newStu.klass = myForm[3].value;
            newStu.grade.chin = myForm[4].value;
            newStu.grade.math = myForm[5].value;
            newStu.grade.eng = myForm[6].value;
            newStu.grade.code = myForm[7].value;
            let reg = /^[\u4e00-\u9fa5]{2,},\d{10},[\u4e00-\u9fa5]+,\d+,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?$/;
            let str = `${newStu.name},${newStu.id},${newStu.eth},${newStu.klass},${newStu.grade.chin},${newStu.grade.math},${newStu.grade.eng},${newStu.grade.code}`;
            if(reg.test(str))
            {
                if(obj.some(function (key) {
                        return (key.id===newStu.id)
                    }))
                {
                    layer.alert("信息已存在！");
                }
                else
                {
                    obj.push(newStu);
                    str = JSON.stringify(obj);
                    localStorage.setItem('stuIfoList',str);
                    showIfo();
                }
            }
            else
            {
                layer.alert("信息插入格式不正确！");
            }
        },
        area:['1300px', '400px'],
        content: showContent
    });
}