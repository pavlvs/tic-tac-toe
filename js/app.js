$(document).ready(function () {
    let x = 'x';
    let o = 'o';
    let player = 0;
    let turns = 0;

    let spot1 = $('#spot1');
    let spot2 = $('#spot2');
    let spot3 = $('#spot3');
    let spot4 = $('#spot4');
    let spot5 = $('#spot5');
    let spot6 = $('#spot6');
    let spot7 = $('#spot7');
    let spot8 = $('#spot8');
    let spot9 = $('#spot9');

    $('#board li').on('click', function () {
        turns++
        if (player === 0) {
            $(this).addClass('o').text('o');
            player = 1;
        } else {
            $(this).addClass('x').text('x');
            player = 0;
        }
        if (
            spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
            spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
            spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
            spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
            spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
            spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
            spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
            spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
        ) {
            console.log('the os have it');
        } else if (
            spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
            spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
            spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
            spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
            spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
            spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
            spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
            spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')

        ) {
            console.log('the xs have it');
        }else if (turns === 9) {
            console.log('It\'s a tie!');
        }
    });
    $('#reset').on('click', function () {
        $('#board li').removeClass().text('+');
        turns = 0;
        player = 0;
    });
})