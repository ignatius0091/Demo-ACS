


$( document ).ready(function() 
{
    console.log( "Nav Ready" );
    
});

// ===========================================================================================================================
// ===========================================================================================================================
// ===========================================================================================================================


function nav_link(link_type)
{

    
    if(link_type=='ig_manajemen')
    {
            open('https://www.instagram.com/service_iphone_balikpapan/', '_blank');
    }

    if(link_type=='info_kontak')
    {
                open('https://kontak.acsborneo.id/', '_blank');
    }

    if(link_type=='member_info') // 54K viewer IG  // 25 okt 24 
    {
         open('https://www.instagram.com/reel/C_cfSyUR4G_/', '_blank');
    }

    if(link_type== 'map_gugun')
    {
        open('https://www.google.com/maps/place/Acs+Gunung+Guntur+Service+Iphone+Balikpapan/@-1.2538435,116.8341298,15z/data=!4m5!3m4!1s0x0:0xceb29c76851ba3d1!8m2!3d-1.254959!4d116.8422837', '_blank');
    }

    if(link_type== 'map_mt')
    {
        open('https://www.google.com/maps/place/Acs+Service+Mt+Haryono+service+iphone+balikpapan/@-1.2447796,116.8694659,17z/data=!3m1!4b1!4m5!3m4!1s0x2df14705810b5049:0xb05244031f1896f8!8m2!3d-1.2447884!4d116.8716694', '_blank');
    }

    if(link_type== 'map_sepinggan')
    {
        open('https://www.google.com/maps/place/Acs+Cabang+Sepinggan+Service+Iphone+Balikpapan/@-1.2572864,116.9078694,17z/data=!3m1!4b1!4m5!3m4!1s0x2df14529cf831e23:0xbb049ff9c6b16147!8m2!3d-1.2572918!4d116.9100581', '_blank');
    }


    if(link_type=='link_fb')
    {
        open('https://web.facebook.com/profile.php?id=61550788057378', '_blank');
    }

    if(link_type=='link_ig')
    {
        open('https://www.instagram.com/service_apple_balikpapan/', '_blank');
    }

    if(link_type=='link_tiktok')
    {
        open('https://www.tiktok.com/@service_apple_balikpapan', '_blank');
    }
            
        

}




// ===========================================================================================================================
// ===========================================================================================================================
// ===========================================================================================================================

function nav_kontak(kontak_type)
{

    var nomor_WA = '';


    if(kontak_type=='konsul')
    {
            nomor_WA = '6281911825720';
            open('https://api.whatsapp.com/send?phone='+nomor_WA+'&text=Halo ACS, saya ingin konsul', '_blank');
    }

    if(kontak_type=='member_join')
    {
        nomor_WA = '6281911825720';
        open('https://api.whatsapp.com/send?phone='+nomor_WA+'&text=Halo ACS, cara info join member ?', '_blank');
    }

    if(kontak_type=='cabang_gugun')
    {
            nomor_WA = '6282251761190';
            open('https://api.whatsapp.com/send?phone='+nomor_WA+'&text=Halo ACS Gunung Guntur, saya ingin service unit', '_blank');
    }

    
    if(kontak_type=='cabang_MT')
    {
                nomor_WA = '628115992277';
                open('https://api.whatsapp.com/send?phone='+nomor_WA+'&text=Halo ACS MT Haryono, saya ingin service unit', '_blank');
    }

    if(kontak_type=='cabang_sepinggan')
        {
                    nomor_WA = '6208115993377';
                    open('https://api.whatsapp.com/send?phone='+nomor_WA+'&text=Halo ACS Sepinggan, saya ingin service unit', '_blank');
        }


    
    
}