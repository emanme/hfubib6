function search_f_f(search,outp){
    var  filename='no',discription='',discriptioneng='';

 if (search=='a')
{
    filename='a.png';
    discription='Fachgebiet: Allgemeines';
    discriptioneng='subject: general';
} 
 if (search=='b')
{
    filename='b.png';
    discription='Fachgebiet: Betriebswirtschaftslehre';
    discriptioneng='subject: business administration';
} 
 if (search=='c')
{
    filename='c.png';
    discription='Fachgebiet: Chemie';
    discriptioneng='subject: chemistry';
} 
 if (search=='d')
{
    filename='d.png';
    discription='Fachgebiet: Medizin';
    discriptioneng='subject: medicine';
} 
 if (search=='e')
{
    filename='e.png';
    discription='Fachgebiet: Elektrotechnik, Technik';
    discriptioneng='subject: electrical engineering, technology';
} 
 if (search=='f')
{
    filename='f.png';
    discription='Fachgebiet: Maschinenbau, Fertigungstechnik';
    discriptioneng='subject: mechanical engineering, manufacturing engineering';
} 
 if (search=='g')
{
    filename='g.png';
    discription='Fachgebiet: Psychologie';
    discriptioneng='subject: psychology';
} 
 if (search=='h')
{
    filename='h.png';
    discription='Fachgebiet: Soziologie';
    discriptioneng='subject: sociology';
} 
 if (search=='i')
{
    filename='i.png';
    discription='Fachgebiet: Informatik';
    discriptioneng='subject: computing';
} 
 if (search=='m')
{
    filename='m.png';
    discription='Fachgebiet: Mathematik';
    discriptioneng='subject: mathematics';
} 
 if (search=='n')
{
    filename='n.png';
    discription='Fachgebiet: Medien';
    discriptioneng='subject: media';
} 
 if (search=='p')
{
    filename='p.png';
    discription='Fachgebiet: Physik';
    discriptioneng='subject: physics';
} 
 if (search=='rs')
{
    filename='rs.png';
    discription='Fachgebiet: Regelungs- und Steuertechnik';
    discriptioneng='subject: industrial process measurement and control';
} 
 if (search=='t')
{
    filename='t.png';
    discription='Fachgebiet: Technik';
    discriptioneng='subject: technology';
} 
 if (search=='u')
{
    filename='u.png';
    discription='Fachgebiet: Umwelt, &#214;kologie, Energie';
    discriptioneng='subject: environment, ecology, energy';
} 
 if (search=='v')
{
    filename='v.png';
    discription='Fachgebiet: Volkswirtschaftslehre';
    discriptioneng='subject: political economics';
} 
 if (search=='w')
{
    filename='w.png';
    discription='Fachgebiet: Werkstoffe';
    discriptioneng='subject: materials';
} 
 if (search=='x')
{
    filename='x.png';
    discription='Fachgebiet: Messtechnik';
    discriptioneng='subject: measurement engineering';
} 

var lang = navigator.language.split("-");
var current_lang = (lang[0]);
    

if(outp=='discription'){
    if(current_lang=='de'){
          return discription;
        }
    else{
        return discriptioneng; 
    }
}else{
     return filename;
}
}
