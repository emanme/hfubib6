function search_s_d(search,outp){
    var  filename='no',discription='';


 if (search=='bein')
{
    filename='bein.png';
    discription='Service: Beratung und Information '; discription2='service: advice and information';
} 
 if (search=='eap')
{
    filename='eap.png';
    discription='Service: Einzelarbeitspl&#228;tze '; discription2='service: individual workplaces';
} 
 if (search=='gap')
{
    filename='gap.png';
    discription='Service: Gruppenarbeitspl&#228;tze '; discription2='service: group workplaces';
} 
 
 if (search=='kart')
{
    filename='kart.png';
    discription='Service: Kartenaufwerter, Kassenautomat '; discription2='service: card charger, automatic pay station';
} 
 if (search=='ohrst')
{
    filename='ohrst.png';
    discription='Service: Ohrst&#246;pselautomat '; discription2='service: earplug dispenser';
} 
 if (search=='kat')
{
    filename='kat.png';
    discription='Service: OPAC-Terminal '; discription2='service: OPAC terminal';
} 
if (search=='rueck')
{
    filename='rueck.png';
    discription='Service: R&#252;ckgabebox '; discription2='service: return box';
} 
if (search=='rueckgawa')
{
    filename='rueckgawa.png';
    discription='Service: R&#252;ckgabewagen '; discription2='service: book return cart';
} 
 if (search=='sca')
{
    filename='sca.png';
    discription='Service: Scanner '; discription2='service: scanner';
}
 if (search=='selb')
{
    filename='selb.png';
    discription='Service: Selbstverbucher '; discription2='service: self-service terminal';
} 
 if (search=='schli')
{
    filename='schli.png';
    discription='Service: Schlie&#223;f&#228;cher '; discription2='service: lockers';
} 
 if (search=='tack_loch')
{
    filename='tack_loch.png';
    discription='Service: Tacker, Locher '; discription2='service: stapler, hole punch';
} 
 
 if (search=='vidl')
{
    filename='vidl.png';
    discription='Service: Videolounge '; discription2='service: video lounge';
} 
 


 //if (search=='gard')
//{
 //   filename='gard.png';
 //   discription='Garderobe '; discription2='coat rack';
//} 


 

//media ##################
 if (search=='enbue')//media
{
    filename='OG/enbue.png';
    discription='Medien: Entleihbare B&#252;cher '; discription2='media: lending books';
} 
 if (search=='film')//media
{
    filename='film.png';
    discription='Medien: Filmothek '; discription2='media: film library';
} 
if (search=='neumed')//media
{
    filename='neumed.png';
    discription='Medien: Neuerwerbungen '; discription2='media: new acquisition';
} 
if (search=='vde_vdi')//media
{
    filename='vde_vdi.png';
    discription='Medien: Normenregal VDE '; discription2='media: VDE guidelines';
} 

 if (search=='prae')//media
{
    filename='prae.png';
    discription='Medien: Pr&#228;senzb&#252;cher '; discription2='media: reference books';
} 
 if (search=='wopro')//media
{
    filename='wopro.png';
    discription='Medien: Workshopb&#252;cher, Semesterapparate'; discription2='media: course reserve';
} 
 if (search=='zeizei')//media
{
    filename='zeizei.png';
    discription='Medien: Zeitschriften '; discription2='media: magazines';
} 
 if (search=='zeiarch')//media
{
    filename='zeiarch.png';
    discription='Medien: Zeitschriftenarchiv '; discription2='media: newspaper archive';
} 

 if (search=='zeitungen')//media
{
    filename='zeitungen.png';
    discription='Medien: Zeitungen '; discription2='media: newspapers';
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