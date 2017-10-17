var life = 27486;

update_wallet ();

$('.item').click(function() {
var item= $(this).data('item'),
amount= $(this).data('amount');

charge_card(amount, item);
});



function charge_card(amount, item) {

if ( life >= amount) {
life= life - amount;
update_wallet();
$('.closet-items').prepend(item + ', ');
} else {
alert('not enough money');
}
}


function update_wallet() {
$('.life').html(cash);
}