function HBTemplate(source, data, element){
  this.element=document.getElementById(element);
  this.source=document.getElementById(source).innerHTML;
  this.template=Handlebars.compile(this.source);
  this.context=data;
  this.html=this.template(this.context);
  this.render=function(){
    this.element.innerHTML=this.html
  }
}

var ulName = new HBTemplate("containerTpl", {name:"Diego", lastName:"Paredes"}, "container");
ulName.render();

var ulOtherElement = new HBTemplate("otherTpl", {name:"Diego", lastName:"Paredes"}, "other");
ulOtherElement.render();

// var source = document.getElementById("container").innerHTML;
// var template = Handlebars.compile(source);
// var context = {
//   name:"Diego",
//   lastName:"Paredes"
// }
// var html = template(context);
// console.log(html)
