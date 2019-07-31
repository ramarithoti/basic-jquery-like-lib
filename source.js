lib('.random').each(function(el){
    el.style.backgroundColor ='black';
    el.style.color='#fff';
    el.style.padding ='1.5em';
    el.style.lineHeight='1.5em';
    el.style.margin ='0.5em auto';
});
lib('.random').addClass('random-1').ajax('i am just checking');
lib('document').ajax('I am helper method on this library');

