function search_f_d(search,outp){
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
 if (search=='gard')
{
    filename='gard.png';
    discription='Service: Garderobe'; discription2='service: coat rack';
} 

 if (search=='gap')
{
    filename='gap.png';
    discription='Service: Gruppenarbeitspl&#228;tze'; discription2='service: group workplaces';
} 

 if (search=='ohrst')
{
    filename='ohrst.png';
    discription='Service: Ohrst&#246;pselautomat'; discription2='service: earplug dispenser';
} 
 if (search=='kat')
{
    filename='kat.png';
    discription='Service: OPAC-Terminal'; discription2='service: OPAC terminal';
} 
 if (search=='sca')
{
    filename='sca.png';
    discription='Service: Scanner'; discription2='service: scanner';
}
 if (search=='schli')
{
    filename='schli.png';
    discription='Service: Schlie&#223;f&#228;cher'; discription2='service: lockers';
} 
if (search=='schneid')
{
    filename='schneid.png';
    discription='Service: Schneidemaschine, Tacker, Locher'; discription2='service: cutter, stapler, hole punch';
} 
 if (search=='selb')
{
    filename='selb.png';
    discription='Service: Selbstverbucher'; discription2='service: self-service terminal';
} 

 if (search=='vidl')
{
    filename='vidl.png';
    discription='Service: Videolounge'; discription2='service: video lounge';
} 

  
 if (search=='link')
{
    filename='this is not a picture'; discription2='image it is a link';
    discription='http://boss.bsz-bw.de/HSFU/?myTheme=jquerymobile';
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

if (search=='neumed')
{
    filename='neumed.png';
    discription='Medien: Neuerwerbungen'; discription2='media: new acquisition';
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
    discription='Medien: Zeitschriften'; discription2='media: magazines';
} 
 if (search=='zeiarch')
{
    filename='zeiarch.png';
    discription='Medien: Zeitschriftenarchiv'; discription2='media: newspaper archive';
} 
 if (search=='zeitungen')
{
    filename='zeitungen.png';
    discription='Medien: Zeitungen'; discription2='media: newspapers';
} 
 
 if (search=='fivi')
{
    filename='fivi.png';
    discription='Filme, Videolounge'; discription2='films, video lounge';
} 


 

 if (search=='f_campusplan')
{
    filename='camp1.png';
    discription='Campusplan Furtwangen';
    discription2='Campus map Furtwangen';
} 

 if (search=='s_campusplan')
{
    filename='s_campusplan.png';
    discription='Campusplan Schwenningen';
    discription2='Campus map Villingen-Schwenningen';
} 
 if (search=='t_campusplan')
{
    filename='t_campusplan.png';
    discription='Campusplan Tuttlingen';
    discription2='Campus map Tuttlingen';
} 


 if (search=='f_campusplan_eng')
{
    filename='f_campusplan_eng.png';
    discription='Campusplan Furtwangen';
    discription2='Campus map Furtwangen';
} 

 if (search=='s_campusplan_eng')
{
    filename='s_campusplan_eng.png';
    discription='Campusplan Schwenningen';
    discription2='Campus map Villingen-Schwenningen';
} 
 if (search=='t_campusplan_eng')
{
    filename='t_campusplan_eng.png';
    discription='Campusplan Tuttlingen';
    discription2='Campus map Tuttlingen';
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
