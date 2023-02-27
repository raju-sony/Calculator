let output = document.getElementById("in");
function display(num) {
    output.value += num;
}
function calculate() {
    try {
        output.value = eval(output.value);
    }
    catch (err) {
        document.getElementById("dev").style.display = "block";
    }
}
function click1(x) {
    flag = flag + x;
    check(flag);
}
let flag = 0;
check(flag);
function check(num) {
    var all = [document.getElementById("all"), document.getElementById("all2"), document.getElementById("all3"), document.getElementById("all4")];
    if (num == all.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = all.length - 1;
        num = all.length - 1;
    }
    for (let y of all) {
        y.style.display = "none";
    }
    all[num].style.display = "flex";
}

function func() {
    document.getElementById("fun").onclick(document.getElementById("type").style.display="block");
}
function fun1() {
    document.getElementById("type").style.display = "none";
}
function Clear() {
    output.value = output.value.slice(0, -1);
}
function del() {
    output.value = "";
}

let output1 = document.getElementById("in1");
let output2 = document.getElementById("in2");
function get(num1) {
    output1.value += num1;
}
function Clear1() {
    output1.value = output1.value.slice(0, -1);
}
function del1() {
    output2.value = "";
}
function hide() {
    document.getElementById("ok").onclick(document.getElementById("dev").style.display = "none");
}
function result() {
    let text = parseInt(document.getElementById("in1").value);
    let option1 = document.getElementById("select1").value;
    let text2 = parseInt(document.getElementById("in2").value);
    let option2 = document.getElementById("select2").value;
    if ((option1 == "Kilogram (kg)") && (option2 == "Kilogram (kg)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Kilogram (kg)") && (option2 == "Gram (g)")) {
        text2 = text * 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Kilogram (kg)") && (option2 == "Pound (lbs)")) {
        text2 = text * 2.2;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Kilogram (kg)") && (option2 == "Tonne (ton)")) {
        text2 = text / 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Gram (g)") && (option2 == "Gram (g)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Gram (g)") && (option2 == "Kilogram (kg)")) {
        text2 = text / 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Gram (g)") && (option2 == "Pound (lbs)")) {
        text2 = text / 453.6;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Gram (g)") && (option2 == "Tonne (ton)")) {
        text2 = text / 1000000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Pound (lbs)") && (option2 == "Pound (lbs)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Pound (lbs)") && (option2 == "Kilogram (kg)")) {
        text2 = text / 2.2;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Pound (lbs)") && (option2 == "Tonne (ton)")) {
        text2 = text / 2205;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Pound (lbs)") && (option2 == "Gram (g)")) {
        text2 = text * 453.6;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Tonne (ton)") && (option2 == "Tonne (ton)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Tonne (ton)") && (option2 == "Kilogram (kg)")) {
        text2 = text * 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Tonne (ton)") && (option2 == "Gram (g)")) {
        text2 = text * 1000000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Tonne (ton)") && (option2 == "Pound (lbs)")) {
        text2 = text * 2205;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Litre (l)") && (option2 == "Litre (l)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Litre (l)") && (option2 == "Mililitre (ml)")) {
        text2 = text * 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Mililitre (ml)") && (option2 == "Mililitre (ml)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Mililitre (ml)") && (option2 == "Litre (l)")) {
        text2 = text / 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Inch (inch)") && (option2 == "Inch (inch)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Inch (inch)") && (option2 == "Foot (ft)")) {
        text2 = text / 12;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Inch (inch)") && (option2 == "Yard (yd)")) {
        text2 = text / 36;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Inch (inch)") && (option2 == "Metre (m)")) {
        text2 = text / 39.37;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Inch (inch)") && (option2 == "Kilometre (km)")) {
        text2 = text / 39370;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Inch (inch)") && (option2 == "Centimetre (cm)")) {
        text2 = text * 2.54;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Inch (inch)") && (option2 == "Milimetre (mm)")) {
        text2 = text * 25.4;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Foot (ft)") && (option2 == "Foot (ft)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Foot (ft)") && (option2 == "Inch (inch)")) {
        text2 = text * 12;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Foot (ft)") && (option2 == "Yard (yd)")) {
        text2 = text / 3;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Foot (ft)") && (option2 == "Kilometre (km)")) {
        text2 = text / 3281;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Foot (ft)") && (option2 == "Metre (m)")) {
        text2 = text / 3.281;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Foot (ft)") && (option2 == "Centimetre (cm)")) {
        text2 = text * 30.48;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Foot (ft)") && (option2 == "Milimetre (mm)")) {
        text2 = text * 304.8;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Yard (yd)") && (option2 == "Yard (yd)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Yard (yd)") && (option2 == "Inch (inch)")) {
        text2 = text * 36;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Yard (yd)") && (option2 == "Foot (ft)")) {
        text2 = text * 3;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Yard (yd)") && (option2 == "Kilometre (km)")) {
        text2 = text / 1094;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Yard (yd)") && (option2 == "Metre (m)")) {
        text2 = text / 1.094;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Yard (yd)") && (option2 == "Centimetre (cm)")) {
        text2 = text * 91.44;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Yard (yd)") && (option2 == "Milimetre (mm)")) {
        text2 = text * 914.4;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Kilometre (km)") && (option2 == "Kilometre (km)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Kilometre (km)") && (option2 == "Inch (inch)")) {
        text2 = text * 39370;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Kilometre (km)") && (option2 == "Foot (ft)")) {
        text2 = text * 3281;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Kilometre (km)") && (option2 == "Yard (yd)")) {
        text2 = text * 1094;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Kilometre (km)") && (option2 == "Metre (m)")) {
        text2 = text * 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Kilometre (km)") && (option2 == "Centimetre (cm)")) {
        text2 = text * 100000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Kilometre (km)") && (option2 == "Milimetre (mm)")) {
        text2 = text * 1000000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Metre (m)") && (option2 == "Metre (m)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Metre (m)") && (option2 == "Inch (inch)")) {
        text2 = text * 39.37;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Metre (m)") && (option2 == "Foot (ft)")) {
        text2 = text * 3.281;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Metre (m)") && (option2 == "Yard (yd)")) {
        text2 = text * 1.094;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Metre (m)") && (option2 == "Kilometre (km)")) {
        text2 = text / 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Metre (m)") && (option2 == "Centimetre (cm)")) {
        text2 = text * 100;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Metre (m)") && (option2 == "Milimetre (mm)")) {
        text2 = text * 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Centimetre (cm)") && (option2 == "Centimetre (cm)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Centimetre (cm)") && (option2 == "Inch (inch)")) {
        text2 = text / 2.54;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Centimetre (cm)") && (option2 == "Foot (ft)")) {
        text2 = text / 30.48;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Centimetre (cm)") && (option2 == "Yard (yd)")) {
        text2 = text / 91.44;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Centimetre (cm)") && (option2 == "Kilometre (km)")) {
        text2 = text / 100000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Centimetre (cm)") && (option2 == "Metre (m)")) {
        text2 = text / 100;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Centimetre (cm)") && (option2 == "Milimetre (mm)")) {
        text2 = text * 10;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Milimetre (mm)") && (option2 == "Milimetre (mm)")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option1 == "Milimetre (mm)") && (option2 == "Inch (inch)")) {
        text2 = text / 25.4;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Milimetre (mm)") && (option2 == "Foot (ft)")) {
        text2 = text / 304.8;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Milimetre (mm)") && (option2 == "Yard (yd)")) {
        text2 = text / 914.4;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Milimetre (mm)") && (option2 == "Kilometre (km)")) {
        text2 = text / 1000000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Milimetre (mm)") && (option2 == "Metre (m)")) {
        text2 = text / 1000;
        document.getElementById("in2").value = text2;
    }
    if ((option1 == "Milimetre (mm)") && (option2 == "Centimetre (cm)")) {
        text2 = text / 10;
        document.getElementById("in2").value = text2;
    }
}
let output3 = document.getElementById("in3");
let output4 = document.getElementById("in4");
function gets(num2) {
    output3.value += num2;
}
function Clear2() {
    output3.value = output3.value.slice(0, -1);
}
function del2() {
    output4.value = "";
}
function result1() {
    let text1 = parseInt(document.getElementById("in3").value);
    let option3 = document.getElementById("select3").value;
    let text3 = parseInt(document.getElementById("in4").value);
    let option4 = document.getElementById("select4").value;
    if ((option3 == "Celsius") && (option4 == "Celsius")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option3 == "Celsius") && (option4 == "Fahrenheit")) {
        text3 = (text1 * 9 / 5) + 32;
        document.getElementById("in4").value = text3;
    }
    if ((option3 == "Celsius") && (option4 == "Kelvin")) {
        text3 = (text1 + 273.15);
        document.getElementById("in4").value = text3;
    }
    if ((option3 == "Fahrenheit") && (option4 == "Fahrenheit")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option3 == "Fahrenheit") && (option4 == "Celsius")) {
        text3 = (text1 - 32) * 5 / 9;
        document.getElementById("in4").value = text3;
    }
    if ((option3 == "Fahrenheit") && (option4 == "Kelvin")) {
        text3 = (text1 - 32) * 5 / 9 + 273.15;
        document.getElementById("in4").value = text3;
    }
    if ((option3 == "Kelvin") && (option4 == "Kelvin")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option3 == "Kelvin") && (option4 == "Celsius")) {
        text3 = (text1 - 273.15);
        document.getElementById("in4").value = text3;
    }
    if ((option3 == "Kelvin") && (option4 == "Fahrenheit")) {
        text3 = (text1 - 273.15) * 9 / 5 + 32;
        document.getElementById("in4").value = text3;
    }
}
let output5 = document.getElementById("in5");
let output6 = document.getElementById("in6");
function gets1(num3) {
    output5.value += num3;
}
function Clear3() {
    output5.value = output5.value.slice(0, -1);
}
function del3() {
    output6.value = "";
}
function result2() {
    let text4 = parseInt(document.getElementById("in5").value);
    let option5 = document.getElementById("select5").value;
    let text5 = parseInt(document.getElementById("in6").value);
    let option6 = document.getElementById("select6").value;
    if ((option5 == "Year") && (option6 == "Year")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option5 == "Year") && (option6 == "Month")) {
        text5 = text4 * 12;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Year") && (option6 == "Week")) {
        text5 = text4 * 52.143;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Year") && (option6 == "Day")) {
        text5 = text4 * 365;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Year") && (option6 == "Hour")) {
        text5 = text4 * 8760;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Year") && (option6 == "Minute")) {
        text5 = text4 * 525600;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Year") && (option6 == "Second")) {
        text5 = text4 * 31557600;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Year") && (option6 == "Milisecond")) {
        text5 = text4 * 31557600000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Year") && (option6 == "Microsecond")) {
        text5 = text4 * 31557600000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Month") && (option6 == "Month")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option5 == "Month") && (option6 == "Year")) {
        text5 = text4 / 12;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Month") && (option6 == "Week")) {
        text5 = text4 * 4.345;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Month") && (option6 == "Day")) {
        text5 = text4 * 30.417;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Month") && (option6 == "Hour")) {
        text5 = text4 * 730;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Month") && (option6 == "Minute")) {
        text5 = text4 * 43800;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Month") && (option6 == "Second")) {
        text5 = text4 * 2628000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Month") && (option6 == "Milisecond")) {
        text5 = text4 * 2628000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Month") && (option6 == "Microsecond")) {
        text5 = text4 * 2628000000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Week") && (option6 == "Week")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option5 == "Week") && (option6 == "Year")) {
        text5 = text4 / 52.143;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Week") && (option6 == "Month")) {
        text5 = text4 / 4.345;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Week") && (option6 == "Day")) {
        text5 = text4 * 7;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Week") && (option6 == "Hour")) {
        text5 = text4 * 168;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Week") && (option6 == "Minute")) {
        text5 = text4 * 10080;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Week") && (option6 == "Second")) {
        text5 = text4 * 604800;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Week") && (option6 == "Milisecond")) {
        text5 = text4 * 604800000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Week") && (option6 == "Microsecond")) {
        text5 = text4 * 604800000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Day") && (option6 == "Day")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option5 == "Day") && (option6 == "Year")) {
        text5 = text4 / 365;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Day") && (option6 == "Month")) {
        text5 = text4 / 30.417;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Day") && (option6 == "Week")) {
        text5 = text4 / 7;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Day") && (option6 == "Hour")) {
        text5 = text4 * 24;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Day") && (option6 == "Minute")) {
        text5 = text4 * 1440;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Day") && (option6 == "Second")) {
        text5 = text4 * 86400;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Day") && (option6 == "Milisecond")) {
        text5 = text4 * 86400000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Day") && (option6 == "Microsecond")) {
        text5 = text4 * 86400000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Hour") && (option6 == "Hour")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option5 == "Hour") && (option6 == "Year")) {
        text5 = text4 / 8670;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Hour") && (option6 == "Month")) {
        text5 = text4 / 730;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Hour") && (option6 == "Week")) {
        text5 = text4 / 168;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Hour") && (option6 == "Day")) {
        text5 = text4 / 24;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Hour") && (option6 == "Minute")) {
        text5 = text4 * 60;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Hour") && (option6 == "Second")) {
        text5 = text4 * 3600;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Hour") && (option6 == "Milisecond")) {
        text5 = text4 * 3600000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Hour") && (option6 == "Microsecond")) {
        text5 = text4 * 3600000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Minute") && (option6 == "Minute")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option5 == "Minute") && (option6 == "Year")) {
        text5 = text4 / 525600;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Minute") && (option6 == "Month")) {
        text5 = text4 / 43800;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Minute") && (option6 == "Week")) {
        text5 = text4 / 10080;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Minute") && (option6 == "Day")) {
        text5 = text4 / 1440;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Minute") && (option6 == "Hour")) {
        text5 = text4 / 60;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Minute") && (option6 == "Second")) {
        text5 = text4 * 60;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Minute") && (option6 == "Milisecond")) {
        text5 = text4 * 60000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Minute") && (option6 == "Microsecond")) {
        text5 = text4 * 60000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Second") && (option6 == "Second")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option5 == "Second") && (option6 == "Year")) {
        text5 = text4 / 31557600;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Second") && (option6 == "Month")) {
        text5 = text4 / 2628000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Second") && (option6 == "Week")) {
        text5 = text4 / 604800;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Second") && (option6 == "Day")) {
        text5 = text4 / 86400;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Second") && (option6 == "Hour")) {
        text5 = text4 / 3600;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Second") && (option6 == "Minute")) {
        text5 = text4 / 60;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Second") && (option6 == "Milisecond")) {
        text5 = text4 * 1000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Second") && (option6 == "Microsecond")) {
        text5 = text4 * 1000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Milisecond") && (option6 == "Milisecond")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option5 == "Milisecond") && (option6 == "Year")) {
        text5 = text4 / 31557600000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Milisecond") && (option6 == "Month")) {
        text5 = text4 / 2628000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Milisecond") && (option6 == "Week")) {
        text5 = text4 / 604800000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Milisecond") && (option6 == "Day")) {
        text5 = text4 / 86400000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Milisecond") && (option6 == "Hour")) {
        text5 = text4 / 3600000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Milisecond") && (option6 == "Minute")) {
        text5 = text4 / 60000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Milisecond") && (option6 == "Second")) {
        text5 = text4 / 1000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Milisecond") && (option6 == "Microsecond")) {
        text5 = text4 * 1000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Microsecond") && (option6 == "Microsecond")) {
        document.getElementById("dev").style.display = "block";
    }
    if ((option5 == "Microsecond") && (option6 == "Year")) {
        text5 = text4 / 31557600000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Microsecond") && (option6 == "Month")) {
        text5 = text4 / 2628000000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Microsecond") && (option6 == "Week")) {
        text5 = text4 / 604800000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Microsecond") && (option6 == "Day")) {
        text5 = text4 / 86400000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Microsecond") && (option6 == "Hour")) {
        text5 = text4 / 3600000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Microsecond") && (option6 == "Minute")) {
        text5 = text4 / 60000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Microsecond") && (option6 == "Second")) {
        text5 = text4 / 1000000;
        document.getElementById("in6").value = text5;
    }
    if ((option5 == "Microsecond") && (option6 == "Milisecond")) {
        text5 = text4 / 1000;
        document.getElementById("in6").value = text5;
    }
}