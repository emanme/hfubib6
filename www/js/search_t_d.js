function search_t_d(search,outp){
    var  filename='no',discription='';

 if (search=='bein')
{
    filename='bein.png';
    discription='Service: Beratung und Information'; discription2='service: advice and information';
} 
 if (search=='eap')
{
    filename='eap.png';
    discription='Service: Einzelarbeitspl&#228;tze'; discription2='service: individual workplaces';
} 
 if (search=='gap')
{
    filename='gap.png';
    discription='Service: Gruppenarbeitspl&#228;tze'; discription2='service: group workplaces';
} 
  
 if (search=='sca')
{
    filename='sca.png';
    discription='Service: Scanner'; discription2='service: scanner';
} 
 if (search=='selb')
{
    filename='selb.png';
    discription='Service: Selbstverbucher'; discription2='service: self-service terminal';
} 
 if (search=='kat')
{
    filename='kat.png';
    discription='Service: OPAC-Terminal'; discription2='service: OPAC terminal';
} 
 if (search=='enbue')
{
    filename='enbue.png';
    discription='Medien: Entleihbare B&#252;cher'; discription2='media: lending books';
} 


 if (search=='film')
{
    filename='film.png';
    discription='Medien: Filmothek'; discription2='media: film library';
} 

 if (search=='prae')
{
    filename='prae.png';
    discription='Medien: Pr&#228;senzb&#252;cher'; discription2='media: reference books';
} 

 if (search=='wopro')
{
    filename='wopro.png';
    discription='Medien: Workshopb&#252;cher, Semesterapparate'; discription2='media: course reserve';
}
 if (search=='zeizei')
{
    filename='zeizei.png';
    discription='Medien: Zeitschriften, Zeitungen'; discription2='media: magazines, newspapers';
} 

if(outp=='discription'){
    var lang = navigator.language.split("-");
var current_lang = (lang[0]);
 if(current_lang=='de'){ 
return discription;
 }
else{
    return discription2;
    }


    

}else{
     return filename;
}
}