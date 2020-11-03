function open_curtain()
{
 $("#curtain1").animate({width:20},1000);//animate width:20 significa che l'immagine si comprimerà tramite animate in 20px
 $("#curtain2").animate({width:20},1000);
}
function close_curtain()
{
 $("#curtain1").animate({width:200},1000);//e viceversa
 $("#curtain2").animate({width:191},1000);
}
