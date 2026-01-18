// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*$('.container').addClass('container-fluid').removeClass('container');*/
$('.Home-pie').hide();

$('.Home-jobs').mouseover(function () {
    $('.Home-pie').fadeIn(2000); 
});

$('.Home-pie').mouseleave(function () {
    $('.Home-pie').hide();
});

$('.Home-div2').mouseenter(function () {
    $('.Home-pie').hide();
}); 



