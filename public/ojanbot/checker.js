var ajaxCall;

Array.prototype.remove = function(value) {
	var index = this.indexOf(value);
	if (index != -1) {
		this.splice(index, 1);
	}
	return this;
};

function enableTextArea(bool) {
	$('#socks').attr('disabled', bool);
	$('#resources').attr('disabled', bool);
	$('#delim').attr('disabled', bool);
	$('#timeout').attr('disabled', bool);
	$('#fail').attr('disabled', bool);
}

function liveUp() {
	var count = parseInt($('#live-count').html());
	count++;
	$('#live-count').html(count+'');
}

function dieUp() {
	var count = parseInt($('#die-count').html());
	count++;
	$('#die-count').html(count+'');
}

function wrongUp() {
	var count = parseInt($('#wrong-count').html());
	count++;
	$('#wrong-count').html(count+'');
}

function badUp() {
	var count = parseInt($('#bad-count').html());
	count++;
	$('#bad-count').html(count+'');
}

function updateTitle(str) {
	document.title = str;
}

function updateResources(mp, sock) {
	var mailpass = $('#resources').val().split("\n");
	var socks = $('#socks').val().split("\n");
	mailpass.remove(mp);
	socks.remove(sock);
	$('#socks').val(socks.join("\n"));
	$('#resources').val(mailpass.join("\n"));
}

function resetResult() {
	$('#acc-die, #acc-wrong, #acc-bad').html('');
	$('#die-count, #wrong-count, #bad-count').text(0);
}

function filterMP(mp, delim) {
	var mps = mp.split("\n");
	var filtered = new Array();
	var lstMP = new Array();
	for (var i = 0; i < mps.length; i++) {
		if (mps[i].indexOf('@') != -1) {
			var infoMP = mps[i].split(delim);
			for (var k = 0; k < infoMP.length; k++) {
				if (infoMP[k].indexOf('@') != -1) {
					var email = $.trim(infoMP[k]);
					var pwd = $.trim(infoMP[k + 1]);
					if (filtered.indexOf(email.toLowerCase()) == -1) {
						filtered.push(email.toLowerCase());
						lstMP.push(email+'|'+pwd);
						break;
					}
				}
			}
		}
	}
	return lstMP;
}

function stopCheck(bool) {
	enableTextArea(false);
	$('#check').attr('disabled', false);
	$('#pause').attr('disabled', true);
	if (bool == true) {
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Checking complete!',
			showConfirmButton: false,
			timer: 1500
		});
		updateTitle('Completed - SocialIndo');
	} else {
		ajaxCall.abort();
		updateTitle('Paused - SocialIndo');
	}
}

function noBalance() {
	enableTextArea(false);
	$('#check').attr('disabled', false);
	$('#pause').attr('disabled', true);
	if (bool == true) {
		Swal.fire({
			position: 'top-end',
			icon: 'warning',
			title: 'Make sure your balance is enough!',
			showConfirmButton: false,
			timer: 1500
		});
		updateTitle('Stopped - SocialIndo');
		return false;
	}
}

$(document).ready(function() {
	$('#pause').attr('disabled', true).click(function() {
		stopCheck(false);
	});
	$('#live').click(function() {
		$('#acc-live').toggle(400);
	});
	$('#die').click(function() {
		$('#acc-die').toggle(400);
	});
	$('#wrong').click(function() {
		$('#acc-wrong').toggle(400);
	});
	$('#bad').click(function() {
		$('#acc-bad').toggle(400);
	});
})