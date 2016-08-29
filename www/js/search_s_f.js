function search_s_f(search,outp){
    var  filename='no',discription='';


 if (search=='a')
{
    filename='a.png';
    discription='Fachgebiet: Allgemeines'; discription2='subject: general';
} 
 if (search=='b')
{
    filename='b.png';
    discription='Fachgebiet: Betriebswirtschaftslehre'; discription2='subject: business administration';
} 
 if (search=='c')
{
    filename='c.png';
    discription='Fachgebiet: Chemie'; discription2='subject: chemistry';
} 
 if (search=='e')
{
    filename='e.png';
    discription='Fachgebiet: Elektrotechnik, Technik'; discription2='subject: electrical engineering, technology';
} 
if (search=='i')
{
    filename='i.png';
    discription='Fachgebiet: Informatik'; discription2='subject: computing';
} 
if (search=='f')
{
    filename='f.png';
      discription='Fachgebiet: Maschinenbau, Fertigungstechnik'; discription2='subject: mechanical engineering, manufacturing engineering';
} 
 if (search=='m')
{
    filename='m.png';
    discription='Fachgebiet: Mathematik'; discription2='subject: mathematics';
} 
 if (search=='n')
{
    filename='n.png';
    discription='Fachgebiet: Medien'; discription2='subject: media';
} 


 if (search=='d')
{
    filename='d.png';
    discription='Fachgebiet: Medizin'; discription2='subject: medicine';
} 
 if (search=='p')
{
    filename='p.png';
    discription='Fachgebiet: Physik'; discription2='subject: physics';
} 
 
 if (search=='g')
{
    filename='g.png';
    discription='Fachgebiet: Psychologie'; discription2='subject: psychology';
} 
 if (search=='h')
{
    filename='h.png';
    discription='Fachgebiet: Soziologie'; discription2='subject: sociology';
} 
  if (search=='u')
{
    filename='u.png';
    discription='Fachgebiet: Umwelt, &#214;kologie, Energie'; discription2='subject: environment, ecology, energy';
} 
 if (search=='v')
{
    filename='v.png';
    discription='Fachgebiet: Volkswirtschaftslehre'; discription2='subject: political economics';
} 
 if (search=='w')
{
    filename='w.png';
    discription='Fachgebiet: Werkstoffe'; discription2='subject: materials';
} 




 //if (search=='rs')
//{
 //   filename='rs.png';
 //   discription='Fachgebiet'; discription2='subject: Regelungs- und Steuertechnik'; discription2='industrial process measurement and control';
//} 
 //if (search=='x')
//{
//    filename='x.png';
//    discription='Fachgebiet'; discription2='subject: Messtechnik'; discription2='measurement engineering';
//} 


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