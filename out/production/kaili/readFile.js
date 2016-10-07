function handleFileSelect(evt) {
    //读取xml文件
    var files = evt.target.files;
    if (files[0]) {
        var reader = new FileReader();
        reader.readAsText(files[0]);
//        reader.onload = loaded;
        reader.onload = readXmlByJs;
    }
}

//按照设定的布局和样式显示
function loaded(evt) {
    var fileString = evt.target.result;
    // fileString = fileString.replace(/</g, "&lt");
    // fileString = fileString.replace(/>/g, "&gt");
    //分行存入数组
    fileString = fileString.split("\n");
    //正则表达式提取name="" 双引号间的字符串
    var regxName = /name="(.*?)"/;
    //提取每行的值
    var regxValue = />(.*?)</;

    var nameAndValue = new Map();

    var output = [];
    var i;

    for (i = 0; i < fileString.length; i++) {
        if (regxName.test(fileString[i])) {
            var name = regxName.exec(fileString[i]);
            output.push(name[1], '&nbsp&nbsp&nbsp&nbsp');
        }
        if (regxValue.test(fileString[i])) {
            var value = regxValue.exec(fileString[i]);
            output.push(value[1]);
        }
        output.push('<br/>');
    }

    //图片的保存路径
    var imgPath = location.href.substring(0, location.href.lastIndexOf('/')) + '/report/img/';

    // document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    document.getElementById("report-typename").innerHTML = "电子肠胃镜检查报告";
    document.getElementById("logo").src = imgPath + "hospitallogo.png";
    document.getElementsByName("姓名")[0].innerHTML = "测试姓名";
}

function readXmlByJs(evt) {
    var xmlDoc;
    if (window.DOMParser) { // Firefox, Chrome, Opera, etc.
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(evt.target.result, "text/xml");
    }
    else { // Internet Explorer
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(evt.target.result);
    }

    //相当于用二维数组保存所有标签
    var nodes = xmlDoc.documentElement.childNodes;
    //根据标签名取值
    alert(nodes[1].getElementsByTagName("LOGO")[0].textContent);
     // alert(nodes[1].childNodes[3].innerHTML + "aaaaaa");
}
