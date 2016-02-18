var hasClass = {
  not: function(expr){
    return "not(" + expr + ")";
  },
  one: function(className){
    return "contains(concat(' ', normalize-space(@class), ' '), ' " + className.trim() + " ')";
  },
  notOne: function(className) {
    return hasClass.not( hasClass.one(className) );
  },
  all: function(classesArray){
    return classesArray.map(hasClass.one).join(' and ');
  },
  some: function(classesArray){
    return classesArray.map(hasClass.one).join(' or ');
  },
  notAny: function(classesArray){
    return hasClass.not( hasClass.some(classesArray) );
  }
};


module.exports = hasClass;
