var name_of_the_students = [];
function submit(){
    name_of_the_students.push(document.getElementById("name").value);
    console.log(name_of_the_students);
    document.getElementById("show_name_1").innerHTML = name_of_the_students;
}
function show(){
    var length = name_of_the_students.length;
    console.log(length);
    var show_students = [];
    for(var i=0;i<length;i++){
        var name = name_of_the_students[i];
        show_students.push(name+"<br>");
    }
    var remove_commas = show_students.join(" ");
    console.log(remove_commas);
    document.getElementById("show_name_2").innerHTML = remove_commas+"<br>";
}
function sort(){
    var show_students_sort = [];
    var length = name_of_the_students.length;
    for(var i=0;i<length;i++){
        var name = name_of_the_students[i];
        show_students_sort.push(name);
    }
    show_students_sort.sort();
    document.getElementById("show_name_sorted_list").innerHTML = show_students_sort;
}
function search(){
    var name = document.getElementById("name_search").value;
    console.log(name);
    var length = name_of_the_students.length;
    var count=0;
    for(var i=0;i<length;i++){
        if(name_of_the_students[i] == name){
            count = count + 1;
        }
    }
    document.getElementById("show_name_search").innerHTML = "Name found "+count+" time/s";
}