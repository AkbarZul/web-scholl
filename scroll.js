//event saat klik
// $('.page-scroll').on('click', e => {

//     //ambil isi href
//     var tujuan = $(this).attr('href')
//         //tangkap elemen
//     var elemenTujuan = $(tujuan);
//     //pindahkan scroll
//     $('body').animate({
//         scrollTop: elemenTujuan.offset().top
//     }, 1000, 'swing');


//     e.preventDefault();

// }, 1000);

const makenavbar = () => {
    const navlink = document.querySelectorAll('.page-scroll');

    for (let n in navlink) {
        if (navlink.hasOwnProperty(n)) {
            navlink[n].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(navlink[n].hash)
                    .scrollIntoView({
                        behavior: "smooth"

                    })
            })
        }
    }
}

makenavbar();