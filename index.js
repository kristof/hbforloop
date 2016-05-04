module.exports.register = function (Handlebars, options)  {
  Handlebars.registerHelper('for', function(from, to, step, isIncrement, block) {
      var accum = '';
      if(isIncrement){
        for(var i = from; i <= to; i += step)
            accum += block.fn(i);
      }else{
        for(var i = from; i <= to; i -= step)
            accum += block.fn(i);
      }
      return accum;
  });
};
