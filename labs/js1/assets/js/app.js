var cash = 15000;

$('.cash').html(cash);

update_wallet();

$('.item').click(function() {
	var item   = $(this).data('item'),
	    amount = $(this).data('amount');

	charge_card(amount, item);
});

function charge_card(amount, item){
    if (cash >= amount) {
	cash = cash - amount;
	update_wallet();
	console.log(cash);
	$('closet-items').append(item + ', ');
  } else {
  	console.log('not enough money.')
  }
}

function update_wallet(){
	$('cash').html
}
